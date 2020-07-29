import React from 'react'
import { Typography, Grid, Box } from '@material-ui/core'

const containerStyles = {
  height: '100vh',
  overflow: 'auto',
  textAlign: 'center',
  padding: '5vh'
}
function ProfilePage () {
  return (
    <div>
      <Grid container direction='column'>
        <div style={containerStyles}>
          <Box m={6}>
            <Typography variant='h4' gutterBottom>
        Your Profile Page
            </Typography>
          </Box>
          <Typography variant='h4' gutterBottom>
        Products you have searched
          </Typography>
        </div>
      </Grid>
    </div>
  )
}

export default ProfilePage
