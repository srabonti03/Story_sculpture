import React, { useState, useEffect } from 'react';
import Login from './Login';

function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [sticky, setSticky] = useState(false);

  // Load theme from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  // Toggle theme and store in local storage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Add sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li key="home"><a href="/" className="hover:text-orange-500 transition-colors duration-150">Home</a></li>
      <li key="book"><a href="/book" className="hover:text-orange-500 transition-colors duration-150">Books</a></li>
      <li key="contact"><a href="/contact" className="hover:text-orange-500 transition-colors duration-150">Contact</a></li>
      <li key="about"><a href="/about" className="hover:text-orange-500 transition-colors duration-150">About</a></li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 transition-all ${
        sticky ? 'sticky-navbar shadow-lg bg-opacity-60 bg-base-100 backdrop-blur-md border border-opacity-30 border-gray-300' : 'bg-transparent'
      } duration-150 ease-out`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a
            className="text-xl font-bold cursor-pointer logo"
            style={{
              color: theme === 'light' ? 'orange' : '#4A90E5',
            }}
          >
            Story Sculpture
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end space-x-3">
          <div className="hidden md:block">
            <label className="input px-3 py-2 border rounded-md flex items-center gap-2 transition-all duration-150 hover:shadow-md">
              <input
                type="text"
                className="grow outline-none"
                placeholder="Search..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          <label className="swap">
            <input
              type="checkbox"
              className="theme-controller"
              aria-label="Theme toggle"
              onClick={toggleTheme}
              checked={theme === 'dark'}
              readOnly
            />
            {/* Sun icon */}
            <svg
              className="swap-off h-7 w-7 fill-current transition-opacity duration-150 ease-out transform hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={{ fill: 'orange' }}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* Moon icon */}
            <svg
              className="swap-on h-7 w-7 fill-current transition-opacity duration-150 ease-out transform hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={{ fill: '#4A90E5' }}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8.51,2.34,10.2,10.2,0,0,0,5.22,5.08,10.14,10.14,0,1,0,21.64,13Z" />
            </svg>
          </label>

          <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-150 cursor-pointer"
          onClick={() => document.getElementById("my_modal_3").showModal()}>
            Login
          </a>
          <Login/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
