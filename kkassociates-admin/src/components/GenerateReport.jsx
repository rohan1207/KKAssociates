import React from "react";

const GenerateReport = () => {
  // Dummy report data
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
    alert(`Downloading ${reportName} (Dummy Function)`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        📊 Generate Reports
      </h2>

      {/* Table */}
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Report Name</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id} className="text-center">
              <td className="py-2 px-4 border">{report.id}</td>
              <td className="py-2 px-4 border">{report.name}</td>
              <td className="py-2 px-4 border">{report.date}</td>
              <td
                className={`py-2 px-4 border font-semibold ${
                  report.status === "Completed"
                    ? "text-green-600"
                    : "text-yellow-500"
                }`}
              >
                {report.status}
              </td>
              <td className="py-2 px-4 border">
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
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
  );
};

export default GenerateReport;
