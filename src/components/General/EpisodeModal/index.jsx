import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import EpisodeCard from '../EpisodeCard';
import { useSelector, useDispatch } from 'react-redux';
import { loadEpisode } from '../../../actions/podcasts';



export default function EpisodeModal({episodeID}) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const episode = useSelector(state=> state.podcasts.episode)


  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  React.useEffect(() => {
    dispatch(loadEpisode(episodeID))
  }, [dispatch])

  if(!episode) return null;
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        More About The Podcast
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title">
        <DialogContent>
            <EpisodeCard episode={episode}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}