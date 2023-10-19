import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from './HomePage'
import BlogPage from './BlogPage'
import BlogItem from './BlogItem'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/Blog'  element={<BlogPage />} />
        <Route path='/BlogItem'  element={<BlogItem />} /> 
    </Routes>
  )
}

export default Routing