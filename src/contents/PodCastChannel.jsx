import React from 'react'
import { 
  Grid,
  Box,
  Typography
} from '@mui/material'

import { useParams } from 'react-router-dom'

import ChannelSlider from '../utils/ChannelSlider'
import ListCard from '../components/General/ListCard'

import { useSelector, useDispatch } from 'react-redux'
import { loadChannel } from '../actions/podcasts'


const PodCastChannel = () => {
    const dispatch = useDispatch()
    const {uid} = useParams();  
    const channel = useSelector(state=> state.podcasts.channel)
    console.log(channel)

    React.useEffect(()=> {
        dispatch(loadChannel(uid))
    }, [dispatch, uid])


  if(!channel) return null;


  return (
    <Grid container spacing={1} gap={4} mt={2}>

      <Grid item xs={12} >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant='h5'>Welcome, To <strong>{channel && channel.category.name} Channel</strong></Typography>
        </Box>
      </Grid>



      <Grid item xs={12}>
        {channel && <ChannelSlider slides={channel.category.sub_categories} />}
      </Grid>


      <Grid item xs={12} container spacing={2}>
      {(channel && channel.list) &&
        channel.list.map((item) => (
          <Grid item xs={12} sm={6} md={3} lg={4} key={item.id}>
            <ListCard item={item} />
          </Grid>
        ))}
    </Grid>

  </Grid>
)
}

export default PodCastChannel
