import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate based on scroll position
  useEffect(() => {
    if (scrollY < 100) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
      });
    } else if (scrollY >= 100 && scrollY < 300) {
      controls.start({
        opacity: 1,
        y: -20,
        scale: 0.9,
      });
    } else if (scrollY >= 300 && scrollY < 600) {
      controls.start({
        opacity: 0,
        y: -50,
        scale: 0.8,
      });
    } else {
      controls.start({
        opacity: 0,
        scale: 0.7,
      });
    }
  }, [scrollY, controls]);

  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative px-4"
      style={{ backgroundImage: "url('/homePage.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2D215594]"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full"
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        {/* Logo and Company Name */}
        <motion.div
          animate={controls}
          transition={{ duration: 0.3 }}
          className="mb-6 flex flex-col items-center"
        >
          <motion.img
            src="/logo.png"
            alt="KK Associates Logo"
            className="h-16 mx-auto"
            animate={{
              scale: scrollY > 100 ? 0.8 : 1,
              opacity: scrollY > 600 ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <p className="text-gray-300 text-lg tracking-wide">
            CHARTERED ACCOUNTANTS
          </p>
        </motion.div>

        {/* Main Heading & Subheading */}
        <motion.h2
          className="text-white text-4xl md:text-5xl font-extrabold leading-tight"
          animate={{ opacity: scrollY > 300 ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          Seamless Cross-Border Tax Solutions <br /> Between the U.S. & India
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg max-w-xl mt-4 text-center"
          animate={{ opacity: scrollY > 300 ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          Navigating the complexities of cross-border taxation can be daunting.
          Our expert guidance ensures compliance and maximizes your tax
          efficiencies.
        </motion.p>

        {/* Book Consultation Button (Appears on First Scroll) */}
        <motion.div
          animate={{ opacity: scrollY > 100 ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        >
          <Link to="/book-consultation">
            <motion.button
              className="px-6 py-3 rounded-md text-white mt-6 text-lg font-semibold"
              style={{ backgroundColor: "#FF7300" }}
              whileHover={{ backgroundColor: "#FFA14A" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              Book Consultation
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
