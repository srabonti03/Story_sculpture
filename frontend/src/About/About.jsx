import React from 'react'
import Navbar from '../components/Navbar'
import Aboutus from '../components/Aboutus'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
      <Aboutus/>
      </div>
      <Footer/>
    </div>
  )
}

export default About
