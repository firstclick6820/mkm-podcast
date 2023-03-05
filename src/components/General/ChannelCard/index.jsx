import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

export default function ChannelCard({channel}) {
  console.log(channel)

  return (
    <Card sx={{ display: 'flex', justifyContent: 'center', flexDirection: "column" , alignItems: "center"}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Link 
                style={{color: 'inherit'}}>{channel.name}</Link>
        </CardContent>
      <CardMedia component="img"
                 sx={{ width: 75 }}
                 image='https://picsum.photos/200/200?grayscale'
                //  image={channel.image_url ? channel.image_url : 'https://picsum.photos/200/300?grayscale'}
                 alt={channel.name}/>
    </Card>
  );
}