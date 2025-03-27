import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Function to update form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to send data to WhatsApp
  const sendToWhatsapp = () => {
    let number = "+918855817434"; // Replace with your WhatsApp number

    const { name, email, phone, message } = formData;

    // Check if all fields are filled
    if (!name || !email || !phone || !message) {
      alert("Please fill all the fields!");
      return;
    }

    // Create WhatsApp URL
    let url =
      "https://wa.me/" +
      number +
      "?text=" +
      "📌 Contact Form Submission %0A%0A" +
      "👤 Name: " +
      name +
      "%0A" +
      "📧 Email: " +
      email +
      "%0A" +
      "📞 Phone: " +
      phone +
      "%0A" +
      "💬 Message: " +
      message +
      "%0A";

    window.open(url, "_blank").focus(); // Open WhatsApp
  };

  return (
    <div className="relative w-full">
      {/* 🔶 Banner / Strip Section */}
      <div className="bg-[#f58842] text-white text-center py-10 px-6 flex justify-center items-center relative">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Get Tailored Tax Solutions Now</h2>
          <p className="text-sm mt-2">
            Connect with our experts for personalized tax advice that meets your
            unique cross-border needs.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex justify-center space-x-4">
            <Link to={"Contact-us"}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white text-black px-5 py-2 rounded font-medium shadow"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>

        {/* 🟣 Chat Button - Positioned Absolutely in Strip */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="fixed bottom-6 right-6 bg-[#402569] rounded-full p-3 shadow-lg border-4 border-[#f58842] hover:scale-110 transition-transform z-50 flex items-center justify-center"
        >
          <img src="/chat.png" alt="Chat" className="w-10 h-10" />
        </button>
      </div>

      {/* 💬 Chat Box - Appears Below the Strip */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 bg-white rounded-2xl shadow-2xl w-[350px] overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-[#402569] text-white p-4 flex items-center rounded-t-2xl">
              <MessageCircle size={24} className="mr-2" />
              <span className="font-semibold text-lg">
                Got Questions? Chat With Us.
              </span>
            </div>

            {/* Chat Content */}
            <div className="p-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-[#402569]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border border-gray-300 p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-[#402569]"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border border-gray-300 p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-[#402569]"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="w-full border border-gray-300 p-3 rounded-lg mb-3 h-24 focus:outline-none focus:ring-2 focus:ring-[#402569]"
              />
              <button
                onClick={sendToWhatsapp}
                className="bg-[#402569] text-white w-full py-3 rounded-lg hover:bg-[#311c4f] transition text-lg"
              >
                Send Message
              </button>
            </div>

            {/* Footer */}
            <p className="text-gray-500 text-center text-sm pb-4">
              Your message will be sent directly to WhatsApp.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
