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
  const adminEmail = "KKAssociates1207@example.com"; // Replace with real admin email

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("recipient", recipient);
    formData.append("message", message);
    formData.append("adminEmail", adminEmail);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch("https://your-backend-api.com/send-email", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert(" Email sent successfully!");
        setRecipient("");
        setMessage("");
        setFile(null);
      } else {
        alert(" Failed to send email.");
      }
    } catch (error) {
      alert("⚠️ Error sending email:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4"> Send Email</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Select Recipient</label>
        <input
          type="text"
          list="recipients"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Search or enter email"
          required
        />
        <datalist id="recipients">
          {recipientsList.map((email, index) => (
            <option key={index} value={email} />
          ))}
        </datalist>

        <label className="block mb-2">Message</label>
        <textarea
          className="w-full p-2 border rounded mb-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          required
        />

        <label className="block mb-2">Attach Document (Optional)</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border rounded mb-4"
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default SendEmail;
