import { useState } from "react";

const PadlockSecurity = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessLogs, setAccessLogs] = useState([]);

  const correctPassword = "admin123"; // Change this or fetch from DB in future

  const handleAccess = () => {
    const timestamp = new Date().toLocaleString();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setAccessLogs([...accessLogs, { status: "Success", timestamp }]);
    } else {
      setAccessLogs([...accessLogs, { status: "Failed", timestamp }]);
      alert("Incorrect password. Access denied.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">🔒 Padlock Security</h2>
      {!isAuthenticated ? (
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full mb-4 rounded"
          />
          <button
            onClick={handleAccess}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Unlock
          </button>
        </div>
      ) : (
        <div>
          <p className="text-green-500 font-bold">Access Granted ✅</p>
          <p>Welcome! You have unlocked the system.</p>
        </div>
      )}

      {/* Access Logs */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Access Logs</h3>
        <ul className="text-left text-sm">
          {accessLogs.map((log, index) => (
            <li
              key={index}
              className={
                log.status === "Success" ? "text-green-500" : "text-red-500"
              }
            >
              {log.timestamp} - {log.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PadlockSecurity;
