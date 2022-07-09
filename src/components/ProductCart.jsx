import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addCart, removeFromCart } from '../features/cart/cartSlice';
export default function ProductCart({ product }) {
  const { title, image, price, category, id } = product;
  const dispatch = useDispatch();
  const cartArr = useSelector(state => state.cart);
  const checkExists  = cartArr.find(e => e.id == product.id);
  const handleAdd = () => {
    dispatch(addCart(product))
  }
  return (
    <div>
      <div className="cardbg-base-100 shadow-xl transition-all h-[500px] rounded-md hover:bg-[#112233] hover:text-white">
        <figure><img src={image} className='w-full h-[300px]' alt={title} /></figure>
        <div className="card-body">
          <Link to={`/products/${id}`} className="card-title cursor-pointer hover:text-[#16ddc1] scale-1">{title.slice(0, 30)}</Link>
          <div className=" flex justify-between mt-[20px]">
            <p className='text-3xl font-semibold '>${price}</p>
            {
              checkExists ? <button className={`btn btn-sm bg-red-500  text-white hover:btn-danger`} onClick={() => dispatch(removeFromCart(product))}>Cancel</button> : <button className={`btn btn-sm bg-[112345] text-white hover:btn-primary ${checkExists && "btn-disabled"}`} onClick={handleAdd}>{checkExists ? "Added" : "Add to cart"}</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
