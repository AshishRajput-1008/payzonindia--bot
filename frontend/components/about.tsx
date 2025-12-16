import React, { useState, useEffect } from "react";
import {
  Play,
  Award,
  Users,
  Shield,
  Lightbulb,
  Sparkles,
} from "lucide-react";

// Define types for tab content
interface TabContent {
  text: string;
  icon: JSX.Element;
  color: string;
  bgColor: string;
}

interface TabContentMap {
  mission: TabContent;
  vision: TabContent;
  value: TabContent;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function About() {
  const [activeTab, setActiveTab] = useState<keyof TabContentMap>("mission");
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  // Disable mouse movement on touch devices
  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const tabContent: TabContentMap = {
    mission: {
      text: '"Our mission is to empower businesses with innovative IT, fintech, and e-commerce solutions, ensuring growth, digital safety, and sustainable development across industries"',
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    vision: {
      text: '"We envision a secure, prosperous digital world through cutting-edge API solutions, e-commerce platforms, and social initiatives, driving innovation and global impact."',
      icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
    },
    value: {
      text: "As a dynamic group from Central India, we deliver tailored solutions in IT, fintech, e-commerce, cyber security, and social welfare, promoting resilience, trust, and global competitiveness.",
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
  };

  // Swipe support for tabs
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      const distance = touchStart - touchEnd;
      const isSwipe = Math.abs(distance) > 50;
      if (isSwipe) {
        const tabKeys = Object.keys(tabContent) as (keyof TabContentMap)[];
        const currentIndex = tabKeys.indexOf(activeTab);
        if (distance > 0 && currentIndex < tabKeys.length - 1) {
          setActiveTab(tabKeys[currentIndex + 1]);
        } else if (distance < 0 && currentIndex > 0) {
          setActiveTab(tabKeys[currentIndex - 1]);
        }
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="min-h-screen py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start px-4 sm:px-0">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Header */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex items-center space-x-2 sm:space-x-3 group">
                <div className="w-8 sm:w-10 md:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-10 sm:group-hover:w-12 md:group-hover:w-16 transition-all duration-300"></div>
                <span className="text-blue-600 font-semibold text-xs sm:text-sm tracking-widest uppercase flex items-center space-x-1 sm:space-x-2">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Versatile Solutions For Every Sector</span>
                  <span className="sm:hidden">Versatile Solutions</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
                Emerging{" "}
                <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                  Corporate
                </span>{" "}
                <br />
                From Central India{" "}
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Payzon India, a dynamic group from Central India, excels in IT
                services, fintech APIs, e-commerce platforms, digital marketing,
                cyber security, and social welfare. Since 2009, we've empowered
                businesses and communities globally with secure, scalable, and
                innovative solutions across industries like organic farming,
                toys, artificial jewellery, and more.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-300">
              <div
                className="flex space-x-2 sm:space-x-4 md:space-x-6 overflow-x-auto scrollbar-hide pb-2"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {Object.entries(tabContent).map(([key, content]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as keyof TabContentMap)}
                    className={`pb-2 sm:pb-3 px-1 sm:px-2 border-b-2 font-semibold transition-all duration-300 whitespace-nowrap flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm md:text-base ${
                      activeTab === key
                        ? "text-blue-600 border-blue-500"
                        : "text-gray-600 border-transparent hover:text-gray-800 hover:border-gray-400"
                    }`}
                    aria-label={`View ${key} details`}
                  >
                    <span
                      className={`transition-all duration-300 ${
                        activeTab === key
                          ? "text-blue-600 scale-110"
                          : "text-gray-500 group-hover:text-blue-500"
                      }`}
                    >
                      {content.icon}
                    </span>
                    <span className="capitalize">Our {key}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border border-gray-300 transition-all duration-300 bg-white shadow-sm">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r ${tabContent[activeTab].color} p-1.5 sm:p-2 flex items-center justify-center shadow-lg flex-shrink-0`}
                >
                  <span className="text-white">
                    {tabContent[activeTab].icon}
                  </span>
                </div>
                <p className="text-gray-800 leading-relaxed font-semibold text-xs sm:text-sm md:text-base flex-1">
                  {tabContent[activeTab].text}
                </p>
              </div>
            </div>

            {/* Enhanced Button */}
            <div className="flex items-center">
              <div className="relative group cursor-pointer w-full sm:w-auto">
                <a href="https://www.youtube.com/channel/UCSjsk1O7zYurXPDl2o3RuIA" target="_blank" rel="noopener noreferrer">
                  <div className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white pl-3 sm:pl-4 md:pl-6 pr-8 sm:pr-10 md:pr-12 py-2 sm:py-3 md:py-4 lg:py-5  hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-1 sm:space-x-2 relative ">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="font-semibold text-xs sm:text-sm md:text-base tracking-wide relative z-10">
                      Explore Payzon India Group
                    </span>
                    <div className="absolute -right-1 sm:-right-2 md:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-17 lg:w-17 bg-white rounded-full flex items-center justify-center ">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center">
                        <Play
                          className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-7 lg:h-7 text-black ml-0.5"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Visual */}
          <div className="relative order-2 lg:order-2 flex flex-col items-center mt-20   sm:mt-40">
            {/* Main Image Container */}
            <div className="relative w-full flex justify-center items-center mb-6 sm:mb-8 md:mb-12 lg:mb-0">
              {/* Blue Circle Background - Responsive */}
              <div className="absolute w-48 h-48 xs:w-56 xs:h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] rounded-full border-12 xs:border-12 sm:border-[20px] md:border-[30px] lg:border-[40px] xl:border-[50px] border-blue-600 animate-bounce opacity-80"></div>

              {/* Top Left Badge - Responsive positioning */}
              <div className="absolute -top-8 xs:-top-10 sm:-top-16 md:-top-20 lg:-top-24 xl:-top-28 -left-1 xs:-left-2 sm:-left-4 md:-left-6 bg-blue-600 text-white px-2 xs:px-3 sm:px-4 md:px-6 py-2 xs:py-3 sm:py-4 md:py-6 rounded-sm shadow-lg flex flex-col items-center text-center z-20">
                <div className="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black uppercase tracking-widest">
                  From
                </div>
                <div className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                  2009
                </div>
                <div className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wide">
                  Serving Globally
                </div>
              </div>

              {/* Image - Responsive sizing */}
              <div className="relative z-10">
                <img
                  src="/images/1111.png"
                  alt="Payzon India Team"
                  className="w-60 xs:w-48 sm:w-72 md:w-80 lg:w-96 xl:w-[450px] 2xl:w-[500px] h-auto object-cover -mt-4 xs:-mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12 "
                />
              </div>
            </div>

            {/* Bottom Card - Mobile: Below image, Desktop: Absolute positioned */}
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:absolute lg:-bottom-16 xl:-bottom-20 2xl:-bottom-24 lg:left-1/2 lg:-translate-x-1/2 lg:max-w-md xl:max-w-lg 2xl:max-w-xl bg-white px-3 xs:px-4 sm:px-5 md:px-6 py-3 xs:py-4 sm:py-5 md:py-6 rounded-lg sm:rounded-xl lg:rounded-tr-lg lg:rounded-tl-lg shadow-lg sm:shadow-xl lg:shadow-2xl border border-gray-100 z-30">
              <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                <div className="p-1.5 xs:p-2 sm:p-2.5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl flex-shrink-0">
                  <Award className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-xs xs:text-sm sm:text-base md:text-lg leading-tight">
                    Empowering Businesses Across Sectors
                  </h4>
                  <p className="text-gray-600 text-[10px] xs:text-xs sm:text-sm md:text-base leading-relaxed">
                    Delivering secure IT services, innovative fintech
                    solutions, scalable e-commerce platforms, and robust
                    cybersecurity — all supported 24/7 for your growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes ping {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
          }
        }
        @media (min-width: 640px) {
          @keyframes bounce {
            0%,
            100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-12px) scale(1.02);
            }
          }
        }
        @media (min-width: 1024px) {
          @keyframes bounce {
            0%,
            100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-20px) scale(1.02);
            }
          }
        }
        .animate-ping {
          animation: ping 2s infinite;
        }
        .animate-bounce {
          animation: bounce 3s infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        img {
          will-change: transform;
        }
        /* Extra small devices */
        @media (max-width: 480px) {
          .animate-bounce {
            animation-duration: 4s;
          }
        }
        
        /* Custom breakpoint for very small devices */
        @media (min-width: 375px) {
          .xs\\:w-48 { width: 12rem; }
          .xs\\:h-48 { height: 12rem; }
          .xs\\:w-56 { width: 14rem; }
          .xs\\:h-56 { height: 14rem; }
          .xs\\:border-12 { border-width: 12px; }
          .xs\\:-top-10 { top: -2.5rem; }
          .xs\\:-left-2 { left: -0.5rem; }
          .xs\\:px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
          .xs\\:py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
          .xs\\:text-sm { font-size: 0.875rem; }
          .xs\\:text-xl { font-size: 1.25rem; }
          .xs\\:text-\\[10px\\] { font-size: 10px; }
          .xs\\:w-4 { width: 1rem; }
          .xs\\:h-4 { height: 1rem; }
          .xs\\:p-2 { padding: 0.5rem; }
          .xs\\:text-xs { font-size: 0.75rem; }
          .xs\\:-mt-6 { margin-top: -1.5rem; }
          .xs\\:px-4 { padding-left: 1rem; padding-right: 1rem; }
          .xs\\:py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        }
      `}</style>
    </section>
  );
}