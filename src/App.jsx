import React from 'react'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import Content from './Pages/Content'
import Pricing from './Pages/Pricing'
import About from './Pages/About'
import Contact from './Pages/Footer'
const App = () => {
  return (
    <div>

      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/content" element={<Content/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Layout>
      </Router>
      
    </div>
  )
}

export default App
