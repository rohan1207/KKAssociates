const locations = [
  { name: "Headquarters", city: "Chicago, USA", image: "/chicago.png" },
  { name: "Regional Office", city: "New York, USA", image: "/newyork.png" },
  { name: "European Branch", city: "Paris, France", image: "/paris.png" },
  { name: "Asia-Pacific Office", city: "Beijing, China", image: "/china.png" },
];

export default function Locations() {
  return (
    <div className="mt-16 text-center">
      <h2 className="text-2xl font-semibold text-orange-500">Our Locations</h2>
      <p className="text-gray-500 mb-6">Connecting with you worldwide.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={loc.image}
              alt={loc.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{loc.name}</h3>
              <p className="text-sm text-gray-600">{loc.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
