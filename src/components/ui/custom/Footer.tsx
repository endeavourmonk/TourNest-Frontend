import React from "react";
import { Link } from "react-router-dom";

import { Separator } from "@radix-ui/react-separator";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "../button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-border text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* section 1 */}
          <div className="mb-4 md:mb-0">
            <address className="not-italic flex flex-col items-center md:items-start space-y-2 md:space-y-4">
              <p>117 Abbey Rd, London NW8 9AY, UK</p>
              <p>+44 0000000000</p>
              <p>
                <a href="mailto:workwithujjawal@gmail.com">
                  workwithujjawal@gmail.com
                </a>
              </p>
            </address>
          </div>
          {/* Section 2 */}
          <div className="mb-4 md:mb-0">
            <ul className="flex flex-col items-center md:items-start space-y-2 md:space-y-4">
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          {/* Section 3 */}
          <div className="mb-4 md:mb-0 space-y-4 md:space-y-4">
            <form className="flex flex-col items-center md:items-start">
              <label htmlFor="newsletter" className="block mb-2">
                Subscribe to get news & offers
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="newsletter"
                  className="text-gray-700 px-4 py-2 rounded-l-md borde focus:outline-none"
                  placeholder="Your email"
                />
                <Button type="submit" className="px-4 py-2 rounded-none">
                  Subscribe
                </Button>
              </div>
            </form>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <Link to="https://www.instagram.com">
                <a target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-blue-400" />
                </a>
              </Link>
              <Link to="https://www.facebook.com">
                <a target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="hover:text-blue-400" />
                </a>
              </Link>
              <Link to="https://www.twitter.com">
                <a target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="hover:text-blue-400" />
                </a>
              </Link>
              <Link to="https://www.linkedin.com">
                <a target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="hover:text-blue-400" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-8 border-t border-gray-700 pt-4 text-center space-y-2 md:space-y-4">
          <p className="text-sm flex flex-row">
            <Link to="/terms-of-use" className="hover:underline">
              Terms of use
            </Link>{" "}
            <Separator
              orientation="vertical"
              className="mx-4 h-4 w-[1px] bg-background"
            />
            <Link to="/privacy-policy" className="hover:underline">
              Privacy policy
            </Link>
          </p>
          <p className="text-sm">© Copyright 2024 TourNest</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
