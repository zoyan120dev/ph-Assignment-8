import React from 'react'
import { Download } from 'lucide-react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';

function Product({productes}) {
    const {image, title , companyName , id , description , size, reviews, ratingAvg, downloads, ratings} = productes;
  return (
    <>
      <Link to={`/app/${id}`} className='bg-white p-4 rounded-2xl'>
          <div className=''>
            <img src={image} alt="" className='w-[300px] h-[300px] mx-auto'/>
          </div>
          <div className='mt-3'>
            <p className='font-medium text-lg'>{title}</p>
            <div className='flex justify-between items-center'>
               <div className='flex items-center bg-gray-200 text-green-300 px-2 py-1 rounded mt-2'>
                   <Download/>
                   <span>{downloads}</span>
               </div>
               <div className='flex  items-center space-x-2 bg-orange-300 px-2 py-1 rounded text-orange-500'>
                  <Star />
                  <span>{ratingAvg}</span>
               </div>
            </div>
          </div>
      </Link>   
    </>
  )
}

export default Product;