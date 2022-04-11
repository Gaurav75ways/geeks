import React from 'react'
import {Box, Container, Typography, Card, Button, Grid} from '@mui/material'
import {Link} from "react-router-dom"

function Signup() {
  return(
    <Box>
    <Container>
      <div className="heading">
        <Typography variant="h6">
          Sign Up
        </Typography>
      </div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
      <Grid item xs={3}>
      <Card sx={{height:'10em', width:'50em', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Link to="/signup/candidate">
          <Button variant="contained" color="primary">
            AS A CANDIDATE
          </Button>
        </Link>
      </Card>
      </Grid>
      </Grid>
    </Container>
  </Box>
  )
}

export default Signup