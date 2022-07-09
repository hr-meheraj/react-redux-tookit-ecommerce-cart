import React from 'react'

export default function ProductCart({product}) {
  const { title, image, price, category} = product
  return (
    <div>
          <div class="cardbg-base-100 shadow-xl h-[500px] rounded-md">
              <figure><img src={image} className='w-full h-[300px]' alt={title} /></figure>
              <div class="card-body">
                  <h2 class="card-title">{title.slice(0,30)}</h2>
                  <div class=" flex justify-between mt-[20px]">
                       <p className='text-3xl font-semibold text-[#112222ea]'>${price}</p>
                      <button class="btn btn-sm bg-[#112233] text-white hover:btn-primary">Add to cart</button>
                  </div>
              </div>
          </div>
    </div>
  )
}
