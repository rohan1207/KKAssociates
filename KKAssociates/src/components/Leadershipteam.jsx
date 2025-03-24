export default function LeadershipTeam() {
  const teamMembers = [
    { name: "Leader 1", image: "/leader1.png" },
    { name: "Leader 2", image: "/leader2.png" },
    { name: "Leader 3", image: "/leader3.png" },
    { name: "Leader 4", image: "/leader4.png" },
  ];
  return (
    <div className="text-center py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
        Meet Our Leadership Team
      </h2>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-lg shadow-md"
            />
            <p className="mt-3 font-medium text-gray-800">{member.name}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
        Explore Our Services
      </button>
    </div>
  );
}
