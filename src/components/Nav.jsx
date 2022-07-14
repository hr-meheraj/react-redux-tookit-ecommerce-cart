import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeTheme } from "../features/theme/themeslice";
function Nav() {
  const cartArr = useSelector((state) => state.cartReducer.cart);
  const theme = useSelector(state => state.themeReducer.theme);
  const [scrolling, setScrolling] = useState(0);
  const dispatch = useDispatch();

  console.log(document.body);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrolling(window.scrollY);
    });
  }, [scrolling]);

  const handleThemeChanger = () => {
    dispatch(changeTheme(theme == "cupcake" ? "dark" : "cupcake"));
    const getLSTheme = localStorage.getItem("theme");
    
    if(getLSTheme == "cupcake"){
      localStorage.setItem("theme", "dark");
    }

    if(getLSTheme == "dark"){
      localStorage.setItem("theme", "cupcake");
    }

    if(!getLSTheme){
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <div
      className={`navbar  ${theme == "dark" && "bg-[#2a303c]"} z-50 ${scrolling > 100 &&
        "fixed border-2  shadow-md bg-white transition-all top-0 right-0 left-0  mx-auto max-w-[1000px]"
        }  ${theme == "dark" && "border-none"}`}
    >
      <div className="flex-1">
        <Link
          to="/"
          className=" hover:transtion-all normal-case md:text-xl  text-[16px]"
        >
          Redux Ecommerce
        </Link>
      </div>
      <div className="hidden md:flex-none md:block">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <Link to='/cart'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>
              <span className="badge badge-sm bg-blue-500 border-0 outline-none text-white indicator-item">
                {cartArr?.length}
              </span>
            </div>
          </label>
          <div
            tabindex="0"
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            {/* Here will cart items added */}
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://img.icons8.com/officel/344/circled-user-male-skin-type-1-2.png" />
            </div>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to='/profile' className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <div>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </div>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
            <li onClick={handleThemeChanger} className='grid grid-cols-3 gap-3'>
              <input type="checkbox" class="inline ml-[15px] toggle col-span-1  toggle-secondary mt-4 mb-2" checked={theme == "dark"} />
              <span className="col-span-2">{theme == "dark" ? "Light Mode" : "Dark Mode"}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
