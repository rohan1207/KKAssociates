import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import supabase from "../supabaseClient";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const mobileDropdownRef = useRef(null);
  const desktopDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setUser(data.session.user);
      }
    };

    fetchUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session ? session.user : null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/");
  };

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
    <nav
      className={`fixed top-0 w-full p-4 transition-all duration-300 z-50 ${
        isScrolled ? "bg-[#2E1A55] shadow-lg" : "bg-[#2E1A55]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="KK Associates Logo" className="h-10" />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {menuOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-full right-0 w-72 bg-white text-black rounded-lg shadow-lg p-2 z-50"
          >
            <Link to="/" className="block px-4 py-3 hover:bg-gray-100 border-b">
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-3 hover:bg-gray-100 border-b"
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="block px-4 py-3 hover:bg-gray-100 border-b"
            >
              Blog
            </Link>
            <Link
              to="/contact-us"
              className="block px-4 py-3 hover:bg-gray-100 border-b"
            >
              Contact Us
            </Link>

            <div className="relative mt-1" ref={mobileDropdownRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesOpen(!servicesOpen);
                }}
                className="w-full text-left px-4 py-3 hover:bg-gray-100 border-b flex items-center justify-between"
              >
                <span>Services</span>
                <ChevronDown size={16} />
              </button>
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="block px-4 py-3 hover:bg-gray-100 border-b last:border-b-0"
                >
                  {service.name}
                </Link>
              ))}
            </div>

            {user ? (
              <div className="flex flex-col items-center mt-4">
                <button className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-lg font-bold">
                  {user.email.charAt(0).toUpperCase()}
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 px-4 py-2 rounded-md text-white mt-2"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="w-full bg-orange-500 px-4 py-2 rounded-md text-white mt-2">
                  Login
                </button>
              </Link>
            )}
          </div>
        )}

        <div className="hidden lg:flex space-x-6 items-center text-white">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>

          <div className="relative group" ref={desktopDropdownRef}>
            <button className="flex items-center space-x-1 text-white">
              <Link to="/services">
                <span>Services</span>
              </Link>

              <ChevronDown size={16} />
            </button>

            {/* Dropdown now opens on hover as well */}
            <div
              className="absolute top-full mt-0 w-72 bg-white text-black rounded-lg shadow-lg z-50 hidden 
               group-hover:block"
            >
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="block px-4 py-3 hover:bg-gray-100 border-b last:border-b-0"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/blog">Blog</Link>
          <Link to="/contact-us">Contact Us</Link>

          {user ? (
            <div className="relative group">
              <button className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-lg font-bold">
                {user.email.charAt(0).toUpperCase()}
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-sm text-red-600 
             hover:bg-gray-100 rounded-lg 
             transition duration-200 active:scale-95"
                >
                  Logout
                </button>
              </div>
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
