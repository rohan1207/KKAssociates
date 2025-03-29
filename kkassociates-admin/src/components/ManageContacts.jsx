import { useState } from "react";

const initialContacts = [
  {
    id: 1,
    name: "Raj Mehta",
    email: "raj.mehta@taxfirm.com",
    phone: "9876543210",
    role: "CA",
    company: "Mehta & Co.",
  },
  {
    id: 2,
    name: "Priya Shah",
    email: "priya.shah@consulting.com",
    phone: "9123456780",
    role: "Consultant",
    company: "Shah Advisory",
  },
  {
    id: 3,
    name: "Amit Verma",
    email: "amit.verma@taxfirm.com",
    phone: "9786541230",
    role: "Auditor",
    company: "Verma Associates",
  },
];

export default function ManageContacts() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    company: "",
  });

  const handleCheckboxChange = (id) => {
    setSelectedContacts((prev) =>
      prev.includes(id)
        ? prev.filter((contactId) => contactId !== id)
        : [...prev, id]
    );
  };

  const handleDelete = () => {
    setContacts(
      contacts.filter((contact) => !selectedContacts.includes(contact.id))
    );
    setSelectedContacts([]);
  };

  const handleUpdate = () => {
    alert("Update functionality can be integrated with a backend later.");
  };

  const handleCreateNew = () => {
    setShowForm(true);
  };

  const handleAddContact = () => {
    const newId = contacts.length + 1;
    setContacts([...contacts, { id: newId, ...newContact }]);
    setNewContact({ name: "", email: "", phone: "", role: "", company: "" });
    setShowForm(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Admin Dashboard</h2>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Manage Contacts</h3>
          <button
            onClick={handleCreateNew}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Create New
          </button>
        </div>
        <input
          type="text"
          placeholder="Search by name or email"
          className="w-full p-2 border rounded mb-4"
        />
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Select</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Company</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td className="p-2 border text-center">
                  <input
                    type="checkbox"
                    checked={selectedContacts.includes(contact.id)}
                    onChange={() => handleCheckboxChange(contact.id)}
                  />
                </td>
                <td className="p-2 border">{contact.name}</td>
                <td className="p-2 border">{contact.email}</td>
                <td className="p-2 border">{contact.phone}</td>
                <td className="p-2 border">{contact.role}</td>
                <td className="p-2 border">{contact.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex gap-2">
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete Selected
          </button>
          <button
            onClick={handleUpdate}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Update Selected
          </button>
        </div>
        {showForm && (
          <div className="mt-4 p-4 border rounded">
            <h3 className="text-lg font-semibold mb-2">Create New Contact</h3>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border mb-2"
              onChange={(e) =>
                setNewContact({ ...newContact, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border mb-2"
              onChange={(e) =>
                setNewContact({ ...newContact, email: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-2 border mb-2"
              onChange={(e) =>
                setNewContact({ ...newContact, phone: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Role"
              className="w-full p-2 border mb-2"
              onChange={(e) =>
                setNewContact({ ...newContact, role: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full p-2 border mb-2"
              onChange={(e) =>
                setNewContact({ ...newContact, company: e.target.value })
              }
            />
            <button
              onClick={handleAddContact}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Add Contact
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
