"use client"
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 h-300 md:h-200 py-4">
      <div className="container mx-auto flex items-center justify-between py-8 px-8 md:px-20">
        {/* Desktop Navigation */}
        <h2 className="cursor-pointer text-3xl font-bold text-[#EF577C]">
            PediBloomCenter
        </h2>

        <ul className="md:flex items-center space-x-8 list-none font-bold text-xl">
          <div className="hidden md:flex items-center space-x-12 list-none">
          <li>
            <Link href="/">
              <span className="cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="cursor-pointer">About</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="cursor-pointer">Contact</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="bg-[#0FC3D8] hover:bg-[#EF577C] cursor-pointer text-white py-2 px-4 font-bold rounded-3xl">Subscribe</span>
            </Link>
          </li>
          </div>
         

        </ul>

       

   
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileNav}
            className="text-[#EF577C] hover:text-[#0FC3D8] focus:outline-none"
          >
            {isMobileNavOpen ? <AiOutlineClose size={30} className='ml-3' /> : <AiOutlineMenu size={30} className='ml-3'/>}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileNavOpen && (
        <ul className="md:hidden border-t  border-gray-200 list-none font-bold mx-10 text-xl">
          <li>
            <Link href="/">
              <span className="block py-2 px-4 hover:bg-gray-100 cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="block py-2 px-4 hover:bg-gray-100 cursor-pointer">About</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="block py-3 px-4 hover:bg-gray-100 cursor-pointer">Contact</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="bg-[#0FC3D8] hover:bg-[#EF577C] cursor-pointer text-white py-2 px-4 font-bold rounded-3xl">Subscribe</span>
            </Link>
          </li>
          
          
        </ul>
      )}
    </nav>
  )
}

export default Navbar
