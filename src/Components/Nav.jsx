import React, { useState } from "react";

export function Nav() {
  // State to track whether the menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav
        className="top-0 left-0 container lg:max-w-full w-screen bg-red-300 h-20 border-red-300 shadow-md border flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Logo or brand name */}
        <p className="text-red-950 ml-5 text-2xl lg:text-4xl font-bold">
          Portfolio
        </p>

        {/* Menu button for mobile view */}
        <button
          className="text-red-950 py-3 px-4 font-bold lg:hidden"
          onClick={toggleMenu}
        >
          Menu
        </button>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex space-x-4 ml-auto">
          <li className="text-red-950 font-semibold text-xl p-4">
            <a href="#home">Home</a>
          </li>
          <li className="text-red-950 font-semibold text-xl p-4">
            <a href="#about">About</a>
          </li>
          <li className="text-red-950 font-semibold text-xl p-4">
            <a href="#education">Education</a>
          </li>
          <li className="text-red-950 font-semibold text-xl p-4">
            <a href="#skills">Skills</a>
          </li>
          <li className="text-red-950 font-semibold text-xl p-4">
            <a href="#experience">Experience</a>
          </li>
          <li className="text-red-950 font-semibold text-xl p-4">
            <a href="#project">Projects</a>
          </li>
          <li className="text-red-950 font-semibold text-xl p-4">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Slide-in menu for mobile view */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-red-300 shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="text-red-950 py-3 px-4 font-bold"
          onClick={toggleMenu}
        >
          Close
        </button>
        <ul className="flex flex-col mt-10 space-y-4 p-4">
          <li className="text-red-950 font-semibold text-xl">
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li className="text-red-950 font-semibold text-xl">
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li className="text-red-950 font-semibold text-xl">
            <a href="#education" onClick={toggleMenu}>
              Education
            </a>
          </li>
          <li className="text-red-950 font-semibold text-xl">
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li className="text-red-950 font-semibold text-xl">
            <a href="#experience" onClick={toggleMenu}>
              Experience
            </a>
          </li>
          <li className="text-red-950 font-semibold text-xl">
            <a href="#project" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li className="text-red-950 font-semibold text-xl">
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay to close the menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}
