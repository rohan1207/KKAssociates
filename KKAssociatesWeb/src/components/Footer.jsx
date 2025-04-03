import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2F1A54] text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <Link to="/">
            <img src="/logo.png" alt="KK Associates Logo" className="h-10" />
          </Link>
        
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <Link to="/about">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </Link>
            </li>
           
            <li>
              <Link to="/contact-us">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <a href="#" className="hover:underline">
                  Blog Posts
                </a>
              </Link>
            </li>
            <li>
              <Link to="/careers">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Join Us At</h3>
          <div className="flex space-x-6 text-xl">
            <a 
              href="https://www.facebook.com/kkassociatepune" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://www.linkedin.com/company/kkassociate/" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 mt-10">
        {/* Copyright Text */}
        <p>© 2024 KK Associates. All rights reserved.</p>

        {/* Privacy Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
