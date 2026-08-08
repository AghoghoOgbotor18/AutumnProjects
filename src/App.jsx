import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Layout from './mainLayout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ServicesDetailsPage from './pages/ServicesDetailsPage'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path="projects" element= {<Projects />} />
          <Route path="contact" element={<Contact />} /> 
          <Route path="services/:slug" element= {<ServicesDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
