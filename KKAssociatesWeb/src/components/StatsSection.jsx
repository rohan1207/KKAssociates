import { useRef, useEffect, useState } from "react";

export default function StatsSection({ selectedLeader, setSelectedLeader }) {
  const statsRef = useRef(null);
  const [hideButton, setHideButton] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    if (selectedLeader && statsRef.current) {
      statsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedLeader]);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      const buttonPosition = statsRef.current?.getBoundingClientRect().top || 0;
      setHideButton(buttonPosition <= navbarHeight);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={statsRef} className="flex items-center justify-center p-8 bg-white mt-0 md:mt-[82px]">
      {selectedLeader ? (
        isMobile ? (
          // ----------- Mobile View -----------
          <div className="flex flex-col items-center w-full bg-[#25225D] p-6 rounded-lg">
            <div className="md:w-1/3 w-full relative">
              <img
                src={selectedLeader.image}
                alt={selectedLeader.name}
                className="w-full h-auto rounded-lg"
              />
              {/* Mobile Close Button */}
              <button
                onClick={() => setSelectedLeader(null)}
                className={`absolute top-0 right-0 bg-white text-black rounded-full p-1 hover:bg-gray-200 transition z-50 w-5 h-5 md:hidden ${
                  hideButton ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="w-full md:w-2/3 mt-4">
              <h2 className="text-2xl font-bold text-orange-500 mb-2">{selectedLeader.name}</h2>
              <p className="text-gray-300 leading-relaxed">{selectedLeader.fullInfo}</p>
            </div>
          </div>
        ) : (
          // ----------- Desktop View -----------
          <div className="relative w-full max-w-4xl">
            {/* Desktop Image Section */}
            <div
              className="absolute z-10 hidden md:block"
              style={{
                top: "-54px",
                left: "-69px",
                width: "301px",
                height: "454px",
                overflow: "hidden",
                zIndex: "21",
              }}
            >
              <img
  src={selectedLeader.image}
  alt={selectedLeader.name}
  className="w-full h-full object-cover rounded-[20px]"
/>

            </div>

            {/* Fixed Size Purple Box Section */}
            <div
              className="relative z-20"
              style={{
                backgroundColor: "#25225D",
                borderRadius: "20px",
                color: "white",
                padding: "40px",
                paddingLeft: "300px",
                boxSizing: "border-box",
                height: "400px", // Fixed height for consistency
                maxWidth: "880px", // Set max-width to avoid it stretching too much
                overflowY: "auto", // Allow scroll if content exceeds
              }}
            >
              <h2 className="text-2xl font-bold text-orange-500 mb-4">{selectedLeader.name}</h2>
              <p className="text-gray-300 leading-relaxed">{selectedLeader.fullInfo}</p>

              {/* Close Button */}
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 bg-white text-black rounded-full p-2 transition hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )
      ) : (
        // ----------- Our Story in Purple Box -----------
        <div
          className="p-8 rounded-lg max-w-4xl"
          style={{ backgroundColor: "#25225D", color: "white" }}
        >
          <h2 className="text-2xl font-bold mb-4 text-orange-500 text-center">Our Story</h2>

          <p className="text-gray-300">
            With decades of experience in cross-border taxation between the
            U.S. and India, we have established a strong reputation. Our team
            of experts is dedicated to providing the best services to our
            clients. We have served clients from various industries and
            countries, and our customer satisfaction rate is 98%. We are
            committed to helping our clients navigate the complex tax laws and
            regulations.
          </p>
        </div>
      )}
    </div>
  );
}
