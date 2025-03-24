import { useState } from "react";

export default function ContactForm() {
  const [isWhatsApp, setIsWhatsApp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsapp = () => {
    const { name, email, message } = formData;
    const phoneNumber = "7987919263"; // Use without country code for `whatsapp://send`

    if (!name || !email || !message) {
      alert("Please fill in all the required fields!");
      return;
    }

    const text = `📌 Contact Form Submission\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;

    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isIOS) {
      // iOS-specific deep link
      window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
        text
      )}`;
    } else {
      // Android & Web
      window.open(
        `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(text)}`,
        "_blank"
      );
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Send Us a Message</h2>

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

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message..."
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg h-24"
        ></textarea>

        {isWhatsApp ? (
          <button
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            onClick={sendToWhatsapp}
          >
            Send via WhatsApp
          </button>
        ) : (
          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => alert("Email Sent!")}
          >
            Send Email
          </button>
        )}
      </div>
    </div>
  );
}
