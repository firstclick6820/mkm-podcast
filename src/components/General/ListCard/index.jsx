import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PlayArrow } from '@mui/icons-material';
import moment from 'moment/moment';

import EpisodeModal from '../EpisodeModal';

import { TextSlice } from '../../../utils/textSlicing';


export default function ListCard({item}) {



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
        subheader={moment().fromNow(item.release_date)}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.big_cover_url}
        alt={item.author}/>

      <CardContent>
        <Typography variant="body2" color="text.secondary">{TextSlice(item.description, 50)}</Typography>
        <Typography>{item.latest_eid}</Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <EpisodeModal episodeID={item.latest_eid}/>
        </IconButton>
      </CardActions>

     
    </Card>
  );
}