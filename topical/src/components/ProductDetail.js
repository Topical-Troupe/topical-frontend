import React, { useEffect, useState } from 'react'
import { Grid, Typography, CardMedia, ListItem } from '@material-ui/core'
import axios from 'axios'

function ProductDetail ({ result }) {
  const [ingredients, setIngredients] = useState('')
  const containerStyles = {
    height: '100vh',
    overflow: 'auto',
    textAlign: 'center',
    padding: '5vh'
  }
  // useEffect(async () => {
  const getIngredients = async (event) => {
    try {
      const result = await axios
      event.preventDefault()
        .get(`https://shopical.herokuapp.com/api/product/${result.upc}/ingredients/`, {
          headers: {
            Authorization: 'Token 29174f9636c35eb521cb2ee74e7558dd5ecb3486'
          }
        })
      setIngredients(result)
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Grid container direction='column'>
      <div style={containerStyles}>
        {!result
          ? (
            <h1>No results found</h1>
          )
          : (
            <div>
              <h1>{result.name}</h1>
              <img src={result.image_url} />
            </div>
          )}
        <div>
          {/* <div>
            {ingredients.map((ingredient) => (
              <p key={ingredient.id}>
                {ingredient}
              </p>))}
          </div> */}
        </div>
      </div>
    </Grid>
  )
}

export default ProductDetail
