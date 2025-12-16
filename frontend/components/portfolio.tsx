"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Shield,
  Cloud,
  Network,
  Lock,
  BarChart3,
  Search,
  ArrowRight,
  Plus,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// Define the type for portfolio items
interface PortfolioItem {
  id: number; // Added unique identifier
  title: string;
  category: string;
  image: string;
  img: string;
  description: string;
  url: string;
}

const categories = [
  "All",
  "IT Services",
  "Digital Marketing",
  "E-Commerce",
  "Fintech",
  "Media",
  "NGO & Trust",
] as const;

// Portfolio items with updated categories and URLs
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "PayzonIt Services",
    category: "IT Services",
    image: "/product-engineering-team.jpg",
    img: "/images/payzonit.png",
    description:
      "Payzon IT Services delivers innovative software development, cloud solutions, and IT consulting to empower businesses with scalable and secure digital infrastructure.",
    url: "https://www.payzonitservices.com/",
  },
  {
    id: 2,
    title: "Payzon Marketing",
    category: "Digital Marketing",
    image: "/firewall-security-technology.jpg",
    img: "/images/logo.png",
    description:
      "Payzon Marketing provides end-to-end digital marketing solutions including SEO, social media management, and online branding to help businesses grow their digital presence.",
    url: "https://www.payzonmarketing.com/",
  },
  {
    id: 3,
    title: "Payzon Shoppy",
    category: "E-Commerce",
    image: "/data-management-professionals.jpg",
    img: "/images/shoppy-logo.png",
    description:
      "Payzon Shoppy is a modern e-commerce platform offering a wide range of products with secure payments, fast delivery, and a seamless shopping experience.",
    url: "https://payzonshoppy.com/",
  },
  {
    id: 4,
    title: "Payzon API",
    category: "Fintech",
    image: "/big-data-analytics.png",
    img: "/images/logo.png",
    description:
      "Payzon API offers advanced fintech and payment gateway solutions, enabling businesses to integrate secure and scalable transaction systems with ease.",
    url: "https://www.payzonapi.com/",
  },
  {
    id: 5,
    title: "Sadaiv Satya",
    category: "Media",
    image: "/research-and-energy-technology.jpg",
    img: "/images/Sadaiv MEDIA 1.png",
    description:
      "Sadaiv Satya is a trusted digital media and news platform committed to delivering authentic, reliable, and unbiased news updates across multiple domains.",
    url: "https://www.sadaivsatya.com/",
  },
  {
    id: 6,
    title: "Sadaiv Yuva Foundation",
    category: "NGO & Trust",
    image: "/security-management-team.jpg",
    img: "/images/Sadaiv_logo.png",
    description:
      "Sadaiv Yuva Foundation is a non-profit organization dedicated to youth empowerment, education, healthcare, and social welfare initiatives across communities.",
    url: "https://www.sadaivyuvafoundation.com/",
  },
];


// Map categories to a single portfolio item
const categoryToItemMap: Record<string, PortfolioItem> = {
  "IT Services": portfolioItems[0], // PayzonIt Services
  "Digital Marketing": portfolioItems[1], // Payzon Marketing
  "E-Commerce": portfolioItems[2], // Payzon Shoppy
  Fintech: portfolioItems[3], // Payzon API
  Media: portfolioItems[4], // Sadaiv Satya
  "NGO & Trust": portfolioItems[5], // Sadaiv Yuva Foundation
};
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Determine items to display
  const filteredItems: PortfolioItem[] =
    activeCategory === "All"
      ? portfolioItems
      : categoryToItemMap[activeCategory]
      ? [categoryToItemMap[activeCategory]]
      : [];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto pt-12 text-start mb-12 grid grid-cols-1 sm:grid-cols-2">
          <div>
            <div className="text-blue-600 font-semibold mb-2 flex items-center text-2xl">
              <span className="w-8 h-0.5 bg-blue-600 mr-3"></span>
              Work Index!
              <span className="w-8 h-0.5 bg-blue-600 ml-3"></span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Few of Our Apps Adored
              <br />
              by <span className="text-blue-600">millions of users!</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl font-medium">
            We show only the best websites and portfolios built completely with
            passion, simplicity & creativity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors text-sm sm:text-base ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "text-gray-800 font-semibold hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {activeCategory === "All" ? (
          // Grid layout for "All" category
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative rounded-2xl shadow-lg group/card cursor-pointer bg-white mt-8"
                >
                  {/* Card Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />

                    {/* Default Blue Strip at bottom - diagonal cut */}
                    <div className="absolute bottom-0 left-0 right-0 transition-all duration-500 group-hover/card:-translate-y-full">
                      <div className="relative h-36">
                        <div
                          className="absolute inset-0 bg-black/80"
                          style={{
                            clipPath:
                              "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
                            zIndex: 1,
                          }}
                        />
                        <div
                          className="absolute inset-0 bg-black/10"
                          style={{
                            clipPath:
                              "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
                            zIndex: 2,
                          }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-6 z-10">
                          <h3 className="text-lg font-bold text-white leading-tight px-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-purple-400 mt-1">
                            {item.category}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay - slides up from bottom */}
                    <div className="absolute inset-0 bg-blue-600 text-white flex flex-col justify-center p-6 text-center transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-in-out">
                      <h3 className="text-xl font-bold mb-4 text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-blue-50 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex justify-center">
                        <Button
                          asChild
                          className="bg-white text-black hover:bg-blue-100 hover:text-blue-600 p-3 rounded-full transition-all duration-300"
                        >
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Plus className="w-6 h-6" strokeWidth={3} />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Single item layout for specific categories
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 border border-gray-100">
            {filteredItems.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 p-4">
                <div className="relative overflow-hidden group ">
                  {(() => {
                    return (
                      <img
                        src={filteredItems[0].img}
                        alt={filteredItems[0].title}
                        className="w-full h-64 lg:h-full object-cover transition-all "
                      />
                    );
                  })()}
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
                      {filteredItems[0].title}
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                      {filteredItems[0].description}
                    </p>
                  </div>

                  <Button
                    asChild
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group w-fit"
                  >
                    <a
                      href={filteredItems[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Visit Project</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
