import { Users, Trophy, Briefcase, Star } from "lucide-react";
import Image from "next/image";

const stats = [
   {
      id: 1,
      image: "/images/payzonit.png",
      title: "IT Services",
      link: "www.payzonitservices.com",
    },
    {
      id: 2,
      image: "/images/PAYZONINDIA-pngLogo.png",
      title: "Cyber Security",
      link: "www.payzonmarketing.com",
    },
    {
      id: 3,
      image: "/images/logo.png",
      title: "Skills Development",
      link: "www.payzonapi.com",
    },
    {
      id: 4,
      image: "/images/shoppy-logo.png",
      title: "Organic Farming",
      link: "www.payzonshoppy.com",
    },
   
   
];

export default function Stats() {
  return (
    <section className="max-w-6xl mx-auto relative ct-section-counter1">
      {/* Background Section */}
      <div
        className="py-8 relative "
        style={{
          backgroundImage: 'url(/images/bg-counter1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Simulating ::before */}
        <div
          className="absolute"
          style={{
            content: "''", // required in CSS but here optional
            height: '17px',
            backgroundColor: '#cacfd6', // replace with gray if needed
            bottom: '-17px',
            left: '32px',
            right: '32px',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex items-center justify-center mb-4">
                  <Image src={stat.image} alt={stat.title} width={100} height={100} className="mx-auto" />
                  {/* <span className="text-4xl font-bold">{stat.number}</span> */}
                </div>
                <p className="text-gray-300 text-xl font-black">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
