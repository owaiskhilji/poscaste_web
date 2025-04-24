import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <nav className="w-full bg-white shadow fixed top-0 z-50 ocverflow-hidden">
      <div className="h-24 pt-4 items-center mx-auto px-4 sm:px-6 lg:px-18 border-b border-gray-200 overflow-visible">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src={logo} alt="logo" className="w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-52 lg:h-52 object-contain" />
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-end md:space-x-12 mr-14">
            <Link to="#" className="text-gray-700 hover:text-textcolor text-xl">HOME</Link>
            <Link to="#" className="text-gray-700 hover:text-textcolor text-xl">PRICING</Link>

            {/* Dropdown */}
            <div className="relative group ">
              <button className="inline-flex items-center text-gray-700 hover:text-textcolor text-xl">
                SERVICES <RiArrowDropDownLine className="text-3xl" />
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
                <Link to="#" className="block px-4 py-4 text-gray-700 hover:bg-textcolor hover:text-white rounded-md">HO</Link>
                <div className="border-t my-1"></div>
                <Link to="#" className="block px-4 py-4 text-gray-700 hover:bg-textcolor hover:text-white rounded-md">BL</Link>
                <div className="border-t my-1"></div>
                <Link to="#" className="block px-4 py-4 text-gray-700 hover:bg-textcolor hover:text-white rounded-md">Something else here</Link>
              </div>
            </div>

            <Link to="#" className="text-gray-700 hover:text-textcolor text-xl">HOW IT WORK</Link>
            <Link to="#" className="text-gray-700 hover:text-textcolor text-xl">B2B PODCAST</Link>
            <Link to="#" className="text-gray-700 hover:text-textcolor text-xl">BLOG</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
          <Link to="#" className="block text-gray-700 hover:text-textcolor text-base">Home</Link>
          <Link to="#" className="block text-gray-700 hover:text-textcolor text-base">Pricing</Link>

          {/* Mobile Dropdown */}
          <div className="relative">
<button className="inline-flex items-center text-gray-700 hover:text-textcolor"
              onClick={toggleMobileDropdown}

>
                SERVICES <RiArrowDropDownLine className="text-3xl" />
            </button>
            {isMobileDropdownOpen && (
              
              <div className="mt-2 ml-2 bg-white shadow rounded-md ">
                <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-textcolor hover:text-white rounded-md">HO</Link>
                <div className="border-t"></div>
                <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-textcolor hover:text-white rounded-md">BL</Link>
                <div className="border-t"></div>
                <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-textcolor hover:text-white rounded-md">Something else here</Link>
              </div>
            )}
          </div>

          <Link to="#" className="block text-gray-700 hover:text-textcolor text-base">How it Works</Link>
          <Link to="#" className="block text-gray-700 hover:text-textcolor text-base">B2B Podcast</Link>
          <Link to="#" className="block text-gray-700 hover:text-textcolor text-base">Blog</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;