import React, { useState } from 'react';
import { GiBoomerangSun } from 'react-icons/gi';
import { TiThMenu } from 'react-icons/ti';
import { Link, NavLink } from 'react-router';
import useAuth from '../hooks/useAuth';
import { IoMoon, IoSunny } from 'react-icons/io5';

const Navbar = () => {

    const { user, userSignOut } = useAuth();
       const [dark, setDark] = useState(false);
    const links = <>
        <li><NavLink className="rounded-lg" to={"/"}>Home</NavLink></li>
       {user && 
       <><li><NavLink className="rounded-lg" to={"/progress-board"}>Progress Board</NavLink> </li>
        <li><NavLink className="rounded-lg" to={"/add-task"}>Add Task</NavLink> </li>
        </>}
       

    </>

   

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    return (
        <div className='bg-gray-200 text-gray-900 dark:bg-gray-950 dark:text-white z-20 '>
            <div className="navbar shadow-sm fixed top-0 backdrop-filter backdrop-blur-lg bg-opacity-30">
                <div className="navbar-start">

                    <div className=" text-2xl italic flex items-center gap-3">
                        <GiBoomerangSun />
                        <span>progresso</span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                     <button onClick={() => darkModeHandler()} className='mr-2'>
                        {

                            dark && <IoSunny className="text-3xl" />
                        }
                        {
                            !dark && <IoMoon className="text-3xl text-gray-800" />
                        }
                    </button>
                    { user ? <button className='btn rounded-lg' onClick={userSignOut}>LogOut</button> : <Link to={"/register"} className="btn rounded-lg">Register</Link> }
                    <div className="dropdown">
                        {/* tabIndex={0} role="button" */}
                        <div className="btn btn-ghost lg:hidden">
                            <TiThMenu className='text-2xl' />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='h-16'></div>
        </div>
    );
};

export default Navbar;