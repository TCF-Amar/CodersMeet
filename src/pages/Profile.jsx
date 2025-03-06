import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../redux/userSlice";
import ProfileLoading from "../components/lodgings/ProfileLoading";
import { FaUser, FaGithub, FaLinkedin, FaTwitter, FaPen, FaMedal, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Profile() {
  const dispatch = useDispatch();
  const [activeSkills, setActiveSkills] = useState(false)
  const uid = useSelector((state) => state.user.uid);
  const user = useSelector((state) => state.user.userData);
  const loading = useSelector((state) => state.user.loading);
  const [activeTab, setActiveTab] = useState("Posts");

  useEffect(() => {
    if (uid) dispatch(fetchUserData(uid));
  }, [uid, dispatch]);

  if (loading) return <ProfileLoading />;

  const profileCompletion = 80;
  const skills = ["React", "Node.js", "MongoDB", "JavaScript", "CSS", "Redux"];
  const badges = ["Top Contributor", "100+ Commits", "React Expert"];

  return (
    <div className="relative md:px-6 dark:bg-gray-900 text-white rounded-lg dark:shadow-lg">
      <div className="flex flex-col gap-5 md:flex-row justify-center items-center md:px-10 min-h-[25vh]">
        {/* Profile Image */}
        <div className="md:w-[25%] flex items-center gap-4 justify-between">
          {user?.photoURL ? (
            <img src={user?.photoURL} alt="User" className="w-[100px] md:w-[150px] rounded-full border-4 border-gray-500 dark:border-gray-700" />
          ) : (
            <div className="flex items-center justify-center  rounded-full w-[100px] h-[100px] md:w-[100px] md:h-[100px] overflow-hidden border-4 border-gray-500 dark:border-gray-700">
              <FaUser size={50} className=" text-gray-500 dark:text-gray-300" />
            </div>
          )}
          <div className="flex md:hidden items-center text-gray-700 dark:text-gray-300">
            <p className="font-semibold pr-3">{user?.username}</p>
            {/* Edit Profile Button with Tooltip */}
            <Link to="/profile/update" className="flex items-center gap-2 bg-gray-300 px-2 w-fit text-sm py-2 rounded-md dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 transition duration-300 ease-in-out relative group">
              <FaPen />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 mt-1 bg-gray-500 dark:bg-gray-400 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Edit Profile
              </span>
            </Link>
          </div>
        </div>

        {/* Profile Info */}
        <div className="container md:w-[75%] flex flex-col gap-2 mt-5 md:mt-0">
          <div className="hidden md:flex items-center gap-4 text-gray-700 dark:text-gray-300">
            <p className="font-semibold pr-10">{user?.username}</p>
            <Link to="/profile/update" className="flex items-center gap-2 bg-gray-300 px-4 py-2 rounded-md dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 transition duration-300 ease-in-out">
              <FaPen /> <p className="text-nowrap"> Edit Profile</p>
            </Link>
          </div>
          {/* Followers */}
          <div className="flex items-center gap-3 mt-3 text-gray-700 dark:text-gray-300">
            <span className="flex items-center gap-1"><FaUser /> <strong>100</strong> Followers</span>
            <span className="flex items-center gap-1"><FaUser /> <strong>100</strong> Following</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-bold">{user?.displayName}</p>
          <div className="text-gray-700 dark:text-gray-300 bg-gray-300 dark:bg-gray-700 p-1 px-5 rounded-full w-fit">@{user?.username}</div>
          {/* bio section */}
          <p className="text-gray-500 dark:text-gray-400 text-sm w-2/4 max-h-[100px] overflow-hidden overflow-ellipsis  overflow-y-auto  ">{user?.bio}</p>
          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <FaGithub size={25} className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-400" />
            <FaLinkedin size={25} className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-400" />
            <FaTwitter size={25} className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-400" />
          </div>
        </div>
      </div>
      {/* Profile Completion Bar */}
      <p className="mt-4 ">Profile Completion: {profileCompletion}%</p>
      <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-lg overflow-hidden">
        <div className={`h-full transition-all duration-500 ${profileCompletion < 50 ? "bg-red-500" : profileCompletion < 80 ? "bg-yellow-500" : "bg-green-500"}`} style={{ width: `${profileCompletion}%` }}></div>
      </div>
      {/* Skills */}
      <div className="relative">
        <button
          className="flex w-full md:w-[350px] items-center gap-2 bg-gray-600 px-3 py-1 rounded-full justify-between my-2 text-white"
          onClick={() => setActiveSkills(!activeSkills)}
        >
          <p className="font-semibold">Skills:</p>
          <FaCaretDown size={15} className="text-gray-300 transition duration-300 ease-in-out" />
        </button>

        {activeSkills && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="top-full w-full md:w-[350px] bg-gray-600 p-2 rounded-md overflow-hidden overflow-y-auto shadow-lg"
          >
            {skills.map((skill, index) => (
              <li key={index} className="py-1">
                {skill}
              </li>
            ))}
          </motion.ul>
        )}
      </div>

      <hr className="my-6 border-gray-700 dark:border-gray-500" />
      {/* Tab Navigation */}
      <div className="flex space-x-6 justify-center w-full">
        {["Posts", "Blogs", "Snippets", "Projects"].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`py-2 px-4 text-gray-400 transition duration-300 hover:scale-110 ${activeTab === tab ? "border-b-2 border-gray-500 text-gray-200 font-semibold" : ""}`}>
            {tab}
          </button>
        ))}
      </div>
      <hr className="my-6 border-gray-700 dark:border-gray-500" />
      {/* Content Sections */}
      <p className="text-gray-400 text-sm">Coming Soon...</p>
    </div>
  );
}

export default Profile;
