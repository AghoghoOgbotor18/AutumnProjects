import React from 'react'
import Hero from '../components/Home/Hero'
import AboutUs from '../components/Home/AboutUs'
import Services from '../components/Home/Services'
import Projects from '../components/Home/Projects'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
    </div>
  )
}

export default Home
