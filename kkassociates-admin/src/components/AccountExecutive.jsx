import { useState } from "react";

const AccountExecutive = () => {
  const [authorizedUsers, setAuthorizedUsers] = useState([
    "Alpesh Gujarathi",
    "Expat KKAssociates",
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin Access Control</h2>
      <p className="text-gray-600 mb-4">List of users who have access to the Admin Panel:</p>
      
      <ul className="list-disc pl-5">
        {authorizedUsers.map((user, index) => (
          <li key={index} className="text-gray-700 text-lg">
            ✅ {user}
          </li>
        ))}
      </ul>
      
      <p className="text-gray-500 mt-4 text-sm">
        * In the future, you can integrate this with a database to manage user access dynamically.
      </p>
    </div>
  );
};

export default AccountExecutive;
