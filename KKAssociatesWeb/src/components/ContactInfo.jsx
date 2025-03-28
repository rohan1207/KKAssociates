import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 text-center max-w-3xl mx-auto gap-4 h-[80%] w-full">
      {/* Address */}
      <div className="flex flex-col items-center">
        <FaMapMarkerAlt className="text-orange-500 text-xl md:text-2xl mb-1" />
        <h3 className="font-semibold text-sm md:text-base">Address</h3>
        <p className="text-xs md:text-sm text-gray-600 leading-tight">
          <b>KK Associates</b> <br />
          702, Apex Business Court, Bibwewadi Kondhwa Rd, Pune 411037
        </p>
      </div>
      {/* Phone */}
      <div className="flex flex-col items-center">
        <FaPhoneAlt className="text-orange-500 text-xl md:text-2xl mb-1" />
        <h3 className="font-semibold text-sm md:text-base">Phone</h3>
        <p className="text-xs md:text-sm text-gray-600 leading-tight">
          +91 20 25511024
          <br />
          +91 9823149491
        </p>
      </div>
      {/* Email */}
      <div className="flex flex-col items-center">
        <FaEnvelope className="text-orange-500 text-xl md:text-2xl mb-1" />
        <h3 className="font-semibold text-sm md:text-base">Email</h3>
        <p className="text-xs md:text-sm text-gray-600 leading-tight">
          expat@kkassociate.com
          <br />
          Emails are replied within 24 to 48 hours.
        </p>
      </div>
         
    </div>
  );
}
