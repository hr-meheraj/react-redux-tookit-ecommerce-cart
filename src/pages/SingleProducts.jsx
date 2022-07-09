import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addCart, removeFromCart } from '../features/cart/cartSlice';
function SingleProducts() {
  const { id } = useParams();
  const data = JSON.parse(sessionStorage.getItem("store"))[id];
  console.log(data);
  const ratings = [...Array(Math.round(data.rating.rate)).keys()].map(e => "⭐")
  console.log("insdie ratings", ratings);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  const checkExists = cartItems.find(cart => cart.id == data.id) 
  return (
    <div className='gap-[30px] mt-[20px] grid grid-cols-1 md:grid-cols-2 mx-auto max-w-[820px]'>
      <div>
        <div className="cardbg-base-100 shadow-xl transition-all h-[500px] rounded-md">
          <figure><img src={data.image} className='w-full h-[300px]' alt={data.title} /></figure>
          <div className="card-body">
            <p to={`/products/${id}`} className="card-title">{data.title}</p>
            <div className=" flex justify-between mt-[20px]">
              <p className='text-3xl font-semibold '>${data.price}</p>
              {
                checkExists ? <button className={`btn btn-sm bg-red-500  text-white hover:btn-danger`} onClick={() => dispatch(removeFromCart(data))}>Cancel</button> : <button className={`btn btn-sm bg-[112345] text-white hover:btn-primary ${checkExists && "btn-disabled"}`} onClick={() => dispatch(addCart(data))}>{checkExists ? "Added" : "Add to cart"}</button>
              }
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl mb-3">Other Side info</h2>
        <hr className='mb-4' />
        <div className="badge badge-accent mb-3">{data.category}</div>
        <div className="mb-3">Ratings : {ratings.map(e => {
          return e
        })}
          {` (${data.rating.rate})`}
        </div>
        <div>

        </div>
        <div></div>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default SingleProducts