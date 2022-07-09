import React from 'react'

function HomeHeader() {
  return (
      <div className='my-[80px] text-center  '>
          <h2 className='text-2xl md:text-5xl mb-3'>Welcome to ReduxCommerce</h2>
          <p> Buy your product easily - <span className='badge badge-xl indicator-item'>Shipping is Free</span></p>
      </div>
  )
}

export default HomeHeader