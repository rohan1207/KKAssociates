import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Detect scroll event to add shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const services = [
    { title: "U.S. Corporate Tax Filings" },
    { title: "U.S. Personal Tax Filings" },
    { title: "EB-5 Investor Services" },
    { title: "Cross-Border Tax Advisory Services" },
    { title: "FinCEN 114 & FATCA Filings" },
    { title: "Estate and Succession Planning" },
    { title: "Formation of Trusts (India & USA)" },
    { title: "Gift Tax Returns" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full p-4 transition-all duration-300 z-50 ${
        isScrolled ? "bg-[#2E1A55] shadow-lg" : "bg-[#2E1A55]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="KK Associates Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 items-center text-white">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>

          {/* Services Section with Dropdown */}
          <div className="relative dropdown" ref={dropdownRef}>
            <div className="flex items-center space-x-1">
              {/* Clicking "Services" navigates to /services */}
              <span
                onClick={() => navigate("/services")}
                className=" cursor-pointer"
              >
                Services
              </span>

              {/* Clicking the dropdown icon toggles the dropdown */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesOpen((prev) => !prev);
                }}
                className="focus:outline-none"
              >
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Dropdown Menu */}
            {servicesOpen && (
              <div className="absolute left-0 top-full mt-1 w-72 bg-white text-black rounded-lg shadow-lg z-50 transition-all duration-200">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={`/services/${service.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="block px-4 py-3 hover:bg-gray-100 border-b last:border-b-0"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <Link to="/contact-us">Contact Us</Link>

          {/* Login Button */}
          <Link to="/login">
            <button className="bg-orange-500 px-4 py-2 rounded-md text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
