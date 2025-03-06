import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const user = useSelector((state) => state.user.user);

  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/30 p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome, {user?.displayName}!
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        This is your personalized home page.
      </p>
    </div>
  );
}

export default Home;
