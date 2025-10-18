import React from 'react'
import Navbar from '../Compotent/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Compotent/Footer'
import { ToastContainer} from 'react-toastify';

function Root() {
  return (
   <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <div className='flex-1'>
         <Outlet/>
      </div>
      <Footer/>
      <ToastContainer
       position='top-center'
       autoClose={3000}
      />
   </div>
  )
}

export default Root