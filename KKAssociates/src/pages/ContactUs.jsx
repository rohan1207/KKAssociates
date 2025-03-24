import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import BusinessHours from "../components/BusinessHours";
import Locations from "../components/Locations";

export default function ContactUs() {
  return (
    <div className="container mx-auto p-6">
      {/* Map & Contact Info */}
      <div className="relative w-full h-96 mb-10">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.google.com/maps/embed?..."
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-3xl mt-[202px]">
          <ContactInfo />
        </div>
      </div>
      {/* Contact Form & Business Hours */}
      <div className="grid md:grid-cols-2 gap-10">
        <ContactForm />
        <BusinessHours />
      </div>
      {/* Locations Section */}
      <Locations />
         
    </div>
  );
}
