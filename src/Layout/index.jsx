import React from 'react'
import NavBar from '../Components/Navbar/navBar'
import Home from '../Pages/Home'
import Content from '../Pages/Content'
import Pricing from '../Pages/Pricing'
import About from '../Pages/About'
import Contact from '../Pages/Footer'

const Layout = () => {
  return (
    <div>
    <NavBar />
    <main>
      <Home />
      <Content />
      <Pricing />
      <About />
      <Contact/>
    </main>
  </div>
  )
}

export default Layout
