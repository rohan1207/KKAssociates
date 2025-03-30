import { useState } from "react";

export default function ContactForm() {
  const [isWhatsApp, setIsWhatsApp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Email Submission (Formspree)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/mldjwdnz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Email Sent Successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("Failed to send email. Please try again.");
    }
  };

  // ✅ Handle WhatsApp Message Sending
  const sendToWhatsapp = () => {
    const { name, email, message } = formData;
    const phoneNumber = "8600073706";

    if (!name || !email || !message) {
      alert("Please fill in all required fields!");
      return;
    }

    const text = ` Contact Form Submission\n\n Name: ${name}\n Email: ${email}\n Message: ${message}`;
    const encodedText = encodeURIComponent(text);

    const whatsappURL =
      "https://wa.me/91" + phoneNumber + "?text=" + encodedText;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="mt-[180px] lg:mt-0 px-4 sm:px-8">
      <h2 className="text-lg font-semibold mb-4">Send Us a Message</h2>

      {/* Toggle Between Email & WhatsApp */}
      <div className="flex gap-4 mb-4">
        <button
          className={`w-[158px] h-[42px] border-2 rounded-lg flex justify-center items-center text-sm md:text-base ${
            !isWhatsApp ? "bg-[#007BFF] text-white" : "bg-gray-300 text-black"
          }`}
          onClick={() => setIsWhatsApp(false)}
        >
          Send Email
        </button>

        <button
          className={`w-[158px] h-[42px] border-2 rounded-lg flex justify-center items-center text-sm md:text-base ${
            isWhatsApp ? "bg-[#25D366] text-white" : "bg-gray-300 text-black"
          }`}
          onClick={() => setIsWhatsApp(true)}
        >
          WhatsApp
        </button>
      </div>
      <div className="w-full bg-[#DCF8C6] border border-green-300 rounded-lg p-4 sm:p-5 mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-black">
          WhatsApp Direct Connect
        </h3>
        <p className="text-gray-700 text-sm sm:text-base">
          Start a conversation with us instantly on WhatsApp. Our team is ready
          to assist you.
        </p>
      </div>
      <form
        onSubmit={isWhatsApp ? (e) => e.preventDefault() : handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message..."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg h-24"
        ></textarea>

        {/* Conditional Rendering for Buttons */}
        {isWhatsApp ? (
          <button
            type="button"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            onClick={sendToWhatsapp}
          >
            Send via WhatsApp
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-[#007BFF] text-white py-2 rounded-lg hover:bg-[#007BFF] transition"
          >
            Send Email
          </button>
        )}
      </form>

      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}
