import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (selectedRole === "Admin") {
      if (email === "admin@gmail.com" && password === "admin@123") {
        navigate("/admin-panel"); // Redirect to Admin Panel
      } else {
        setError("Invalid Admin Credentials!");
      }
    } else {
      setError("User login is not implemented yet!");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/homePage.png')", // Change path as needed
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2D2155] opacity-60"></div>

      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
        <p className="mb-6">Login to continue to your account</p>

        {/* Admin & User Buttons */}
        {!selectedRole ? (
          <div className="flex space-x-4">
            <button
              className="bg-orange-500 px-6 py-2 rounded-md text-lg"
              onClick={() => setSelectedRole("Admin")}
            >
              Admin
            </button>
            <button
              className="bg-gray-500 px-6 py-2 rounded-md text-lg"
              onClick={() => setSelectedRole("User")}
            >
              User
            </button>
          </div>
        ) : (
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96">
            {/* Role Title */}
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {selectedRole} Login
            </h2>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email ID</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
                Login
              </button>
            </form>

            {/* Forgot Password */}
            <div className="text-center mt-4">
              <Link to="/forgot-password" className="text-orange-500 text-sm">
                Forgot your password?
              </Link>
            </div>

            {/* Back Button */}
            <div className="text-center mt-4">
              <button
                className="text-gray-500 text-sm underline"
                onClick={() => {
                  setSelectedRole(null);
                  setError("");
                }}
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
