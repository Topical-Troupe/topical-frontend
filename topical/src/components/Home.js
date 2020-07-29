import React from 'react'
import { Grid, Typography, Box, colors, TableContainer } from '@material-ui/core'
import BarcodeSearch from './BarcodeSearch'
import NameSearch from './NameSearch'
import QuaggaDisplay from './QuaggaDisplay'

const Home = () => {
  const containerStyles = {
    height: '100vh',
    overflow: 'auto',
    textAlign: 'center',
    padding: '5vh'
  }
  return (
    <Grid container direction='column'>
      <div style={containerStyles}>
        <Typography variant='h2' gutterBottom>
        Topical
        </Typography>
        <Box m={6}>
          <Typography variant='h4' gutterBottom>
        To get started, scan a product or enter the UPC:
          </Typography>
          <QuaggaDisplay />
        </Box>
        <Typography variant='h4' gutterBottom>
        Or search by product name:
        </Typography>
        <NameSearch />
      </div>
    </Grid>
  )
}

export default Home
