import React from 'react'
import { Grid } from '@material-ui/core'

const ProductList = ({ result }) => {
  const containerStyles = {
    height: '100vh',
    overflow: 'auto',
    textAlign: 'center',
    padding: '5vh'
  }
  return (
    <Grid container direction='column'>
      <div style={containerStyles}>
        {!result
          ? (
            <h1>No results found</h1>
          )
          : (
            <h1>{result[0].name}</h1>
          )}
      </div>
    </Grid>
  )
}

export default ProductList
