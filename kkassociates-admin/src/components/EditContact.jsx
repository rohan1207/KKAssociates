import React, { useState } from "react";

const dummyContacts = [
  { name: "John Doe", email: "john@example.com", phone: "1234567890" },
  { name: "Alice Smith", email: "alice@example.com", phone: "9876543210" },
];

const EditContact = () => {
  const [search, setSearch] = useState("");
  const [contact, setContact] = useState(null);
  const [updatedContact, setUpdatedContact] = useState({});

  const handleSearch = () => {
    const found = dummyContacts.find(
      (c) => c.email === search || c.phone === search
    );
    if (found) {
      setContact(found);
      setUpdatedContact(found);
    } else {
      alert("Contact not found!");
      setContact(null);
    }
  };

  const handleChange = (e) => {
    setUpdatedContact({ ...updatedContact, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    alert(`Updated Contact: ${JSON.stringify(updatedContact, null, 2)}`);
    setContact(null);
    setSearch("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">✏️ Edit Contact</h2>
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
          <input
            type="text"
            name="name"
            value={updatedContact.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md my-2"
          />
          <input
            type="email"
            name="email"
            value={updatedContact.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md my-2"
          />
          <input
            type="text"
            name="phone"
            value={updatedContact.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md my-2"
          />
          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default EditContact;
