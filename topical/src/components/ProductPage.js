import React from 'react'
import { Grid, Typography, CardMedia } from '@material-ui/core'
import List from '@material-ui/core/List'

function Product (props) {
//   const [name, setName] = useState('')
//   const [imageURL, setimageURL] = useState('')
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

export default Product
