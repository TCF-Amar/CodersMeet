import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function Landing() {


  const taglines = [
    "CodersMeet – Where Code Meets Community!",
    "Collaborate with developers worldwide",
    "Build a coding community",
    "Share your ideas with like-minded individuals",
    "Connect, Code, Collaborate!",
    "A Hub for Developers, Built by Developers!",
    "Empower Your Coding Journey with CodersMeet!",
    "Your Tech Network, Beyond Just Code!"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        
      </button>

      {/* Hero Section */}
      <motion.main
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center px-6 py-20"
      >
        <h1 className="text-5xl font-bold">
          Welcome to <span className="text-indigo-600 dark:text-indigo-400">CodersMeet</span>
        </h1>

        <p className="mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-300 max-w-xl">
          <Typewriter
            words={taglines}
            loop={0}
            cursor
            cursorBlinking
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <div className="mt-6 space-x-4">
          <Link to="/signup" className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </Link>
          <Link to="/explore" className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 font-bold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            Explore
          </Link>
        </div>
      </motion.main>

      {/* How It Works Section */}
      <section className="mt-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-300">How It Works?</h2>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-8">
          {["1. Signup & Create Profile", "2. Share Posts & Snippets", "3. Engage with Developers", "4. Collaborate on Projects"].map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-center shadow-md transition"
            >
              {step}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Our Community */}
      <section className="mt-16 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-300">Join Our Community</h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Be a part of the biggest developer community on CodersMeet!</p>
        <div className="mt-6 space-x-4">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition">
            Join Discord
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition">
            Join GitHub
          </a>
        </div>
      </section>

  
    </div>
  );
}

export default Landing;
