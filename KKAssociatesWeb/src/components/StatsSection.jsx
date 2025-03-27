import { useRef, useEffect } from "react";
import { ShieldCheck, Globe, Trophy, Handshake } from "lucide-react";

export default function StatsSection({ selectedLeader, setSelectedLeader }) {
  const statsRef = useRef(null);

  useEffect(() => {
    if (selectedLeader && statsRef.current) {
      statsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedLeader]);

  return (
    <div
      ref={statsRef}
      className="flex flex-col items-center justify-center p-8 bg-white"
    >
      {/* Conditional Rendering for Our Story or Leader Details */}
      <div className="bg-[#25225D] text-white p-6 rounded-xl max-w-3xl shadow-md border border-blue-400 mb-10">
        {selectedLeader ? (
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Leader Image */}
            <div className="md:w-1/3 w-full">
              <img
                src={selectedLeader.image}
                alt={selectedLeader.name}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Leader Details */}
            <div className="md:w-2/3 w-full md:pl-6 mt-4 md:mt-0 relative">
              {/* Close Icon at the Top-Right */}
              <button
                onClick={() => setSelectedLeader(null)}
                className="mt-[6px] mr-[8px] absolute top-[-1.5rem] right-[-1.5rem] bg-red-500 text-black rounded-full p-2 hover:bg-red-600 transition"
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
          <>
            <div className="block">
              <h2 className="text-2xl font-bold mb-2">Our Story</h2>
              <p className="text-gray-300">
                With decades of experience in cross-border taxation between the
                U.S. and India, we have established a strong reputation. Our
                team of experts is dedicated to providing the best services to
                our clients. We have served clients from various industries and
                countries, and our customer satisfaction rate is 98%. We are
                committed to helping our clients navigate the complex tax laws
                and regulations. We are committed to helping our clients
                navigate the complex tax laws and regulations.
              </p>
            </div>
          </>
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
