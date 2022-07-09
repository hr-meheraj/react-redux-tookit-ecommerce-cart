import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
  const cartItems = useSelector(state => state.cart);
  return (
    <div className='my-[40px] '>
      <div class="overflow-x-auto w-full">
        <table class="table table-compact w-full"> 
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {
            cartItems?.map(cart => {
              const { image, id, title, price, category}  = cart;
              return(
                <tr key={id}>
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img src={image} alt={title} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                   {title}
                    <br />
                    <div class="">Category : <span className="badge badge-accent mb-3">{category}</span> </div>
                  </td>
                  <td className='text-xl font-semibold'>${price}</td>
                  <td><button className='btn btn-sm btn-error'>Cancel</button></td>
                </tr>
              )
            })
           }

          </tbody>

        </table>
      </div>
    </div>
  )
}
