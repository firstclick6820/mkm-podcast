import {
    LOAD_CATEGORIES_SUCCESS,
    LOAD_CATEGORIES_FAIL,
    LOAD_CHANNEL_SUCCESS,
    LOAD_CHANNEL_FAIL,
    LOAD_EPISODE_SUCCESS,
    LOAD_EPISODE_FAIL
} from './../actions/types'

const intialState = {
    categories: null,
    channel: null,
    episode: null,
}



export default function(state=intialState , action={}) {
  
 
   
    const { type, payload } = action;

    switch(type) {
      
        case LOAD_CATEGORIES_SUCCESS:
            localStorage.setItem('categories', JSON.stringify(payload));
            return {
              ...state,
              categories: payload
            }


        case LOAD_CATEGORIES_FAIL:
            localStorage.removeItem('categories')
            return {
              ...state,
              categories: null
            }


        case LOAD_CHANNEL_SUCCESS:
              return {
                ...state,
                channel: payload
              }
  
  
        case LOAD_CHANNEL_FAIL:
              return {
                ...state,
                channel: null
              }

        case LOAD_EPISODE_SUCCESS:
                return {
                  ...state,
                  episode: payload
                }
    
    
        case LOAD_EPISODE_FAIL:
                return {
                  ...state,
                  episode: null
                }
    



        default: 
            return state


    }
};