import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { FaSun,FaMoon } from 'react-icons/fa';

function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FaSun className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      ) : (
        <FaMoon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
      )}
    </button>
  );
}

export default ThemeToggle;
