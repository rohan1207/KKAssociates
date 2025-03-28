import React, { useState } from "react";

const dummyFiles = [
  {
    name: "Report_Q1.pdf",
    uploadedAt: "2025-03-20 10:30 AM",
    date: "2025-03-20",
    time: "10:30 AM",
  },
  {
    name: "Project_Plan.docx",
    uploadedAt: "2025-03-22 02:15 PM",
    date: "2025-03-22",
    time: "02:15 PM",
  },
  {
    name: "Invoice_1207.xlsx",
    uploadedAt: "2025-03-25 04:00 PM",
    date: "2025-03-25",
    time: "04:00 PM",
  },
];

const OpenDigitalFile = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ date: "", time: "" });
  const [filteredFiles, setFilteredFiles] = useState(dummyFiles);
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle Search
  const handleSearch = () => {
    const file = dummyFiles.find((f) =>
      f.name.toLowerCase().includes(search.toLowerCase())
    );
    setSelectedFile(file || null);
  };

  // Handle Filter
  const applyFilters = () => {
    let filtered = dummyFiles;

    if (filter.date) {
      filtered = filtered.filter((file) => file.date === filter.date);
    }
    if (filter.time) {
      filtered = filtered.filter((file) => file.time.includes(filter.time));
    }

    setFilteredFiles(filtered);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        📂 Open Digital File
      </h2>

      {/* Search Section */}
      <div className="flex space-x-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter File Name"
          className="p-2 border rounded-md w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>

      {/* File Details */}
      {selectedFile && (
        <div className="mt-4 p-4 border rounded-md bg-gray-100">
          <p>
            <strong>File Name:</strong> {selectedFile.name}
          </p>
          <p>
            <strong>Uploaded At:</strong> {selectedFile.uploadedAt}
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md mt-2">
            Open File
          </button>
        </div>
      )}

      {/* Filter Section */}
      <h3 className="text-xl font-bold text-gray-800 mt-6">🔍 Filter Files</h3>
      <div className="flex space-x-2 mt-2">
        <input
          type="date"
          value={filter.date}
          onChange={(e) => setFilter({ ...filter, date: e.target.value })}
          className="p-2 border rounded-md w-full"
        />
        <input
          type="time"
          value={filter.time}
          onChange={(e) => setFilter({ ...filter, time: e.target.value })}
          placeholder="Enter Time (e.g. 10 AM)"
          className="p-2 border rounded-md w-full"
        />
        <button
          onClick={applyFilters}
          className="bg-gray-600 text-white px-4 py-2 rounded-md"
        >
          Apply
        </button>
      </div>

      {/* Filtered File List */}
      <div className="mt-4">
        {filteredFiles.length > 0 ? (
          <ul className="list-disc pl-4">
            {filteredFiles.map((file, index) => (
              <li key={index} className="text-gray-700">
                {file.name} - {file.uploadedAt}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-red-500 mt-2">
            No files found with selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default OpenDigitalFile;
