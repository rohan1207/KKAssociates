import { useState } from "react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Handle file input separately
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(""); // Clear previous messages
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mldjwdnz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          message: formData.message,
          resume: formData.resumeLink, // Sending resume link
        }),
      });

      if (response.ok) {
        setSuccessMessage("Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
          resumeLink: "",
        });
      } else {
        setErrorMessage("Failed to submit application. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* Careers Section */}
      <div className="text-center mb-6 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Join Our Team
        </h2>
        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Inviting commerce graduates to work in a dynamic environment. Get in
          touch if you fulfill the following criteria.
        </p>
      </div>

      {/* Qualifications & Apply Form */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Qualifications Section */}
        <div className="bg-[#2E1A55] p-6 rounded-lg shadow-md text-white w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Qualifications</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              At least 2 years experience in Finance, Accounting, and Taxes.
            </li>
            <li>Deep understanding of Accounting, Bookkeeping, and Taxes.</li>
            <li>Degree in Commerce.</li>
          </ul>
        </div>

        {/* Apply Now Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full md:w-1/2 border border-gray-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
            Apply Now
          </h3>
          {successMessage && (
            <p className="text-center text-green-600 font-medium">
              {successMessage}
            </p>
          )}

          {errorMessage && (
            <p className="text-center text-red-600 font-medium">
              {errorMessage}
            </p>
          )}

          {errorMessage && (
            <p className="text-center text-red-600 font-medium">
              {errorMessage}
            </p>
          )}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            encType="multipart/form-data"
          >
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
              type="url"
              name="resumeLink"
              placeholder="Paste Google Drive link to your resume *"
              required
              value={formData.resumeLink}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF5500]  text-white py-3 rounded-lg hover:bg-bg-[#FF5500]  transition font-semibold text-lg"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
