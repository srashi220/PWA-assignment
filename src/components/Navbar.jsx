import React from 'react'
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
        <nav className="w-full bg-white shadow-md p-4">
            <div className="container mx-auto flex flex-col md:flex-row items center justify-between">
                <div className="text-2xl font-bold text-gray-800">
                    <img className='h-15 w-10' src={logo} alt="" />
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-2 md:mt-4">
                    <a href="#home" className="text-gray-700 hover:text-blue-600 ">Home</a>
                    <a href="#about" className="text-gray-700 hover:text-blue-600 ">About</a>
                    <a href="#contact" className="text-gray-700 hover:text-blue-600 ">Contact</a>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar