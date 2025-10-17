import { Link } from 'react-router'
import React from 'react'

function Errror() {
  return (
   <>
     <div className='h-screen flex flex-col justify-center items-center'>
         <img src="./App-Error.png" alt="" />
         <h1 className='text-red-400 text-3xl md:text-9xl font-bold'>404</h1>
         <h2 className='font-semibold text-4xl'>Oops, page not found!</h2>
         <p className='text-gray-500 text-lg'>The page you are looking for is not available.</p>
         <Link to='/' className='btn bg-[#9F62F2] mt-2 text-white font-bold text-lg'>Go Back!</Link>
     </div>
   </>
  )
}

export default Errror