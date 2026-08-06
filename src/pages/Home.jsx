import React from 'react'
import Hero from '../components/Home/Hero'
import AboutUs from '../components/Home/AboutUs'
import Services from '../components/Home/Services'
import Projects from '../components/Home/Projects'
import LogoScroll from '../components/Home/LogoScroll'
import CTA from '../components/Home/CTA'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <LogoScroll />
      <CTA />
    </div>
  )
}

export default Home
