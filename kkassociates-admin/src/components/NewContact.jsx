import React, { useState } from "react";

const NewContact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`New Contact Added: ${JSON.stringify(contact, null, 2)}`);
    setContact({ name: "", email: "", phone: "" }); // Reset form
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        👤 Add New Contact
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default NewContact;
