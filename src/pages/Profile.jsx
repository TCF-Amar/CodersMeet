import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../redux/userSlice";
import ProfileLoading from "../components/lodgings/ProfileLoading";
import { FaUser, FaGithub, FaLinkedin, FaTwitter, FaCode, FaPen } from "react-icons/fa";

function Profile() {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.user.uid);
  const user = useSelector((state) => state.user.userData);
  const loading = useSelector((state) => state.user.loading);
  const [activeTab, setActiveTab] = useState("Posts");

  useEffect(() => {
    if (uid) {
      dispatch(fetchUserData(uid));
    }
  }, [uid, dispatch]);

  if (loading) {
    return <ProfileLoading />;
  }

  // Sample Data (Backend se aayega future me)
  const posts = [
    { text: "Just started learning Next.js! Loving it so far. 🚀", date: "March 10, 2025" },
    { text: "Finally launched my portfolio website. Check it out! 💻", date: "Feb 28, 2025" }
  ];


  const blogs = [
    { title: "Understanding Async/Await in JavaScript", date: "March 2, 2025", description: "A deep dive into async programming with real-world examples.", image: "https://via.placeholder.com/150" },
    { title: "How to Optimize React Apps for Performance", date: "Feb 15, 2025", description: "Performance tips for improving React apps.", image: "https://via.placeholder.com/150" }
  ];

  const snippets = [
    { language: "JavaScript", code: "const sum = (a, b) => a + b;", description: "Simple arrow function for addition" },
    { language: "Python", code: "def greet():\n    print('Hello, World!')", description: "Python function to print greeting" }
  ];

  return (
    <div className="relative md:px-6 dark:bg-gray-900 text-white rounded-lg  dark:shadow-lg">
      {/* Profile Header */}
      <button className="absolute flex items-center gap-2   top-0 right-0 md:top-0 md:right-0 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
        <FaPen />
        Edit Profile</button>
      <div className="flex flex-col gap-5 md:flex-row justify-between items-center  md:px-10">

        {user?.photoURL ? (
          <img src={user?.photoURL} alt="User" className="w-24 h-24 rounded-full border-4 border-gray-500 dark:border-gray-700" />
        ) : (
          <FaUser size={80} className="text-gray-500 dark:text-gray-300" />
        )}

        <div className="flex flex-1 flex-col   md:items-start relative">


          <h2 className="text-2xl font-semibold mt-3 text-gray-800 dark:text-white">{user?.displayName || "Anonymous Coder"}</h2>
          <p className="text-gray-400 text-sm dark:text-gray-300 underline">@{user?.username}</p>

          <p className="mt-2 text-gray-300   text-sm dark:text-gray-500">
            {user?.bio || "Passionate Developer | Open Source Enthusiast | AI & Blockchain Lover"}
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4">
            <FaGithub size={24} className="hover:text-gray-500  hover:scale-110 duration-200 text-gray-500 dark:hover:text-gray-300" />
            <FaLinkedin size={24} className="hover:text-blue-500 hover:scale-110 duration-200 text-blue-500 dark:hover:text-blue-700" />
            <FaTwitter size={24} className="hover:text-blue-600 hover:scale-110 duration-200 text-blue-600 dark:hover:text-blue-800" />
          </div>
        </div>
          <div>
            {/* followers */}
            {/* followings */}
            
          </div>
      </div>

      <hr className="my-6 border-gray-700 dark:border-gray-500" />

      {/* 🔹 Tab Navigation */}
      <div className="flex space-x-2 justify-between md:justify-center md:gap-5 w-full transition duration-300 ease-in-out">
        {["Posts", "Blogs", "Snippets", "Projects"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2  text-gray-400  ${activeTab === tab ? "border-t-2 border-gray-500 dark:border-gray-700 text-gray-200 dark:text-gray-200 " : ""} 
            transition duration-300 ease-in-out hover:scale-110`}
          >
            {tab}
          </button>
        ))}
      </div>

      <hr className="my-6 border-gray-700 dark:border-gray-500" />

      {/* 📌 Posts Section */}
      {activeTab === "Posts" && (
        <div>
          <h3 className="text-lg font-semibold mb-3 dark:text-white">Recent Posts</h3>
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-800 p-3 rounded-lg mb-3 border border-gray-700 dark:bg-gray-700 dark:border-gray-500">
              <p className="text-sm">{post.text}</p>
              <p className="text-gray-400 text-xs mt-1 dark:text-gray-300">{post.date}</p>
            </div>
          ))}
        </div>
      )}

      {/* ✍️ Blogs Section */}
      {activeTab === "Blogs" && (
        <div>
          <h3 className="text-lg font-semibold mb-3 dark:text-white">Recent Blogs</h3>
          {blogs.map((blog, index) => (
            <div key={index} className="flex bg-gray-800 p-3 rounded-lg mb-3 border border-gray-700 dark:bg-gray-700 dark:border-gray-500">
              <img src={blog.image} alt={blog.title} className="w-24 h-24 rounded-md object-cover mr-4" />
              <div>
                <h4 className="text-md font-medium dark:text-white">{blog.title}</h4>
                <p className="text-gray-400 text-sm dark:text-gray-300">{blog.date}</p>
                <p className="text-sm mt-1 dark:text-gray-400">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 💻 Code Snippets Section */}
      {activeTab === "Snippets" && (
        <div>
          <h3 className="text-lg font-semibold mb-3 dark:text-white">Code Snippets</h3>
          {snippets.map((snippet, index) => (
            <div key={index} className="bg-gray-800 p-3 rounded-lg mb-3 border border-gray-700 dark:bg-gray-700 dark:border-gray-500">
              <h4 className="text-md font-medium flex items-center dark:text-white">
                <FaCode className="mr-2" /> {snippet.language}
              </h4>
              <pre className="bg-gray-700 p-2 rounded-md text-sm mt-1 dark:bg-gray-600">
                <code>{snippet.code}</code>
              </pre>
              <p className="text-sm mt-1 text-gray-400 dark:text-gray-300">{snippet.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* 🚀 Projects Section (Placeholder) */}
      {activeTab === "Projects" && (
        <div>
          <h3 className="text-lg font-semibold mb-3 dark:text-white">Projects</h3>
          <p className="text-gray-400 text-sm dark:text-gray-300">Coming Soon...</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
