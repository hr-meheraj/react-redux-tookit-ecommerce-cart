import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../features/cart/cartSlice';

export default function Cart() {
  const cartItems = useSelector(state => state.cartReducer.cart);
  const dispatch = useDispatch();
  const initialValue = 0;
  const totalPriceArr =  [];
  cartItems.forEach( e => {
    totalPriceArr.push(e.price);
  })
  const total = totalPriceArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0
  );

  return (
    <div className="py-[40px] pb-[720px]">
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
            {cartItems.length == 0 && (
              <h2 className="mt-[20px] text-center text-gray-500">
                No Product Cart yet{" "}
              </h2>
            )}
            {cartItems?.map((cart) => {
              const { image, id, title, price, category } = cart;
              return (
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
                    <div class="">
                      Category :{" "}
                      <span className="badge bg-blue-500 outline-none border-0 text-white mb-3">
                        {category}
                      </span>{" "}
                    </div>
                  </td>
                  <td className="text-xl font-semibold">${price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => dispatch(removeFromCart(cart))}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {cartItems.length > 0 && (
          <div className="my-[70px] mx-auto max-w-[720px]">
            More Details :
            <hr className="my-3" />
            <div className="flex justify-between mb-3">
              <h2 className="">Total Products : </h2>
              <h2 className="font-semibold">{cartItems.length}</h2>
            </div>
            <div className="flex justify-between mb-3">
              <h2 className="">
                Shipping Charge {"  "}{" "}
                <span className="badge bg-blue-500 outline-none border-0 text-white mb-3">
                  {" "}
                  Free{" "}
                </span>{" "}
                :{" "}
              </h2>
              <h2 className="font-semibold">$0 </h2>
            </div>
            <div className="flex justify-between mb-3 mt-2">
              <h2 className="">Total Amount : </h2>
              <h2 className="font-bold text-xl">${total}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
