import React from 'react'
import Banner from '../../Compotent/Banner'
import Trusted from '../../Compotent/Trusted'
import Products from '../../Compotent/Products'

function Home() {
  return (
    <>
      <div className=''>
        <Banner/>
        <Trusted/>
        <Products/>
      </div>
    </>
  )
}

export default Home