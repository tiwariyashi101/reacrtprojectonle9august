import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './utility/ThemeContext';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const cartItems = useSelector((state) => state.cart.items); // Ensure this is an array or correct data structure

  const handleThemeClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Adjust these classes based on your theme configuration
  const darkTheme = "navbar bg-base-100";
  const lightTheme = "navbar bg-black text-white";

  return (
    <div className={theme === 'light' ? darkTheme : lightTheme}>
      <a className="btn btn-ghost text-xl">daisyUI</a>
      <Link to='/about'>About</Link>
      <Link to='/cart'>Cart <sup>{cartItems.length}</sup></Link> {/* Render number of items */}
      <Link to='/food'>Food</Link>

      <label className="flex cursor-pointer gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          className="toggle theme-controller"
          onChange={handleThemeClick}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  );
};

export default Navbar;


