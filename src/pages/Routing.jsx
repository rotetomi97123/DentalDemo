import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from './HomePage'
import BlogPage from './BlogPage'
import BlogItem from './BlogItem'
import AboutUs from './AboutUs'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/Blog'  element={<BlogPage />} />
        <Route path='/BlogItem'  element={<BlogItem />} /> 
        <Route path='/Rólunk'  element={<AboutUs />} /> 
    </Routes>
  )
}

export default Routing