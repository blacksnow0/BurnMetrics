import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-gray-100 via-white to-gray-100 opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 p-2 rounded-md md:hidden"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {/* Logo */}
            <a href="/" className="text-xl font-bold">
              BurnMetrics
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <a
              href="/"
              className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>

            <a
              href="/workouts"
              className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Workouts
            </a>
            <a
              href="/challenges"
              className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Challenges
            </a>
            <a
              href="/profile"
              className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Profile
            </a>
          </div>

          {/* Right: Profile Icon */}
          <div className="md:hidden">
            <a href="/profile" aria-label="Go to profile">
              <FontAwesomeIcon
                icon={faUser}
                className=" text-gray-600 text-xl p-2 rounded-full"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-slideIn">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
          <a
            href="/workouts"
            className="block px-3 py-2 rounded-md text-sm font-medium"
          >
            Workouts
          </a>
          <a
            href="/challenges"
            className="block px-3 py-2 rounded-md text-sm font-medium"
          >
            Challenges
          </a>
          <a
            href="/profile"
            className="block px-3 py-2 rounded-md text-sm font-medium"
          >
            Profile
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
