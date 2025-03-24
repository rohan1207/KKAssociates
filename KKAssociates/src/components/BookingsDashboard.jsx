import { useState, useEffect } from "react";

export default function BookingsDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  const clearBookings = () => {
    localStorage.removeItem("bookings");
    setBookings([]);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Admin - Bookings
      </h1>

      {bookings.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border">Full Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Service</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Time</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index} className="border text-center">
                  <td className="p-3 border">{booking.fullName}</td>
                  <td className="p-3 border">{booking.email}</td>
                  <td className="p-3 border">{booking.phone}</td>
                  <td className="p-3 border">{booking.serviceType}</td>
                  <td className="p-3 border">{booking.date}</td>
                  <td className="p-3 border">{booking.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={clearBookings}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Clear All Bookings
          </button>
        </div>
      ) : (
        <p className="text-gray-600">No bookings found.</p>
      )}
    </div>
  );
}
