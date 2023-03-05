import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function CategoriesCard({category}) {

  return (
    <Card sx={{ display: 'flex', justifyContent: 'center', flexDirection: "column" , alignItems: "center"}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Link to={`/category/${category.id}/`} 
                style={{color: 'inherit'}}>{category.name}</Link>
        </CardContent>
      <CardMedia component="img"
                 sx={{ width: 75 }}
                 image={category.image_url}
                 alt={category.name}/>
    </Card>
  );
}