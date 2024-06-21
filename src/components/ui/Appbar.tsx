import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold ml-2 text-foreground">TourNest</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white border rounded-full px-3 py-1 mx-4">
          <input
            type="text"
            placeholder="Search for anything.."
            className="bg-transparent outline-none text-foreground px-2 flex-grow"
          />
          <FaSearch className="text-primary" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-foreground hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary">
            About
          </Link>
        </div>

        {/* User Icon and Dropdowns */}
        <div className="hidden md:flex items-center space-x-4">
          <FaUser className="text-foreground" />
          <div className="border-l border-gray-300 h-6 mx-2"></div>
          <div className="text-foreground hover:text-primary cursor-pointer">EN</div>
          <div className="text-foreground hover:text-primary cursor-pointer">USD</div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="flex items-center bg-white border rounded-full px-3 py-1 mx-4">
              <input
                type="text"
                placeholder="Search for anything.."
                className="bg-transparent outline-none text-foreground px-2 flex-grow"
              />
              <FaSearch className="text-primary" />
            </div>
            <Link
              to="/"
              className="block text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
