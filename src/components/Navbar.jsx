import React from 'react';
import { GiBoomerangSun } from 'react-icons/gi';
import { TiThMenu } from 'react-icons/ti';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/progress-board"}>Progress Board</NavLink> </li>
        <li><NavLink to={"/add-task"}>Add Task</NavLink> </li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
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
                    <a className="btn">Register</a>
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
        </div>
    );
};

export default Navbar;