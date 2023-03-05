import axios from "axios";

// const DEVELOPMENT = 'http://localhost:8000/'; 
// const PRODUCTION  = 'https://mkm-voter.onrender.com/';

// let API_URL;
//   if (process.env.NODE_ENV === 'production') {

//         API_URL = PRODUCTION;

//   } else {

//         API_URL = DEVELOPMENT;
//   }

export default axios.create({
    baseURL: "https://podcast-api1.p.rapidapi.com/",
    headers: {
        'X-RapidAPI-Key': 'df87f6d5d4msh9e13df6b0dbd43fp1b374cjsn4bf35adf5cf3',
        'X-RapidAPI-Host': 'podcast-api1.p.rapidapi.com'
      },

});
