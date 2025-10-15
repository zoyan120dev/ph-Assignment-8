import React from 'react'
import Navbar from '../Compotent/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Compotent/Footer'

function Root() {
  return (
   <div className='flex flex-col min-h-screen container mx-auto'>
      <Navbar/>
      <div className='flex-1'>
         <Outlet/>
      </div>
      <Footer/>
   </div>
  )
}

export default Root