import React from 'react'
import Navbar from '../components/Navbar'
import Contactus from '../components/Contactus'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
      <Contactus/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
