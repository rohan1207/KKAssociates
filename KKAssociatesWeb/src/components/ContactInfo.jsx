import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div
      className="grid grid-cols-3 text-center max-w-3xl
    ; "
    >
      <div className="flex flex-col items-center">
        <FaMapMarkerAlt className="text-orange-500 text-2xl mb-2" />
        <h3 className="font-semibold">Address</h3>
        <p className="text-sm text-gray-600">
          <b>KK Associates</b> <br></br>
          702, Apex Business Court, Bibwewadi Kondhwa Rd, Pune 411037
        </p>
      </div>
      <div className="flex flex-col items-center">
        <FaPhoneAlt className="text-orange-500 text-2xl mb-2" />
        <h3 className="font-semibold">Phone</h3>
        <p className="text-sm text-gray-600">
          +91 20 25511024<br></br>
          +91 9823149491<br></br>
        </p>
      </div>
      <div className="flex flex-col items-center">
        <FaEnvelope className="text-orange-500 text-2xl mb-2" />
        <h3 className="font-semibold">Email</h3>
        <p className="text-sm text-gray-600">
          expat@kkassociate.com<br></br>
          Emails are replied within 24 to 48 hours.
        </p>
      </div>
         
    </div>
  );
}
