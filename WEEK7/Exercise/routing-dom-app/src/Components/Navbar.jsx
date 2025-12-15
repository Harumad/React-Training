import React from 'react'
import { NavLink } from 'react-router-dom';

 function Navbar() {
  return (
    <div>
      <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
        <ul className="flex gap-6 text-lg font-semibold">

          <li>
            <NavLink className="hover:text-yellow-300" to="/">Home</NavLink>
          </li>

          <li>
            <NavLink className="hover:text-yellow-300" to="/about">About</NavLink>
            </li>

          <li>
            <NavLink className="hover:text-yellow-300" to="/services">Services</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;            
