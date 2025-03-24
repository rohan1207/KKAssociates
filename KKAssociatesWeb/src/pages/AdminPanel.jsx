import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import BookingsDashboard from "../components/BookingsDashboard"; // Import the Bookings Dashboard

export default function AdminPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard"); // State to track the selected section

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-white h-full shadow-lg transition-all duration-300 flex flex-col p-4`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1
            className={`text-xl font-bold text-gray-800 ${
              !sidebarOpen && "hidden"
            }`}
          >
            Admin Panel
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="mt-4">
          <button
            onClick={() => setActiveTab("bookings")} // Switch to Bookings Dashboard
            className={`flex items-center w-full px-4 py-3 rounded-lg font-medium ${
              activeTab === "bookings"
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Calendar className="mr-3" />
            {sidebarOpen && "Bookings"}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 mt-[50px]">
        {activeTab === "dashboard" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
            <p className="mt-2 text-gray-600">Welcome to the Admin Panel</p>
          </div>
        )}
        {activeTab === "bookings" && <BookingsDashboard />}{" "}
        {/* Show bookings when clicked */}
      </div>
    </div>
  );
}
