import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../configs/firebase';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaSearch, FaEnvelope, FaUser, FaCog, FaSignOutAlt , FaCompass, FaBars} from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import logo from '../assets/logo.png';

function Sidebar({ isOpen, onClose }) {
  const user = useSelector((state) => state.user.userData);
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(firebaseAuth);
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome size={20} /> },
    { name: 'Search', path: '/search', icon: <FaSearch size={20} /> },
    { name: 'Messages', path: '/messages', icon: <FaEnvelope size={20} /> },
    {name:'Explore',path:'/explore',icon:<FaCompass size={20} />}
   
  ];

  return (
    <>
      {isOpen && <div className="fixed inset-0  bg-opacity-50 md:hidden z-40" onClick={onClose}></div>}
      
      <div className={`
         fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 
        dark:border-gray-700 transition-all duration-300 transform z-50 h-full
        md:translate-x-0 md:static md:w-64
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="md:hidden absolute right-4 top-4">
            <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-600">
              <IoMdClose size={24} />
            </button>
          </div>

          <div className="p-4 border-b">
            <Link to="/" className="flex items-center " onClick={onClose}>
              <img src={logo} alt="CodersMeet Logo" className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold text-indigo-600">CodersMeet</span>
              <span className="press-start-2p-regular translate-y-1 text-[#00ffae]">.</span>
            </Link>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4 dark:text-gray-200">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={`flex items-center px-4 py-3 rounded-md transition-colors duration-200  ${
                      isActive(item.path)
                        ? 'bg-indigo-100 text-indigo-600 dark:bg-gray-700 dark:text-indigo-300'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                  </Link>
                </li>
              ))}

              <li>
                <NavLink
                to={'/profile'}
                  onClick={() => {}}
                  className={`flex items-center px-4 py-3 rounded-md transition-colors duration-200  ${
                    isActive('/profile')
                      ? 'bg-indigo-100 text-indigo-600 dark:bg-gray-700 dark:text-indigo-300'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
                  }`}
                >
                  {
                    user?.photoURL ? <img src={user?.photoURL} alt="User" className='w-5 h-5 rounded-full' /> :
                    <FaUser size={20} />
                  }
                  <span className="ml-3">Profile</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700 hidden md:block">
            <div className="flex items-center  px-6    cursor-pointer dark:text-gray-200" onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}>
             <FaBars/>
             <div className="ml-3">More</div>
            </div>

            <div className={`absolute bottom-16 left-4 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-600 shadow-lg rounded-lg w-48 text-gray-700 dark:text-gray-200 ${isProfileMenuOpen ? '' : 'hidden'}`}>
              <ul>
                <li onClick={() => setProfileMenuOpen(!isProfileMenuOpen)} >
                  <Link to="/profile" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</Link>
                </li>
                <li onClick={() => setProfileMenuOpen(!isProfileMenuOpen)} >
                  <Link to="/settings" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</Link>
                </li>
                <li>
                  <button onClick={handleSignOut} className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <FaSignOutAlt className="mr-2" /> Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
