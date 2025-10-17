import React from 'react'

function Trusted() {
    const TrustedItems = [
        {
            title:'Total Downloads',
            populations:'29.6M',
            des:'21% more than last month'
        },
        {
            title:'Total Reviews',
            populations:'906K',
            des:'46% more than last month'
        },
        {
            title:'Active Apps',
            populations:'132+',
            des:'31 more will Launch'
        }
    ]
  return (
    <div className='w-full bg-[#9156EF] p-20'>
       <div className='flex flex-col justify-center items-center text-center space-y-6'>
           <h1 className='text-white text-5xl font-bold'>Trusted by Millions, Built for You</h1>
           <div className='flex items-center gap-10 md:gap-30 flex-col md:flex-row'>
               {
                TrustedItems.map((items , index )=> (
                    <div key={index} className='flex flex-col gap-2'>
                        <span className='text-gray-300'>{items.title}</span>
                        <h1 className='text-3xl md:text-5xl font-bold text-white'>{items.populations}</h1>
                        <span className='text-gray-300'>{items.des}</span>
                    </div>
                ))
               }
           </div>
       </div>
    </div>
  )
}

export default Trusted