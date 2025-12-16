"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus, Phone } from "lucide-react";
import ServiceCard from "./ServiceCard";

// Define the type for portfolio items
interface PortfolioItem {
  id: number;
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

const portfolioItems: PortfolioItem[] = [
  {
    id: 3,
    title: "Sadaiv Yuva Foundation",
    category: "NGO & Trust",
    image: "/security-management-team.jpg",
    img: "/images/sadaiv.png",
    description:
      "Comprehensive security management to safeguard your critical digital assets from evolving cyber threats effectively.",
    url: "/images/Sadaiv_logo.png",
  },
  {
    id: 4,
    title: "Sadaiv Satya Media & Broadcasting Pvt Ltd",
    category: "Media",
    image: "/research-and-energy-technology.jpg",
    img: "/images/satya.png",
    description:
      "Cutting-edge research and energy solutions powered by robust networking infrastructure.",
    url: "https://www.sadaivsatya.com/",
  },
  {
    id: 5,
    title: "Smart Tax Idea",
    category: "Fintech / Legal",
    image: "/big-data-analytics.png",
    img: "/images/smart (1).png",
    description:
      "Harness the power of big data with advanced analytics to drive business insights, optimize decision-making, enhance efficiency, and foster sustainable growth.",
    url: "https://www.payzonapi.com/",
  },
  {
    id: 6,
    title: "Ineffable Spark",
    category: "E-Learning / Certification",
    image: "/data-management-professionals.jpg",
    img: "/images/smart (2).png",
    description:
      "Ineffable Spark offers practical banking training, certifications, mock tests, and soft skills, preparing graduates for compliant, industry-ready careers.",
    url: "https://payzonshoppy.com/",

    // Added fields
  },
];

const categoryToItemMap: Record<string, PortfolioItem> = {
  "IT Services": portfolioItems[0],
  "Digital Marketing": portfolioItems[1],
  "E-Commerce": portfolioItems[2],
  Fintech: portfolioItems[5],
  Media: portfolioItems[4],
  "NGO & Trust": portfolioItems[3],
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredItems: PortfolioItem[] =
    activeCategory === "All"
      ? portfolioItems
      : categoryToItemMap[activeCategory]
      ? [categoryToItemMap[activeCategory]]
      : [];

  return (
    <section
      className="relative py-6 sm:py-8 md:py-12 lg:py-16"
      style={{
        backgroundImage: "url(/images/bg-section-blog.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-6xl mx-auto pt-8 text-start mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <div className="text-blue-600 font-semibold mb-2 flex items-center text-xl">
              <span className="w-6 h-0.5 bg-blue-600 mr-3"></span>
              Online Versatility
              <span className="w-6 h-0.5 bg-blue-600 ml-3"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Showcasing <span className="text-blue-600">Innovation</span>{" "}
              <br />
              Across Industries & Communities
            </h2>
          </div>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto">
  From digital platforms to real-world solutions, our work highlights online versatility and showcases 
  innovation that inspires industries and empowers communities.
</p>

        </div>

        {/* Categories (optional) */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-full font-medium transition-colors text-sm sm:text-base ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "text-gray-800 font-semibold hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Cards */}
        {activeCategory === "All" ? (
          <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <ServiceCard
                key={item.id}
                image={item.img}
                title={item.title}
                description={item.description}
                url={item.url}
                icon={<Phone className="w-6 h-6" />}
              />
            ))}
          </div>
        ) : (
          <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4">
            {filteredItems.length > 0 && (
              <ServiceCard
                image={filteredItems[0].img}
                title={filteredItems[0].title}
                description={filteredItems[0].description}
                url={filteredItems[0].url}
                icon={<Phone className="w-6 h-6" />}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
