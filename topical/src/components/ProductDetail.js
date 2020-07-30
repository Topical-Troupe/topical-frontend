import React from 'react'
import { Grid, Typography, CardMedia } from '@material-ui/core'
import List from '@material-ui/core/List'

function ProductDetail (props) {

  const results = this.props.results

  return (
    <Grid container direction='column'>
      <div>
        <Typography variant='h4' gutterBottom>
          {results.name}
        </Typography>
        <Typography variant='h5' gutterBottom>
          {results.description}
        </Typography>
        <CardMedia>
          {results.imageURL}
        </CardMedia>
        <List>
          {results.ingredients}
        </List>
      </div>
    </Grid>
  )
}

// This data needs upc--will make API call with that, like in barcode scanner 
export default ProductDetail
