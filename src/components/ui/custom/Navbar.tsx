import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ModeToggle } from "../mode-toggle";
import { Separator } from "@/components/ui/separator";
import { FaSearch, FaUser } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.header
      className="bg-background p-4 fixed w-full z-50"
      initial={{ y: -100 }} // Start position (above the viewport)
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center z-40 w-full">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold ml-2 text-foreground">
            WillThinkName
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 justify-between items-center">
          <li>
            <Link to="/" className="text-foreground hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tours" className="text-foreground hover:text-primary">
              Tours
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-foreground hover:text-primary">
              About
            </Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white border rounded-full px-3 py-1 mx-4">
          <input
            type="text"
            placeholder="Search for anything.."
            className="bg-transparent outline-none text-foreground px-2 flex-grow"
          />
          <FaSearch className="text-primary" />
        </div>

        {/* Auth and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <FaUser className="text-foreground" />
          <Separator orientation="vertical" className="h-6 bg-border" />
          <ModeToggle />
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <span className="mx-4">
            <ModeToggle />
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground focus:outline-none"
            aria-label="Toggle Menu"
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
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-background flex justify-center min-h-screen"
          initial={{ y: -10 }} // Start position (above the viewport)
          animate={{ y: 30 }} // final position
          transition={{ duration: 0.5 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ul className="mt-12 space-y-8 flex flex-col items-center text-lg font-semibold">
              <li>
                {/* Search Bar */}
                <div className="flex items-center bg-white border rounded-full px-3 py-1 mx-4">
                  <input
                    type="text"
                    placeholder="Search for anything.."
                    className="bg-transparent outline-none text-foreground px-2 flex-grow"
                  />
                  <FaSearch className="text-primary" />
                </div>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  className="text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
