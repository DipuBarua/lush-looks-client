import { NavLink } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Navbar = () => {
    const { user } = useAuth();

    const [title, setTitle] = useState('');

    const navLinks = <>
        <li><NavLink to={'/'} onClick={() => setTitle('Home')}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/products'}>Products</NavLink></li>
        <li><NavLink to={'/contact'} onClick={() => setTitle('Contact')}>Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-secondary">

            <Helmet defaultTitle={title}>
                <title title={title}>{title} | LushLooks</title>
            </Helmet>

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-2">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">LushLooks</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">

                {
                    user ?
                        <UserDropdown></UserDropdown>
                        :
                        <div className=" flex gap-4">
                            <NavLink className='btn btn-sm btn-secondary' to={'/logIn'}>
                                Log In
                            </NavLink>
                            <NavLink className='btn btn-sm btn-outline' to={"/register"}>
                                Sign Up
                            </NavLink>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;