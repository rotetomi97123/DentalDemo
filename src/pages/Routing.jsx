import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from './HomePage'
import BlogPage from './BlogPage'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/Blog'  element={<BlogPage />} /> 
    </Routes>
  )
}

export default Routing