import { ShieldCheck, Globe, Trophy, Handshake } from "lucide-react";

export default function StatsSection() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white ">
      <div className="bg-[#25225D] text-white p-6 rounded-xl max-w-3xl shadow-md border border-blue-400 mb-10">
        <h2 className="text-2xl font-bold mb-2">Our Story</h2>
        <p className="text-gray-300">
          With decades of experience in cross-border taxation between the U.S.
          and India, we've built a reputation for excellence in providing
          comprehensive tax solutions. Our team of experts combines technical
          expertise with practical business insights to deliver tailored
          solutions for our clients.
        </p>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
        {[
          { value: "7+", label: "Countries Served" },
          { value: "40+", label: "Years of Experience" },
          { value: "1000+", label: "Years of Experience" },
          { value: "98%", label: "Customer Satisfaction Rate" },
        ].map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold text-orange-500">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
      {/* Accreditation & Recognition */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {[
          {
            title: "Accreditations",
            items: [
              {
                icon: <ShieldCheck className="text-orange-500" />,
                text: "Certified U.S. Tax Experts",
              },
              {
                icon: <Globe className="text-orange-500" />,
                text: "Recognized by International Tax Authorities",
              },
            ],
          },
          {
            title: "Recognition",
            items: [
              {
                icon: <Trophy className="text-orange-500" />,
                text: "30+ Years of Excellence",
              },
              {
                icon: <Handshake className="text-orange-500" />,
                text: "Trusted by Global Clients",
              },
            ],
          },
        ].map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md border">
            <h4 className="text-lg font-semibold mb-3">{section.title}</h4>
            {section.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-gray-700 mb-2"
              >
                <span className="text-xl">{item.icon}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
         
    </div>
  );
}
