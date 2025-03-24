import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2F1A54] text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <img
            src="/logo.png"
            alt="KK Associates"
            className="h-10 mb-2"
          />
          <p className="text-sm text-gray-300">CHARTERED ACCOUNTANTS</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog Posts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Latest News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Webinars
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support Center
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="font-semibold mb-3">
            Subscribe to our newsletter for updates and insights.
          </h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Id"
              className="w-full p-2 text-gray-900 rounded-l-md focus:outline-none"
            />
            <button className="bg-white text-[#2F1A54] px-4 py-2 rounded-r-md font-semibold hover:bg-gray-300">
              Join
            </button>
          </div>
          <p className="text-xs text-gray-300 mt-2">
            By joining, you consent to our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and updates.
          </p>
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

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
