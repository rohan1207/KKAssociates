import { useState, useEffect } from "react";

export default function BookConsultation() {
  const formatDate = (date) => {
    if (!date) return "N/A";
    const selectedDate = new Date(2025, 2, date);
    return selectedDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    notes: "",
    date: "",
    time: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep(2);
  };

  const confirmBooking = () => {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(formData);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    setShowConfirmation(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/handshake.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[#2D2155] opacity-[0.69]"></div>

      {/* Main booking container (disabled when modal is open) */}
      <div
        className={`relative bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl transition-all ${
          showConfirmation ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Book Your Consultation
        </h2>

        {/* Step Indicator */}
        <div className="flex justify-center gap-8 my-6">
          <div
            className={`flex items-center gap-2 ${
              step === 1 ? "text-orange-500 font-bold" : "text-gray-400"
            }`}
          >
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-500 text-white">
              1
            </span>
            Your Details
          </div>
          <div
            className={`flex items-center gap-2 ${
              step === 2 ? "text-orange-500 font-bold" : "text-gray-400"
            }`}
          >
            <span
              className={`w-6 h-6 flex items-center justify-center rounded-full ${
                step === 2
                  ? "bg-orange-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              2
            </span>
            Select Time
          </div>
        </div>

        {/* Step 1: User Details */}
        {step === 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              className="border p-3 rounded-lg w-full"
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border p-3 rounded-lg w-full"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="border p-3 rounded-lg w-full"
              value={formData.phone}
              onChange={handleChange}
            />
            <select
              name="serviceType"
              className="border p-3 rounded-lg w-full"
              value={formData.serviceType}
              onChange={handleChange}
            >
              <option value="">Select service type</option>
              <option value="Tax Consultation">Tax Consultation</option>
              <option value="Personal Tax Filings">Personal Tax Filings</option>
              <option value="Investor Services">Investor Services</option>
              <option value="Business Advisory">Business Advisory</option>
            </select>
            <textarea
              name="notes"
              placeholder="Additional Notes"
              className="border p-3 rounded-lg w-full col-span-2"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Step 2: Date and Time Selection */}
        {step === 2 && (
          <div>
            <h3 className="text-lg font-bold text-center">
              Select Date and Time
            </h3>
            <div className="grid grid-cols-7 gap-2 my-4">
              {[...Array(31)].map((_, i) => (
                <button
                  key={i}
                  className={`p-2 border rounded ${
                    formData.date === (i + 1).toString()
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, date: (i + 1).toString() })
                  }
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              {["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM"].map((time) => (
                <button
                  key={time}
                  className={`p-2 border rounded ${
                    formData.time === time
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setFormData({ ...formData, time })}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-6 text-right">
          {step === 1 ? (
            <button
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
              onClick={nextStep}
            >
              Continue
            </button>
          ) : (
            <>
              <button
                className="bg-gray-300 text-gray-600 px-6 py-2 rounded-lg mr-4"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
                onClick={confirmBooking}
              >
                Confirm Booking
              </button>
            </>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setShowConfirmation(false)}
            >
              ❌
            </button>
            <div className="text-green-500 text-3xl mb-4">✔️</div>
            <h2 className="text-xl font-bold">Booking Confirmed!</h2>
            <p className="text-gray-600 mt-2">
              A confirmation email has been sent.
            </p>
            <div className="mt-4 p-4 border rounded-lg text-left">
              <p>
                <strong>Name:</strong> {formData.fullName}
              </p>
              <p>
                <strong>Service:</strong> {formData.serviceType}
              </p>
              <p>
                <strong>Date:</strong> {formatDate(formData.date)}
              </p>
              <p>
                <strong>Time:</strong> {formData.time}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
