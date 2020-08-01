import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const ProductList = ({ result, upc }) => {
  const history = useHistory()
  const [itemId, setItemId] = useState('')
  const containerStyles = {
    height: '100vh',
    overflow: 'auto',
    textAlign: 'center',
    padding: '5vh',
    alignItems: 'center'
  }
  console.log(result)
  const handleClick = (id) => e => {
    e.preventDefault()
    console.log(id)
    history.push(`/productdetail/${upc}`)
  }

  return (
    <Grid container direction='column'>
      <div style={containerStyles}>
        <div>
          <button>
            {!result
              ? (
                <h1>No results found</h1>
              )
              : (
                <div>
                  {result.map((item) => (
                    <p key={item.id} onClick={handleClick(item.upc)}>
                      {item.name}
                      <img src={item.image_url} />
                      {item.upc}
                    </p>
                  ))}
                </div>
              )}
          </button>
        </div>
      </div>
    </Grid>
  )
}

export default ProductList
