import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Importing Icons
import logo from "../assets/logo.png";
import { FaHome, FaSearch, FaCompass, FaImage,FaMoneyBillWaveAlt,FaBlog ,FaCode} from "react-icons/fa";

function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
  
    { name: "Home", path: "/",icon: FaHome },
    {name:'Posts',path:'/posts',icon:FaImage},
    {name:'Blog',path:'/blog',icon:FaBlog},
    {name:'Snippet',path:'/snippet',icon:FaCode},
    { name: "Search", path: "/search",icon:FaSearch },
    {name:"Pricing",path:"/pricing",icon:FaMoneyBillWaveAlt}

  ]

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200 fixed top-0 left-0 right-0 h-16 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="CodersMeet Logo"
                className="w-10 object-contain"
              />
              <span className="text-xl hidden md:block font-bold text-indigo-600 dark:text-indigo-400">
                CodersMeet
              </span>
              <span className="text-indigo-600 dark:text-indigo-400 text-xl font-bold block md:hidden">
                <i>CM</i>
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              to="/signin"
              className="text-gray-700 md:hidden border border-gray-200 dark:border-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign In
            </Link>
           
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {menuOpen ? (
                <FiX className="w-8 h-8" />
              ) : (
                <FiMenu className="w-8 h-8" />
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
         
          {
            navItems.map((item)=>(
              <NavLink to={item.path} key={item.name} className={({isActive})=>(isActive?"text-indigo-600 flex dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:dark:bg-gray-700 hover:bg-gray-100 duration-200":"text-gray-700 dark:text-gray-200")+" px-3 py-2 rounded-md text-sm font-medium flex hover:text-indigo-600 dark:hover:text-indigo-400 hover:dark:bg-gray-700 hover:bg-gray-100 duration-200"}>
                <item.icon className="w-5 h-5 mr-2"/>
                {item.name}</NavLink>
            ))
          }
            <Link
              to="/signin"
              className="text-gray-700 text-nowrap dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-indigo-600 text-nowrap hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed  inset-0  bg-opacity-50 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-100 md:hidden dark:bg-gray-700 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "-translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="p-5 flex justify-between items-center border-b dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="CodersMeet Logo"
              className="w-10 object-contain"
            />
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              CodersMeet
            </span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 dark:text-gray-200 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div><hr />
        <nav className="p-4 space-y-4">
          {
            navItems.map((item)=>(
              
              <NavLink to={item.path} key={item.name} onClick={() => setMenuOpen(false)} className={({isActive})=>(isActive?"text-indigo-600 dark:text-indigo-400 hover:text-indigo-600 duration-300   hover:bg-gray-100  dark:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-indigo-400":"text-gray-700 dark:text-gray-200")+" px-3 py-2 rounded-md duration-300 flex  hover:bg-gray-100 dark:hover:bg-gray-600  text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 "} ><div className=" flex items-center space-x-2 " >
                <item.icon className="w-5 h-5"/>
                <span>{item.name}</span>
                </div>
                </NavLink>
            ))
          }
          <Link
            to="/signup"
            className="block bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium text-center"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default PublicHeader;
