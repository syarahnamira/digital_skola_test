import React from "react";
import Image from "next/image";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            
            {/* start */}
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                        d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>Homepage</a></li>
                    <li><a>About</a></li>
                </ul>
                </div>
            </div>

            {/* center */}
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">Digital Skola</a>
            </div>

            {/* end */}
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <Image alt="Avatar" src="/avatar.jpg" width={100} height={100} />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default NavBar;