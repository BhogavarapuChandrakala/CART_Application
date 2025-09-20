import React from 'react'
import Navbar from './components/navbar.jsx'
import BreadcrumbsBar from './components/Breadcrumbs.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

import Hero from './components/Hero.jsx'
const App = () => {

  return (
    <>
    <Navbar />
    <div style={{ padding: '8px 16px 16px 25px' 
     }}>
      <BreadcrumbsBar />
    </div>
    <Main />
    <Hero/>
    <Footer />
    </>
  )
}

export default App