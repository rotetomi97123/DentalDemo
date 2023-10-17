import React from 'react'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'
import Hero from '../components/Hero'
import Blog from '../components/Blog'
import Esemenyek from '../components/Esemenyek'
import Dental from '../components/Dental'
import Numbers from '../components/Numbers'
import MinketAjanl from '../components/MinketAjanl'
import Companies from '../components/Companies'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <TopNav />
        <BottomNav />
        <Hero />
        <Blog />
        <Esemenyek />
        <Dental />
        <Numbers />
        <MinketAjanl />
        <Companies />
        <Footer />
    </div>
  )
}

export default HomePage