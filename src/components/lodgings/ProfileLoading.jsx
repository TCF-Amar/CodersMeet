import React from "react";

const ProfileSkeleton = () => {
  return (
    <div className="relative md:px-6 dark:bg-gray-900 text-white rounded-lg dark:shadow-lg animate-pulse">
      {/* Profile Header */}
      <div className="flex flex-col gap-5 md:flex-row justify-center items-center md:px-10 min-h-[25vh]">
        <div className="md:w-[25%] flex items-center gap-4">
          <div className="w-[100px]  md:w-[150px] h-[100px] md:h-[150px] rounded-full bg-gray-700"></div>
          {/* <div className="hidden md:block w-40 h-6 bg-gray-700 rounded"></div> */}
        </div>
        <div className="md:w-[75%] flex flex-col">
          <div className="hidden md:flex items-center gap-4">
            <div className="w-40 h-6 bg-gray-700 rounded"></div>
            <div className="w-24 h-8 bg-gray-700 rounded"></div>
          </div>
          <div className="w-24 h-5 bg-gray-700 rounded mt-3"></div>
          <div className="w-32 h-5 bg-gray-700 rounded mt-2"></div>
          <div className="w-24 h-5 bg-gray-700 rounded mt-2"></div>
        </div>
      </div>

      {/* Profile Completion Bar */}
      <div className="mt-4">
        <div className="w-3/4 h-4 bg-gray-700 rounded"></div>
        <div className="w-full bg-gray-700 h-2 rounded-lg mt-2"></div>
      </div>

      {/* Skills & Badges */}
      <div className="mt-4">
        <div className="w-20 h-6 bg-gray-700 rounded"></div>
        <div className="flex gap-2 flex-wrap mt-2">
          <div className="w-16 h-6 bg-gray-700 rounded"></div>
          <div className="w-20 h-6 bg-gray-700 rounded"></div>
          <div className="w-12 h-6 bg-gray-700 rounded"></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 justify-center w-full mt-6">
        {["Posts", "Blogs", "Snippets", "Projects"].map((tab, index) => (
          <div key={index} className="w-16 h-6 bg-gray-700 rounded"></div>
        ))}
      </div>

      {/* Content Section Placeholder */}
      <div className="mt-6">
        <div className="w-full h-24 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
