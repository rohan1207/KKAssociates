import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ClientFeedback() {
  const feedbacks = [
    {
      stars: 5,
      text: "I have worked for over a decade with Kalyankumar and Associates and specifically Alpesh, for taxes in multiple countries and have found him knowledgeable, helpful and easy to work with on all fronts.",
      name: "Arun Krishnamurthy",
      role: "Telenav Inc",
    },
    {
      stars: 5,
      text: "I highly recommend Kalyankumar and Associates for personal taxes across countries, my personal experience filing both India and US taxes through them has been great.",
      name: "Arun Krishnamurthy",
      role: "Telenav Inc",
    },
    {
      stars: 5,
      text: "They have always answered all my questions and helped me navigate cross-border taxes efficiently.",
      name: "Arun Krishnamurthy",
      role: "Telenav Inc",
    },
    {
      stars: 5,
      text: "I highly recommend Kalyankumar and Associates for personal taxes across countries, my personal experience filing both India and US taxes through them has been great.",
      name: "Arun Krishnamurthy",
      role: "Telenav Inc",
    },
  ];

  const logos = [
    "/amazon.webp",
    "/intel.svg",
    "/amdo.png",
    "/adobe.svg",
    "/oliver.png",
    "/microsoft.webp",
    "/coviam.png",
    "/adobe.png",
    "/Arista.webp",
    "/microsoft.webp",
    "/amdo.png",
    "/intel.svg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 4000);

    const logoInterval = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % logos.length);
    }, 2000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(logoInterval);
    };
  }, []);

  return (
    <section className="bg-white py-16 text-center px-6">
      <h2 className="text-3xl font-bold text-orange-500">Client Feedback</h2>
      <p className="text-gray-600 mb-8">
        Our clients appreciate our dedicated tax services.
      </p>

      {/* Testimonials Section */}
      <div className="relative flex justify-center items-center overflow-hidden w-full h-[350px]">
        {feedbacks.map((feedback, index) => {
          const isActive = index === currentIndex;
          const isLeft =
            index === (currentIndex - 1 + feedbacks.length) % feedbacks.length;
          const isRight = index === (currentIndex + 1) % feedbacks.length;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: 1,
                scale: isActive ? 1.15 : 0.85, // Slightly reduced center card scale for small screens
                zIndex: isActive ? 2 : 1,
                x: isActive ? 0 : isLeft ? -180 : 180, // Adjusted spacing for mobile
                y: isActive ? -20 : 20, // Reduced vertical movement for compact layout
              }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className={`absolute bg-white shadow-lg p-4 sm:p-3 rounded-lg min-w-[280px] max-w-[320px] sm:min-w-[240px] sm:max-w-[280px] flex flex-col justify-between text-left transform ${
                isActive
                  ? "shadow-2xl scale-105 sm:scale-100"
                  : "shadow-md scale-90 sm:scale-85"
              } ${
                !isActive
                  ? "min-h-[230px] sm:min-h-[200px]"
                  : "min-h-[275px] sm:min-h-[240px]"
              }`} // Adjusted height for mobile
            >
              <div className="text-orange-500 text-lg sm:text-base">
                {"★".repeat(feedback.stars)}
              </div>
              <p className="text-gray-700 italic mt-2 sm:text-sm">
                "{feedback.text}"
              </p>
              <div className="flex items-center mt-4 sm:mt-3">
                <div className="w-10 h-10 sm:w-8 sm:h-8 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="text-gray-800 font-semibold sm:text-sm">
                    {feedback.name}
                  </p>
                  <p className="text-gray-500 text-sm sm:text-xs">
                    {feedback.role}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {feedbacks.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
              currentIndex === index ? "bg-orange-500 w-4" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Company Logos Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-orange-500">
          Chosen by Professionals At
        </h3>
        <div className="overflow-hidden w-full flex justify-center mt-8">
          <motion.div
            className="flex space-x-10"
            animate={{ x: `-${currentLogoIndex * 120}px` }}
            transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
          >
            {logos.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Company Logo"
                className="h-12 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
