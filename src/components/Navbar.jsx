import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-20 py-4 bg-gray-800 text-white flex justify-between shadow-md">
      <a href="#hero" className="text-xl font-bold">Thathsarani</a>
      <div className="space-x-4">
        <a href="#hero" className="hover:text-blue-400">Home</a>
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
