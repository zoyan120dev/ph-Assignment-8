import React from 'react'
import Navbar from '../Compotent/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Compotent/Footer'

function Root() {
  return (
   <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <div className='flex-1'>
         <Outlet/>
      </div>
      <Footer/>
   </div>
  )
}

export default Root