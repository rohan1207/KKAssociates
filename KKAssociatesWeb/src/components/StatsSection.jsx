import { useRef, useEffect, useState } from "react";

export default function StatsSection({ selectedLeader, setSelectedLeader }) {
  const statsRef = useRef(null);
  const [hideButton, setHideButton] = useState(false);

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={statsRef}
      className="flex flex-col items-center justify-center p-8 bg-white"
    >
      {/* Conditional Rendering for Our Story or Leader Details */}
      <div className="bg-[#25225D] text-white p-6 rounded-xl max-w-3xl shadow-md border border-blue-400 mb-10">
        {selectedLeader ? (
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Image Container with Relative Position */}
            <div className="md:w-1/3 w-full relative">
              <img
                src={selectedLeader.image}
                alt={selectedLeader.name}
                className="w-full h-auto rounded-lg"
              />
              {/* Mobile Cross Button (Top Right Corner of Image) */}
              <button
                onClick={() => setSelectedLeader(null)}
                className={`absolute top-0 right-0 bg-white text-black rounded-full p-1 hover:bg-gray-200 transition z-50 w-5 h-5 md:hidden ${
                  hideButton
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100 pointer-events-auto"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Leader Details */}
            <div className="md:w-2/3 w-full md:pl-6 mt-4 md:mt-0 relative">
              {/* Large Screen Cross Button (Original Position) */}
              <button
                onClick={() => setSelectedLeader(null)}
                className={`hidden md:flex absolute top-[-1.5rem] right-[-1.5rem] bg-white text-black rounded-full p-2 transition z-50 ${
                  hideButton
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100 pointer-events-auto"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h2 className="text-2xl font-bold text-orange-500 mb-2">
                {selectedLeader.name}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {selectedLeader.fullInfo}
              </p>
            </div>
          </div>
        ) : (
          <div className="block">
            <h2 className="text-2xl font-bold mb-2">Our Story</h2>
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
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
        {[
          { value: "7+", label: "Countries Served" },
          { value: "40+", label: "Years of Experience" },
          { value: "1000+", label: "Clients Served" },
          { value: "98%", label: "Customer Satisfaction Rate" },
        ].map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold text-orange-500">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
         
    </div>
  );
}
