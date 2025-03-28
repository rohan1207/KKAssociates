import { useState } from "react";

const HelpSupport = () => {
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleQuerySubmit = () => {
    if (query.trim() !== "") {
      setChatHistory([...chatHistory, { sender: "Admin", message: query }]);
      setQuery("");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Help & Support</h2>
      <p className="text-gray-600 mb-4">
        If you have taken a subscription, you can contact the developer for
        updates, queries, bug fixes, or changes.
      </p>
      <div className="border p-4 rounded mb-4 bg-gray-100">
        <h3 className="font-semibold">Live Chat Support</h3>
        <div className="h-40 overflow-y-auto bg-white p-2 border rounded">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={chat.sender === "Admin" ? "text-right" : "text-left"}
            >
              <p className="text-gray-700 bg-gray-200 p-2 rounded inline-block mb-2">
                <strong>{chat.sender}:</strong> {chat.message}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-2 flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your query..."
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={handleQuerySubmit}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        Contact Developer
      </button>
    </div>
  );
};

export default HelpSupport;
