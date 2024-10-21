import React from 'react'
import Navbar from '../components/Navbar'
import Book from '../components/Book'
import Footer from '../components/Footer'

function Books() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
      <Book/>
      </div>
      <Footer/>
    </div>
  )
}

export default Books;
