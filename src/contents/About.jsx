import React from 'react'
import { 
  Grid,
  Box
} from '@mui/material'

// Import Components
import SideBarCard from '../components/General/SideBarCard'





const About = () => {
  return (
    <Grid container spacing={1}>

      <Grid item xs={12} md={4}>
          <SideBarCard title="About" />
      </Grid>
      
      <Grid item xs={12} md={8}>
        <Box>
          <h2>About Items</h2>
        </Box>
      </Grid>
      
    </Grid>
  )
}

export default About
