import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import ThemeToggle from '../components/ThemeToggle';

function Settings() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const user = useSelector((state) => state.user.user);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="bg-white  dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/30 transition-all duration-200">
      <div className="px-4 py-5 border-b border-gray-100 dark:border-gray-700/50 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Settings</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Manage your account preferences and settings</p>
      </div>
      
      <div className="px-4 py-5 sm:p-6 space-y-6 ">
        {/* Theme Settings */}
        <div className="max-w-xl">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-base font-medium text-gray-900 dark:text-white">Theme Preference</h4>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Choose between light and dark mode
              </p>
            </div>
            <ThemeToggle  />
          </div>
        </div>

        {/* Account Settings */}
        <div className="border-t border-gray-100 dark:border-gray-700/50 pt-6">
          <div className="max-w-xl">
            <h4 className="text-base font-medium text-gray-900 dark:text-white">Account Information</h4>
            <dl className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-200">{user?.email}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400"> Name</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-200">{user?.displayName}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Account Created</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-200">
                  {user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="border-t border-gray-100 dark:border-gray-700/50 pt-6">
          <div className="max-w-xl">
            <h4 className="text-base font-medium text-gray-900 dark:text-white">Privacy Settings</h4>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="public-profile"
                    name="public-profile"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-600 rounded 
                    focus:ring-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-700 transition-colors duration-200"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="public-profile" className="text-sm font-medium text-gray-900 dark:text-white">
                    Public Profile
                  </label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Make your profile visible to other developers
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="email-notifications"
                    name="email-notifications"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-600 rounded 
                    focus:ring-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-700 transition-colors duration-200"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="email-notifications" className="text-sm font-medium text-gray-900 dark:text-white">
                    Email Notifications
                  </label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive notifications about messages and updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
