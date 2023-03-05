import React from 'react'
import { 
  Grid,
  Box,
  Typography
} from '@mui/material'


import CategoriesSlider from '../utils/CategoriesSlider'

import { useSelector } from 'react-redux'


const Home = () => {
  const categories = useSelector(state=> state.podcasts.categories)


  if(!categories) return null;


  return (
    <Grid container spacing={1} gap={2} mt={2}>

      <Grid item xs={12} >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant='h5'>Welcome, To <strong>MKM Podcast</strong></Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        {categories && <CategoriesSlider slides={categories} />}
      </Grid>


  </Grid>
)
}

export default Home
