import { useEffect, useState } from "react";

const Statistics = () => {
  const [stats, setStats] = useState([
    { metric: "Total Visitors", value: "1,245", updated_at: "2025-03-28" },
    { metric: "Page Views", value: "3,567", updated_at: "2025-03-28" },
    { metric: "Bounce Rate", value: "45%", updated_at: "2025-03-28" },
    {
      metric: "Average Session Duration",
      value: "3m 45s",
      updated_at: "2025-03-28",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (loading) return <p>Loading statistics...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Website Statistics
      </h2>
      {stats && stats.length > 0 ? (
        <div>
          {stats.map((stat, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <h3 className="font-semibold">{stat.metric}</h3>
              <p className="text-gray-700">Value: {stat.value}</p>
              <p className="text-gray-500 text-sm">
                Last updated: {stat.updated_at}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No statistics available.</p>
      )}
    </div>
  );
};

export default Statistics;
