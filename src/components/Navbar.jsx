import React from 'react';

const Navbar  = () => {
  return (
    <nav className="w-full bg-white border-b border-slate-200 py-4 px-6 md:px-16 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      
      {/* Left: Brand / Logo with proper spacing */}
      <div className="flex items-center space-x-3">
        <div className="w-9 h-9 bg-gradient-to-tr from-purple-600 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md shrink-0">
          <span className="text-white font-bold text-xs tracking-wider">DS</span>
        </div>
        <span className="text-xl font-bold text-slate-900 tracking-tight">Dev Stack</span>
      </div>

      {/* Middle: Navigation Links */}
      <ul className="hidden md:flex items-center space-x-8 text-sm text-slate-600 font-medium">
        <li><a href="#hero" className="hover:text-purple-600 transition">Home</a></li>
        <li><a href="#tech" className="hover:text-purple-600 transition">Technologies</a></li>
        <li><a href="#projects" className="hover:text-purple-600 transition">Projects</a></li>
        <li><a href="#about" className="hover:text-purple-600 transition">About</a></li>
        <li><a href="#contact" className="hover:text-purple-600 transition">Contact</a></li>
      </ul>

      {/* Right: Auth Buttons */}
      <div className="flex items-center space-x-4">
        <button className="text-sm font-medium text-slate-700 hover:text-slate-900 transition">
          Sign In
        </button>
        <button className="text-sm font-medium bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-xl shadow-md hover:opacity-95 transition">
          Sign Up
        </button>
      </div>

    </nav>
  );
};

export default Navbar;