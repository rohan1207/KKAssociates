import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ setActiveComponent }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="w-64 h-screen overflow-y-auto bg-[#c7c7c7] shadow-lg fixed p-4">
      <Link to="/">
        <img
          src="/logo.png"
          alt="KK Associates Logo"
          height="100px"
          className="h-10"
        />
      </Link>
      <h2 className="mt-4 text-xl font-bold mb-4">Admin Panel</h2>

      <button
        className="bg-orange-500 text-white w-full py-2 mb-2 rounded-2xl"
        onClick={() => setActiveComponent("SendEmail")}
      >
        Send Email
      </button>

      <button
        className="bg-orange-500 text-white w-full py-2 mb-2 rounded-2xl"
        onClick={() => setActiveComponent("GenerateReport")}
      >
        Generate Report
      </button>

      <button
        className="bg-orange-500 text-white w-full py-2 mb-2 rounded-2xl"
        onClick={() => setActiveComponent("ManageContacts")}
      >
        Manage Contacts
      </button>


      {/* Dropdown - Digital File */}
      <div>
        <button
          className="bg-orange-500 text-white w-full py-2 mt-2 rounded-2xl"
          onClick={() => toggleDropdown("digitalFile")}
        >
          Digital File ⏷
        </button>
        {openDropdown === "digitalFile" && (
          <div className="ml-4">
            <button
              className="block w-full py-2 text-left"
              onClick={() => setActiveComponent("OpenDigitalFile")}
            >
              Open Digital File
            </button>
            <button
              className="block w-full py-2 text-left"
              onClick={() => setActiveComponent("ShareDigitalFile")}
            >
              Share Digital File
            </button>
            <button
              className="block w-full py-2 text-left"
              onClick={() => setActiveComponent("ManageDigitalFiles")}
            >
              Manage Digital Files
            </button>
          </div>
        )}
      </div>

      {/* More Menu Items */}
      <button
        className="bg-orange-500 text-white w-full py-2 mt-2 rounded-2xl"
        onClick={() => setActiveComponent("Padlock")}
      >
        Padlock
      </button>

      <button
        className="bg-orange-500 text-white w-full py-2 mt-2 rounded-2xl"
        onClick={() => setActiveComponent("AccountExecutive")}
      >
        Account Executive
      </button>
      <button
        className="bg-orange-500 text-white w-full py-2 mt-2 rounded-2xl"
        onClick={() => setActiveComponent("AddBlog")}
      >
        Add Blogs
      </button>

      <button
        className="bg-orange-500 text-white w-full py-2 mt-2 rounded-2xl"
        onClick={() =>
          (window.location.href = "https://kkassociates.onrender.com")
        }
      >
        Go To Website
      </button>
      <button
        className="bg-orange-500 text-white w-full py-2 mt-2 rounded-2xl"
        onClick={() => setActiveComponent("Statistics")}
      >
        Statistics
      </button>
      <button
        className="bg-orange-500 text-white w-full py-2 mt-2 rounded-2xl"
        onClick={() => setActiveComponent("Help")}
      >
        Help
      </button>
    </div>
  );
};

export default Sidebar;
