import { motion } from "framer-motion";

export default function LeaderInfo({ leader, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg shadow-lg w-[90%] max-w-xl p-6 relative"
      >
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

        <div className="flex flex-col items-center">
          <img
            src={leader.image}
            alt={leader.name}
            className="w-24 h-24 object-cover rounded-full shadow-md"
          />
          <h2 className="mt-3 text-xl font-bold text-gray-800">
            {leader.name}
          </h2>
        </div>

        {/* Leader Details */}
        <p className="mt-4 text-gray-600 text-justify">{leader.fullInfo}</p>
      </motion.div>
    </div>
  );
}
