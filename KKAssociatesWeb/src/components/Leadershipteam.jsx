import { useState } from "react";

export default function LeadershipTeam({ selectedLeader, setSelectedLeader }) {
  const teamMembers = [
    {
      name: "Alpesh Gujrathi",
      image: "Alpesh_Photo.jpg",
      shortInfo:
        "A Chartered Accountant since 2006, specializing in tax planning and cross-border tax consultation  .",
      fullInfo: `A Chartered Accountant since 2006, Alpesh brings over 12 years of
experience in public accounting, specializing in tax planning, compliance, and
cross-border tax consultation for clients with income in both the U.S. and India. He has
advised businesses across industries, including banking, real estate, finance, and
high-net-worth individuals, implementing effective tax-saving strategies. With expertise in
audit and business advisory services for privately held companies, he combines technical
proficiency with a client-centric approach. He holds a Commerce degree from the
University of Pune and an Accounting degree from the Institute of Chartered Accountants
of India, New Delhi.`,
    },
    {
      name: "Kalyankumar Gujrathi",
      image: "kalyankumar.png",
      shortInfo:
        "A seasoned partner at KKA for over 30 years, blending tax extensive experience with business insights.",
      fullInfo: `A seasoned partner at KKA for over 30 years, Kalyankumar has
extensive experience serving mid-sized family businesses, wholesalers, distributors,
international clients, and individuals. He blends technical tax expertise with deep business
insight to deliver proactive, client-focused solutions. He has successfully represented
clients in India and advised multi-million-dollar U.S. companies on establishing operations
in India. His expertise also includes business valuations for various entities. He holds a
Bachelor's in Commerce from the University of Pune and an Accounting degree from the
Institute of Chartered Accountants of India, New Delhi.`,
    },
    {
      name: "Sachin Ahuja",
      image: "sachin.png",
      shortInfo:
        "A partner at KKA with over 12 years of experience across the U.S. and India, offering strategic tax advisory.",
      fullInfo: `A partner at KKA with over 12 years of post-qualification experience, Sachin
has worked across both the U.S. and India, bringing a fresh and practical approach to tax
advisory. His expertise spans diverse industries, from manufacturing and engineering
firms in India to mid-size corporations and publicly listed insurance companies in the U.S.
With experience gained from top accounting firms worldwide, he offers in-depth insights
and strategic financial solutions. Sachin holds a Bachelor of Commerce and a Chartered
Accountancy degree from India and has been a member of the American Institute of
Certified Public Accountants since 2009.`,
    },
    {
      name: "Jaren Durham",
      image: "wade.jpg",
      shortInfo:
        "A partner at KKA with over 12 years of experience across the U.S. and India, offering strategic tax advisory.",
      fullInfo:
        "He is a licensed CPA in the State of Utah, has a Master's of Science in Taxation, and has years of Tax and Accounting experience. In Addition to doing taxes for individuals and businesses for years. He has worked for one of the big four accounting firms, has managed the tax analyst team at TAX Works, a major software provider and has taught accounting classes at the University of Utah. He is also very knowledgeable in business systems and technology.",
    },
  ];

  return (
    <div className="text-center py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
        Meet Our Leadership Team
      </h2>

      {/* Scrollable Container for Mobile */}
      <div className="overflow-x-auto pb-4">
        {/* Responsive Grid for Team Members */}
        <div className="flex gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center lg:gap-8 max-w-5xl mx-auto">
          {teamMembers
            .filter(
              (member) => !selectedLeader || selectedLeader.name !== member.name
            )
            .map((member, index) => (
              <div
                key={index}
                className="relative bg-[rgb(255,249,242)] shadow-lg rounded-xl overflow-hidden flex flex-col shrink-0 
                w-[240px] h-[280px] sm:w-[250px] sm:h-[320px] md:w-[270px] md:h-[346px] group"
              >
                {/* Card Content */}
                <div className="p-4 sm:p-5 flex flex-col items-center h-full">
                  {/* Leader Image Container with Fixed Dimensions */}
                  <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden mb-3 sm:mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Default Content - Always Visible */}
                  <div className="text-center">
                    <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1 sm:mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-2">
                      {member.shortInfo}
                    </p>
                  </div>
                </div>

                {/* Hover Overlay - Only on Desktop */}
                <div 
                  className="hidden sm:flex absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                  flex-col justify-between p-6 rounded-xl"
                  style={{
                    background: 'linear-gradient(180deg, rgba(99, 73, 187, 0.5) 37.17%, #2D2155 81.57%)'
                  }}
                >
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-100 line-clamp-2">
                      {member.shortInfo}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedLeader(member)}
                    className="absolute bottom-4 right-4 px-4 py-2 bg-[#FF6B00] text-white text-sm font-medium rounded-lg hover:bg-[#e65900] transition-colors"
                  >
                    Read More
                  </button>
                </div>

                {/* Mobile Read More Button */}
                <button
                  onClick={() => setSelectedLeader(member)}
                  className="block sm:hidden absolute bottom-3 right-3 px-2.5 py-1 bg-[#2D2155] text-white text-[10px] font-medium rounded-md shadow-md hover:bg-[#3d3165] transition-colors"
                >
                  Read More
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
