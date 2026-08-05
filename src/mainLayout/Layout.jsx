import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='relative flex flex-col min-h-screen'>
        <header>
            <Header />
        </header>
        <main className='flex-grow'>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Layout
