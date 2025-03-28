import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import supabase from "../supabaseClient";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) setUserEmail(storedEmail);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUserEmail(null);
    setShowLogout(false);
    navigate("/");
  };

  // Close dropdown when clicking outside (Desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLogout(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close services dropdown when clicking outside (Mobile)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(e.target)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    { name: "U.S. Corporate Tax Filings", url: "/corporate-tax" },
    { name: "U.S. Personal Tax Filings", url: "/personal-tax" },
    { name: "EB-5 Investor Services", url: "/investor-services" },
    { name: "Cross-Border Tax Advisory Services", url: "/tax-advisory" },
    { name: "FinCEN 114 & FATCA Filings", url: "/fin-advisory" },
    { name: "Estate and Succession Planning", url: "/estate" },
    { name: "Formation of Trusts (India & USA)", url: "/formation-advisory" },
    { name: "Gift Tax Returns", url: "/return-advisory" },
  ];

  return (
    <nav className="fixed top-0 w-full p-4 bg-[#2E1A55] shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src="/logo.png" alt="KK Associates Logo" className="h-10" />
        </Link>

        {/* Mobile Menu Button (Shows user initial if logged in) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          {menuOpen ? (
            <X size={24} />
          ) : userEmail ? (
            <span className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-lg font-bold">
              {userEmail.charAt(0).toUpperCase()}
            </span>
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full right-0 w-56 bg-white text-black rounded-lg shadow-lg p-1 z-50">
            <Link
              to="/"
              className="block px-3 py-2 hover:bg-gray-100 border-b"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 hover:bg-gray-100 border-b"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 hover:bg-gray-100 border-b"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact-us"
              className="block px-3 py-2 hover:bg-gray-100 border-b"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* Mobile Dropdown for Services */}
            <div className="relative" ref={mobileDropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 border-b flex items-center justify-between"
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`${
                    servicesOpen ? "rotate-180" : ""
                  } transition-transform`}
                />
              </button>

              {servicesOpen && (
                <div className="bg-white rounded-lg shadow-md mt-1 w-56">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="block px-3 py-2 hover:bg-gray-100 border-b last:border-b-0"
                      onClick={() => {
                        setServicesOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* User Management (Shows Logout if logged in) */}
            {userEmail ? (
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 px-4 py-2 rounded-md text-white mt-2"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <button className="w-full bg-orange-500 px-4 py-2 rounded-md text-white mt-2">
                  Login
                </button>
              </Link>
            )}
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 items-center text-white">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact-us">Contact Us</Link>

          {/* User Auth (Shows user initial if logged in) */}
          {userEmail ? (
            <div className="relative" ref={dropdownRef}>
              <button
                className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-lg font-bold"
                onClick={() => setShowLogout(!showLogout)}
              >
                {userEmail.charAt(0).toUpperCase()}
              </button>

              {showLogout && (
                <div
                  className="absolute mt-1 w-32 bg-white shadow-md rounded-md text-center"
                  style={{ left: "-5.1rem" }}
                >
                  <button
                    onClick={handleLogout}
                    className="w-full py-2 text-red-500 hover:bg-gray-100 hover:rounded-md"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-orange-500 px-4 py-2 rounded-md text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
