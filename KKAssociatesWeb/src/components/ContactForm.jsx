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

    const response = await fetch("https://formspree.io/f/mvgkqodz", {
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

  // ✅ Handle WhatsApp Message Sending (With Prefilled Text for iOS & Android)
  const sendToWhatsapp = () => {
    const { name, email, message } = formData;
    const phoneNumber = "8600073706"; // ✅ Replace with your WhatsApp number (without country code)

    if (!name || !email || !message) {
      alert("Please fill in all required fields!");
      return;
    }

    const text = `📌 Contact Form Submission\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;
    const encodedText = encodeURIComponent(text);

    // ✅ Use WhatsApp URL Scheme for iOS
    const whatsappURL = `whatsapp://send?phone=91${phoneNumber}&text=${encodedText}`;

    // ✅ Open WhatsApp with Prefilled Text
    window.location.href = whatsappURL;
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Send Us a Message</h2>

      {/* Toggle Between Email & WhatsApp */}
      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            !isWhatsApp ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
          }`}
          onClick={() => setIsWhatsApp(false)}
        >
          Send Email
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            isWhatsApp ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
          }`}
          onClick={() => setIsWhatsApp(true)}
        >
          WhatsApp
        </button>
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
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Email
          </button>
        )}
      </form>

      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}
