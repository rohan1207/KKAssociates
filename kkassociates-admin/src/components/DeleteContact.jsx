import React, { useState } from "react";

const dummyContacts = [
  { name: "John Doe", email: "john@example.com", phone: "1234567890" },
  { name: "Alice Smith", email: "alice@example.com", phone: "9876543210" },
];

const DeleteContact = () => {
  const [search, setSearch] = useState("");
  const [contact, setContact] = useState(null);

  const handleSearch = () => {
    const found = dummyContacts.find(
      (c) => c.email === search || c.phone === search
    );
    if (found) {
      setContact(found);
    } else {
      alert("Contact not found!");
      setContact(null);
    }
  };

  const handleDelete = () => {
    alert(`Deleted Contact: ${JSON.stringify(contact, null, 2)}`);
    setContact(null);
    setSearch("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        🗑️ Delete Contact
      </h2>
      <div className="flex space-x-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter Email or Phone"
          className="p-2 border rounded-md w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>

      {contact && (
        <div className="mt-4">
          <p className="text-gray-700">
            <strong>Name:</strong> {contact.name}
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> {contact.email}
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> {contact.phone}
          </p>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded-md mt-2"
          >
            Delete Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteContact;
