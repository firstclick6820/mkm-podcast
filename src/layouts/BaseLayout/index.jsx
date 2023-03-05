
import React from 'react';
import PropTypes from 'prop-types';

import { 
  Box, 
  Container
} from '@mui/material';

import {loadCategories} from './../../actions/podcasts'


import {useDispatch } from 'react-redux';

// Import Navbar
import Navbar from '../../components/Navbar';


const BaseLayout = ({ children }) => {
 
  const dispatch = useDispatch()


  React.useEffect(() => {
    dispatch(loadCategories())
  }, [dispatch])


  return (
    <>
      <Box sx={{ flex: 1, height: '100%' }}>
        <Navbar />
        <Container maxWidth="md">
            { children }
        </Container>
      </Box>
    </>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
