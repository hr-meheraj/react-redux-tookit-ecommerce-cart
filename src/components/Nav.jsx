import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Nav() {
    const cartArr = useSelector(state => state.cart);
    const [scrolling, setScrolling] = useState(0);
    console.log(cartArr);
    
    useEffect(() => {
        document.addEventListener("scroll", () => {
                setScrolling(window.scrollY);
                console.log(scrolling);
        })
    },[scrolling]);
    return (
        <div className={`navbar ${scrolling > 150 && "fixed border-2 border-blue shadow-md bg-white transition-all top-0 right-0 left-0  mx-auto max-w-[1000px]"}`}>
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case md:text-xl  text-[16px]">Redux Ecommerce</Link>
            </div>
            <div className="hidden md:flex-none md:block">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li><Link to='/cart'>Cart</Link></li>
                </ul>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">{cartArr?.length}</span>
                        </div>
                    </label>
                    <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        {/* Here will cart items added */}
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://img.icons8.com/officel/344/circled-user-male-skin-type-1-2.png" />
                        </div>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <div>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/cart'>Cart</Link></li>
                        </div>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav