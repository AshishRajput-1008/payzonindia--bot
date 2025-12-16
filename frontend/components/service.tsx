import React from "react";
import { ShieldCheck, Headphones, Lightbulb, Award } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
}

// Helper to get first N words
function firstNWords(text: string, maxWords: number, minWords: number = 3) {
  const words = text.split(" ").filter(Boolean);
  if (words.length <= minWords) return text; // kam words hain, poora text dikhao
  return words.slice(0, maxWords).join(" ");
}

// Helper to truncate description to N words
const truncateWords = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const services: Service[] = [
  {
    id: "1",
    title: "Reliable Secure Services ",
    description:
      "We provide reliable and secure services, ensuring peace of mind with every solution we deliver for all clients worldwide.",
    icon: <ShieldCheck className="w-10 h-10" />,
    image:
      "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service1.jpg",
    link: "#",
  },
  {
    id: "2",
    title: "Exceptional Help Services ",
    description:
      "Dedicated to excellence in customer support and service beyond compare, offering world-class experience to every client we serve.",
    icon: <Headphones className="w-10 h-10" />,
    image:
      "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service2.jpg",
    link: "#",
  },
  {
    id: "3",
    title: "Focused Innovative Solutions ",
    description:
      "Future-driven technology solutions designed to meet evolving market demands and empower your business growth in a sustainable way.",
    icon: <Lightbulb className="w-10 h-10" />,
    image:
      "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service3.jpg",
    link: "#",
  },
  {
    id: "4",
    title: "Certified Global Expertise",
    description:
      "Equipped with all necessary global certifications and documentation to conduct business seamlessly worldwide with trusted expertise and compliance.",
    icon: <Award className="w-10 h-10" />,
    image:
      "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service4.jpg",
    link: "#",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="bg-[#EDF1F7] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative text-center p-8 "
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-700"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Blue Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-700 opacity-0 scale-75 group-hover:opacity-90 group-hover:scale-100 transition-all duration-700 flex items-center justify-center" />

              {/* Icon */}
              <div className="relative z-10 flex justify-center -mt-17">
                <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-blue-500 bg-white text-blue-700 transition-all duration-500">
                  {service.icon}
                </div>
              </div>

              {/* Default Content */}
              <div className="relative z-10 mt-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-6">
                <h4 className="text-lg font-bold text-gray-900 text-center mx-auto whitespace-nowrap">
                  {firstNWords(service.title, 6)}
                </h4>
                <p className="mt-3 text-gray-600 line-clamp-4">
                  {service.description}
                </p>

                <a
                  href={service.link}
                  className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 font-semibold transition-all duration-500 group-hover:bg-white group-hover:text-blue-600"
                >
                  Read more
                </a>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 z-10">
                <p className="mb-6 text-white">
                  {truncateWords(service.description, 18)}
                </p>
                <a
                  href={service.link}
                  className="mt-2 inline-block bg-white text-blue-600 px-6 py-2 font-semibold transition-all duration-500 hover:bg-gray-200"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
