import React from "react";

const GenerateReport = () => {
  // Dummy report data (later replace with database integration)
  const reports = [
    {
      id: 1,
      name: "January Sales Report",
      date: "2025-01-31",
      status: "Completed",
    },
    {
      id: 2,
      name: "Q1 Financial Report",
      date: "2025-03-15",
      status: "Pending",
    },
    {
      id: 3,
      name: "Customer Feedback",
      date: "2025-02-20",
      status: "Completed",
    },
    {
      id: 4,
      name: "Website Analytics",
      date: "2025-03-10",
      status: "Completed",
    },
  ];

  const downloadReport = (reportName) => {
    alert(`📥 Downloading: ${reportName}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-4">
        <span className="mr-2"></span> Generate Reports
      </h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Report Name</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b">
                <td className="py-3 px-4">{report.id}</td>
                <td className="py-3 px-4">{report.name}</td>
                <td className="py-3 px-4">{report.date}</td>
                <td
                  className="py-3 px-4 font-semibold"
                  style={{
                    color: report.status === "Completed" ? "green" : "orange",
                  }}
                >
                  {report.status}
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    className={`px-4 py-2 rounded-md text-white font-medium transition ${
                      report.status === "Completed"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                    onClick={() => downloadReport(report.name)}
                    disabled={report.status !== "Completed"}
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GenerateReport;
