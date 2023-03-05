import React from 'react'

import  {Routes, Route} from 'react-router-dom'



// Import All The Pages Here
import About from './About'
import Home from './Home'
import PodCastChannel from './PodCastChannel'

// import Layouts
import BaseLayout from './../layouts/BaseLayout'





const index = () => {
  return (
    <BaseLayout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:uid/" element={<PodCastChannel />} />
        </Routes>
    </BaseLayout>
  )
}

export default index