import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (  
    <footer className="bg-white dark:bg-gray-900 text-center relative  bottom-0 left-0 right-0 text-gray-600 dark:text-gray-400 py-6 text-sm transition-all duration-300">
        <hr /><br />
      <div className="max-w-7xl mx-auto px-4">
        <p className="mb-3">&copy; {new Date().getFullYear()} CodersMeet. All rights reserved.</p>
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-4">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://twitter.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            <FaTwitter size={20} />
          </a>
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition-colors duration-200"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
