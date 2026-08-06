import React from 'react'
import Hero from '../components/Home/Hero'
import AboutUs from '../components/Home/AboutUs'
import Services from '../components/Home/Services'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <AboutUs />
      <Services />
    </div>
  )
}

export default Home
