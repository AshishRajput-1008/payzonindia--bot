"use client";

import Image from "next/image";

interface Company {
  id: number;
  name: string;
  logo: string;
  url: string;
  url1: string;
}

const companies: Company[] = [
  {
    id: 1,
    name: "Payzon Marketing",
    logo: "/images/logo.png",
    url: "https://www.payzonmarketing.com",
    url1: "www.payzonmarketing.com",
  },
  {
    id: 2,
    name: "Payzon IT Services",
    logo: "/images/payzonit.png",
    url: "https://www.payzonitservices.com",
    url1: "www.payzonitservices.com",
  },
  {
    id: 3,
    name: "Payzon Shoppy",
    logo: "/images/shoppy-logo.png",
    url: "https://www.payzonshoppy.com",
    url1: "www.payzonshoppy.com",
  },
  {
    id: 4,
    name: "Payzon API",
    logo: "/images/PAYZONINDIA-pngLogo.png",
    url: "https://www.payzonapi.com",
    url1: "www.payzonapi.com",
  },
];

export default function CompanySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Our Brands
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our family of innovative solutions designed to empower your business
          </p>
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company) => (
            <a
              key={company.id}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center space-y-4">
                {/* Logo Container */}
                <div className="relative w-32 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Company Name */}
                <h3 className="text-lg font-semibold text-gray-900 text-center group-hover:text-blue-600 transition-colors">
                  {company.name}
                </h3>

                {/* URL Badge */}
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 group-hover:bg-white rounded-full transition-colors">
                  <svg 
                    className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
                    {company.url1}
                  </span>
                </div>

                {/* Visit Arrow Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg 
                    className="w-5 h-5 text-blue-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}