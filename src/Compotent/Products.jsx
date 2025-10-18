import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router'
import Product from './Product'

function Products() {
    const [trandingItems , setTrandingItems] = useState([])
    useEffect(() => {
        fetch('./trendingData.json')
        .then(res => res.json())
        .then(data => setTrandingItems(data))
        .catch(err => console.log('Error Fetching data:' , err)) 
    } ,[]) 

  return (
   <>
     <div className='container mx-auto my-10'>
         <div className='text-center pb-5'>
            <h1 className='font-bold text-3xl md:text-4xl'>Trending Apps</h1>
            <p className='text-gray-600 text-lg pt-3'>Explore All Trending Apps on the Market developed by us</p>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10'>
            {
               trandingItems.map(productes => <Product key={productes.id} productes={productes}/>)
            }
         </div>
        <div className='flex justify-center'>
             <Link to={'/app'} className='btn bg-[#9156EF] text-white'>Show All</Link>
        </div>
     </div>
   </>
  )
}

export default Products;