import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-3 text-center">
      <div className="flex flex-col items-center">
        <FaMapMarkerAlt className="text-orange-500 text-2xl mb-2" />
        <h3 className="font-semibold">Address</h3>
        <p className="text-sm text-gray-600">
          702, Apex Business Court, Bhosari, Pune, 411037
        </p>
      </div>
      <div className="flex flex-col items-center">
        <FaPhoneAlt className="text-orange-500 text-2xl mb-2" />
        <h3 className="font-semibold">Phone</h3>
        <p className="text-sm text-gray-600">+91 1234567890</p>
      </div>
      <div className="flex flex-col items-center">
        <FaEnvelope className="text-orange-500 text-2xl mb-2" />
        <h3 className="font-semibold">Email</h3>
        <p className="text-sm text-gray-600">contact@example.com</p>
      </div>
    </div>
  );
}