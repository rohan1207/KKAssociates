import { motion } from "framer-motion";

export default function BookConsultation() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative px-4"
      style={{ backgroundImage: "url('/homePage.png')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#2D215594]"></div>

      {/* Calendly Embed - Well-Styled */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white p-4 rounded-2xl shadow-xl max-w-2xl w-full"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Book a Consultation
        </h2>

        <div className="rounded-lg overflow-hidden">
          <iframe
            src="https://calendly.com/kkassociates1207/new-meeting"
            className="w-full"
            style={{
              height: "500px", // Adjusted to fit well
              border: "none",
              borderRadius: "10px",
            }}
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
