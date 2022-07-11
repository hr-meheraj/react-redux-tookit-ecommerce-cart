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
      <div className="card bg-white  shadow-xl transition-all h-[500px] rounded-md hover:shadow-lg hover:bg-[#112233dd] hover:text-white">
        <figure><img src={image} className='p-4 w-full h-[300px] rounded-[20px]' alt={title} /></figure>
        <div className="card-body">
          <Link to={`/products/${id}`} className="card-title cursor-pointer hover:text-blue-500 scale-1">{title.slice(0, 30)}</Link>
          <div className=" flex justify-between mt-[20px]">
            <p className='text-3xl font-semibold '>${price}</p>
            {
              checkExists ? <button className={`btn btn-sm bg-red-500  text-white hover:bg-red-700`} onClick={() => dispatch(removeFromCart(product))}>Cancel</button> : <button className={`btn btn-sm bg-blue-500 outline-none  border-0 text-white hover:bg-blue-900 ${checkExists && "btn-disabled"}`} onClick={handleAdd}>{checkExists ? "Added" : "Add to cart"}</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
