import React, { useEffect, useState } from 'react'
import { Grid, Typography, CardMedia, ListItem } from '@material-ui/core'

function ProductDetail ({ result }) {
  const [ingredients, setIngredients] = useState('')
  const containerStyles = {
    height: '100vh',
    overflow: 'auto',
    textAlign: 'center',
    padding: '5vh'
  }
  const axios = require('axios')
  useEffect(() => {
    try {
      return axios.get((`https://shopical.herokuapp.com/api/product/${result.upc}/ingredients/`), {
        headers: {
          Authorization: 'Token 29174f9636c35eb521cb2ee74e7558dd5ecb3486'
        },
        // violations: '',
        ingredient_list: ingredients
      })
      // setIngredients()
    } catch (error) {
      console.error(error)
    }
  })
  // console.log('fromProductdetail:', result)
  console.log(ingredient_list)
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
