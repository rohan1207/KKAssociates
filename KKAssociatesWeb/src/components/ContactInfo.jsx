import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 gap-6 sm:gap-8 w-full max-w-4xl mx-auto">
      {/* Address */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="w-10 h-10 sm:w-9 sm:h-9 bg-[#FF5500] rounded-lg flex justify-center items-center shrink-0">
          <FaMapMarkerAlt className="text-white text-lg sm:text-base" />
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-base sm:text-lg">Address</h3>
          <p className="text-gray-600 text-sm leading-tight">
            702, Apex Business Court, <br />
            Bibwewadi Kondhwa Rd, Pune 411037
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="w-10 h-10 sm:w-9 sm:h-9 bg-[#FF5500] rounded-lg flex justify-center items-center shrink-0">
          <FaPhoneAlt className="text-white text-lg sm:text-base" />
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-base sm:text-lg">Phone</h3>
          <p className="text-gray-600 text-sm leading-tight">+91 1234567890</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="w-10 h-10 sm:w-9 sm:h-9 bg-[#FF5500] rounded-lg flex justify-center items-center shrink-0">
          <FaEnvelope className="text-white text-lg sm:text-base" />
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-base sm:text-lg">Email</h3>
          <p className="text-gray-600 text-sm leading-tight">
            contact@example.com
          </p>
        </div>
      </div>
    </div>
  );
}
