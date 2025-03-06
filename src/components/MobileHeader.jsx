import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiUser, FiLogOut, FiSettings } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.PNG";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../configs/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUser } from "../redux/userSlice";

function MobileHeader({ toggleSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    signOut(firebaseAuth);
    dispatch(signOutUser());
    navigate('/');
  };

  return (
    <header className="fixed md:hidden top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-40 shadow-md">
      <div className="flex items-center justify-between h-full px-4">
        {/* Sidebar Toggle Button */}
        <motion.button
          onClick={toggleSidebar}
          className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <FiMenu className="w-6 h-6" />
        </motion.button>

        {/* Logo & Branding */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.img 
            src={logo} 
            alt="CodersMeet Logo" 
            className="w-12 object-contain"
           
          />
          <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            <i>CM</i>
            <span className="dark:text-indigo-400">.</span>
          </span>
        </Link>

        {/* Profile Dropdown */}  
        <div className="relative">
          <motion.button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            whileTap={{ scale: 0.9 }}
          >
            <FiUser className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </motion.button>

          {/* Dropdown Menu with Animation */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 dark:text-white shadow-lg border-none mt-2 w-48 bg-white dark:bg-gray-800 rounded-md overflow-hidden border dark:border-gray-700"
              >
                <Link
                  to="/profile"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiUser className="mr-2" /> Profile
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiSettings className="mr-2" /> Settings
                </Link>
                <button
                  onClick={handleLogout}  
                  className="flex w-full items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiLogOut className="mr-2" /> Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

export default MobileHeader;
