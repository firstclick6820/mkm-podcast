import React from 'react';

import {Provider} from 'react-redux'

import store from './context/store';

// Import all the contents
import Contents from './contents'


// import CssBaseline from MUI
import CssBaseline from '@mui/material/CssBaseline';



function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Provider store={store}>
        <Contents />
      </Provider>
    </React.Fragment>
  )
}

export default App
