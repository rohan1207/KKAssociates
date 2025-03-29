import { useState } from "react";

const SendEmail = () => {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [recipientsList] = useState([
    "user1@example.com",
    "user2@example.com",
    "user3@example.com",
  ]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("recipient", recipient);
    formData.append("message", message);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch("https://formspree.io/f/mldjwdnz", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("✅ Email sent successfully!");
        setRecipient("");
        setMessage("");
        setFile(null);
      } else {
        alert("❌ Failed to send email.");
      }
    } catch (error) {
      alert("⚠️ Error sending email:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-center mb-4">Send Email</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipient Input */}
        <div>
          <label className="block text-sm font-medium">Select Recipient</label>
          <input
            type="text"
            list="recipients"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            placeholder="Search or enter email"
            required
          />
          <datalist id="recipients">
            {recipientsList.map((email, index) => (
              <option key={index} value={email} />
            ))}
          </datalist>
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            className="w-full p-2 border rounded mt-1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            required
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium">
            Attach Document (Optional)
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-[#2F1A54]  text-white rounded hover:bg-[#2F1A54] transition rounded-2xl"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default SendEmail;
