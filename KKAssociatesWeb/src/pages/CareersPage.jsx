import { useState } from "react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    console.log("Form Data:", formData);
  };

  return (
    <div className="container mx-auto p-8">
      {/* Careers Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Join Our Team</h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Inviting commerce graduates to work in a dynamic environment. Get in
          touch if you fulfill the following criteria.
        </p>
      </div>

      {/* Qualifications Section */}
      <div className="flex">
        <div className="bg-[#2E1A55] p-6 rounded-lg shadow-md max-w-3xl mx-auto mb-10 text-white">
          <h3 className="text-2xl font-semiboldmb-3 mt-4">Qualifications</h3>
          <ul className="list-disc pl-6 text-white space-y-2 mt-4">
            <li>
              At least 2 years experience in Finance, Accounting, and Taxes.
            </li>
            <li>Deep understanding of Accounting, Bookkeeping, and Taxes.</li>
            <li>Degree in Commerce.</li>
          </ul>
        </div>

        {/* Apply Now Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl mx-auto border border-gray-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
            Apply Now
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number *"
              required
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <input
              type="file"
              name="resume"
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 cursor-pointer"
            />
            <button
              type="submit"
              className="w-full bg-[rgb(227,121,62)] text-white py-3 rounded-lg hover:bg-[rgb(242,140,80)] transition font-semibold text-lg"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
