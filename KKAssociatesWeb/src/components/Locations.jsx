import { useRef, useEffect, useState } from "react";

const locations = [
  {
    name: "Headquarters",
    city: "Chicago, USA",
    mapUrl: "https://goo.gl/maps/7gF8G6PfJmB2",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d385232.45348403853!2d-111.986542!3d41.033382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8753026fe800f935%3A0x16236469189e8759!2s51%20Bonneville%20Lane%2C%20Kaysville%2C%20UT%2084037!5e0!3m2!1sen!2us!4v1742887642335!5m2!1sen!2sus",
  },
  {
    name: "Regional Office",
    city: "Mumbai, India",
    mapUrl: "https://goo.gl/maps/3Q5y4G3yT6H2",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d482830.78836785315!2d72.838491!3d19.01463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cec3f462dfbd%3A0x8f317d1b39e5e5ce!2sSenapati%20Bapat%20Marg%2C%20Mumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2us!4v1742887678774!5m2!1sen!2us",
  },
  {
    name: "Delhi/ NCR",
    city: "Delhi, India",
    mapUrl: "https://goo.gl/maps/Y6cH3P5gG8K2",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3509.2019303605784!2d77.04053632528064!3d28.413163175785318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s344%2C%20Tower%20B2%2C%20Spaze%20I-Tech%2C%20Sector-49%2C%20Sohna%20Road%2C%20Gurgaon-%20122018%2C%20Haryana.!5e0!3m2!1sen!2us!4v1742887788886!5m2!1sen!2us",
  },
  {
    name: "Bengaluru",
    city: "Bengaluru, India",
    mapUrl: "https://goo.gl/maps/9Z3H4G7JfL52",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2254952520116!2d77.7029406748411!3d12.957417687356637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae123184269049%3A0x9822df974af274d4!2sPurva%20Fountain%20Square!5e0!3m2!1sen!2us!4v1742887837880!5m2!1sen!2us",
  },
];

export default function Locations() {
  return (
    <div className="mt-16 text-center">
      <h2 className="text-2xl font-semibold text-orange-500">Our Locations</h2>
      <p className="text-gray-500 mb-6">Connecting with you worldwide.</p>
      <div className="overflow-x-auto whitespace-nowrap pb-4">
        <div className="inline-flex space-x-6">
          {locations.map((loc, index) => (
            <a
              key={index}
              href={loc.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-80 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <iframe
                src={loc.iframeSrc}
                width="100%"
                height="250"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="p-4">
                <h3 className="font-semibold">{loc.name}</h3>
                <p className="text-sm text-gray-600">{loc.city}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
         
    </div>
  );
}
