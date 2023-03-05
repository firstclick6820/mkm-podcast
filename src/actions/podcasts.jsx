import { 
        LOAD_CATEGORIES_SUCCESS,
        LOAD_CATEGORIES_FAIL,
        LOAD_CHANNEL_SUCCESS,
        LOAD_CHANNEL_FAIL,
        LOAD_EPISODE_SUCCESS,
        LOAD_EPISODE_FAIL
    
} from "./types";

import axios from './apiEndpoints'



// Load All Available Podcasts Categories
export const loadCategories = () => async (dispatch) => {
    try {
      const res = await axios.get('/categories');
  
      if( res.status === 200) {
        dispatch({type: LOAD_CATEGORIES_SUCCESS,payload: res.data.data,});
        return true;
      }
        dispatch({type: LOAD_CATEGORIES_FAIL});
        return false;
  
    } catch (err) {
      const localCategories = JSON.parse(localStorage.getItem('categories'));
  
      if (localCategories) {
        dispatch({
          type: LOAD_CATEGORIES_FAIL,
          payload: localCategories,
        });
        return false;
      } 
        dispatch({type: LOAD_CATEGORIES_FAIL,});
        return false;
    }
  };


// Load the Channel While the Category ID is given
  export const loadChannel = (categoryId) => async (dispatch) => {
    const params ={category_id: categoryId, country: 'us'}


    try {
      const res = await axios.get('/top_channels/v2', {params});
  
      if( res.status === 200) {
        dispatch({type: LOAD_CHANNEL_SUCCESS,payload: res.data.data,});
        return true;
      }
        dispatch({type: LOAD_CHANNEL_FAIL});
        return false;
  
    } catch (err) {

        dispatch({type: LOAD_CHANNEL_FAIL});
        return false;
    }
  };






  // Load the Episode while the Episode eid is given
  export const loadEpisode = (episodeID) => async (dispatch) => {
    const params ={eid: episodeID}


    try {
      const res = await axios.get('/episode/v4', {params});
  
      if( res.status === 200) {
        dispatch({type: LOAD_EPISODE_SUCCESS,payload: res.data.data,});
        return true;
      }
        dispatch({type: LOAD_EPISODE_FAIL});
        return false;
  
    } catch (err) {

        dispatch({type: LOAD_EPISODE_FAIL});
        return false;
    }
  };



