
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 w-full bg-blue-950 shadow-md hover:bg-blue-900/30 backdrop-blur-md z-50 transition-all duration-300">
        <nav className="w-[1000px] mx-auto flex justify-between items-center py-4 px-4">
          <div className="text-3xl font-bold text-white tracking-wide">
            DENTACARE
          </div>

          <div className="flex items-center">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 hover:scale-100"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 hover:scale-100"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 hover:scale-100"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 hover:scale-100"
                >
                  Doctors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 hover:scale-100"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 hover:scale-100"
                >
                  Contact
                </a>
              </li>
            </ul>

            <a
              href=""
              className="ml-8 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 shadow-lg transition-all duration-300"
            >
              Book Appointment
            </a>
          </div>
        </nav>
      </header>
    </>
  );
      }

export default Navbar;
