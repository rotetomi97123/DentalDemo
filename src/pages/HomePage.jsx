import React from 'react'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'
import Hero from '../components/Hero'
import Blog from '../components/Blog'
import Esemenyek from '../components/Esemenyek'

const HomePage = () => {
  return (
    <div>
        <TopNav />
        <BottomNav />
        <Hero />
        <Blog />
        <Esemenyek />
    </div>
  )
}

export default HomePage