import { useState } from "react";
import Sidebar from "../components/Sidebar";
import SendEmail from "../components/SendEmail";
import GenerateReport from "../components/GenerateReport";

import OpenDigitalFile from "../components/OpenDigitalFile";
import PadlockSecurity from "../components/PadlockSecurity";
import AccountExecutive from "../components/AccountExecutive";
import HelpSupport from "../components/HelpSupport";
import Statistics from "../components/Statistics";
import AdminBlogForm from "../components/AdminBlofForm";
import ManageContacts from "../components/ManageContacts";

const AdminPage = () => {
  const [activeComponent, setActiveComponent] = useState("");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar setActiveComponent={setActiveComponent} />

      {/* Main Content Area */}
      <div className="ml-64 flex-1 p-6 relative overflow-y-auto">
       

        {/* Foreground Content */}
        <div className="relative z-10 p-6">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Admin Dashboard
          </h2>

        
            {activeComponent === "SendEmail" && <SendEmail />}
            {activeComponent === "GenerateReport" && <GenerateReport />}
            {activeComponent === "ManageContacts" && <ManageContacts />}
   
            {activeComponent === "OpenDigitalFile" && <OpenDigitalFile />}
            {activeComponent === "ShareDigitalFile" && (
              <p className="text-gray-700 text-lg">
                🔗 Share Digital File Component
              </p>
            )}
            {activeComponent === "ManageDigitalFiles" && (
              <p className="text-gray-700 text-lg">
                ⚙️ Manage Digital Files Component
              </p>
            )}
            {activeComponent === "AddBlog" && <AdminBlogForm />}
            {activeComponent === "Statistics" && <Statistics />}
            {activeComponent === "Padlock" && <PadlockSecurity />}
            {activeComponent === "Padlock" && <PadlockSecurity />}
            {activeComponent === "AccountExecutive" && <AccountExecutive />}
            {activeComponent === "Help" && <HelpSupport />}

            {activeComponent === "" && (
              <p className="text-gray-500 text-lg">
                Select an option from the sidebar to get started.
              </p>
            )}
        
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
