import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "API Development",
    role: "Seamless Integration Solutions",
    hoverName: "Connect With Us",
    hoverRole: "Get IT Solutions",
    image:
      "/images/21.webp",
    description:
      "Custom API development for secure, scalable, and efficient integration across platforms and services.",
  },
  {
    name: "Web Hosting",
    role: "Reliable Performance & Security",
    hoverName: "Digital Marketing",
    hoverRole: "Grow Your Brand",
    image:
      "/images/21.webp",
    description:
      "High-performance web hosting with 99.9% uptime, SSL certificates, and enterprise-grade security.",
  },
  {
    name: "KYC Verification",
    role: "Identity & Compliance Solutions",
    hoverName: "Business Solutions",
    hoverRole: "Expert Consultation",
    image:
      "/images/23.jpeg",
    description:
      "Advanced KYC verification systems ensuring regulatory compliance and secure user authentication.",
  },
  {
    name: "E-Commerce Portal",
    role: "Complete Online Store Solutions",
    hoverName: "Technology Leader",
    hoverRole: "Innovation Expert",
    image:
      "/images/24.png",
    description:
      "Full-stack e-commerce portals with payment integration, inventory management, and customer analytics.",
  },
  {
    name: "Cyber Security",
    role: "Advanced Threat Protection",
    hoverName: "Strategic Planning",
    hoverRole: "Business Growth",
    image:
      "/images/25.jpg",
    description:
      "Comprehensive cyber security solutions including penetration testing, firewall management, and data encryption.",
  },
  {
    name: "B2B Portal",
    role: "Enterprise Collaboration Platform",
    hoverName: "Project Management",
    hoverRole: "Delivery Excellence",
    image:
      "/images/26.jpeg",
    description:
      "Robust B2B portals for seamless business-to-business interactions, order management, and supply chain integration.",
  },
];

export default function ITSolutionsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragEndX, setDragEndX] = useState(0);

  // Responsive slides per view
  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = Math.max(0, teamMembers.length - slidesPerView);

  // Auto-play
  useEffect(() => {
    if (isAutoPlay && maxSlide > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, maxSlide]);

  // Manual navigation
  const handlePrevious = () => {
    setIsAutoPlay(false);
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  // Touch swipe
  const handleTouchStart = (e) => {
    setDragStartX(e.touches[0].clientX);
    setIsAutoPlay(false);
  };

  const handleTouchMove = (e) => {
    setDragEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const dragDistance = dragStartX - dragEndX;
    const threshold = 50;
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0 && currentSlide < maxSlide) {
        setCurrentSlide((prev) => prev + 1);
      } else if (dragDistance < 0 && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      }
    }
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <section className="py-12 relative min-h-screen ">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(/images/bg-section-blog.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-12 sm:mb-16">
          <div className="text-blue-600 font-semibold mb-4 flex items-center justify-center text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-blue-600"></div>
              <div className="w-3 h-0.5 bg-blue-600"></div>
            </div>
            <span className="mx-4 tracking-wider uppercase">
              IT Solutions & Services
            </span>
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-blue-600"></div>
              <div className="w-6 h-0.5 bg-blue-600"></div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Comprehensive IT Solutions <br />
            For Modern Business Needs
          </h2>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative group/section max-w-7xl mx-auto">
            {/* Left Arrow */}
            {maxSlide > 0 && (
              <button
                onClick={handlePrevious}
                className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-500 text-gray-600 hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-20 group hover:bg-gray-50"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
            )}

            {/* Right Arrow */}
            {maxSlide > 0 && (
              <button
                onClick={handleNext}
                className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-500 text-gray-600 hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-20 group hover:bg-gray-50"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            )}

            {/* Cards Container */}
            <div
              className=""
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentSlide * (100 / slidesPerView)
                  }%)`,
                }}
              >
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="px-4"
                    style={{ width: `${100 / slidesPerView}%` }}
                  >
                    <div className="relative group/card cursor-pointer bg-white rounded-lg shadow-lg ">
                      <div className="relative h-80 w-80">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                        />

                        {/* Black Clip-path (Default State) */}
                        <div
                          className="absolute -mt-20 right-0 w-[90%] h-32 flex justify-center items-center mr-3.5 bg-white shadow-2xl transition-all duration-500 ease-in-out group-hover/card:translate-y-16 group-hover/card:opacity-0"
                          style={{
                            clipPath:
                              "polygon(0 11%, 100% 0, 100% 100%, 25% 100%, 0 100%)",
                          }}
                        >
                          <div className="flex flex-col justify-center items-center px-4 text-center">
                            <span className="text-black font-bold text-lg mb-1">
                              {member.name}
                            </span>
                            <p className="text-gray-700 text-sm">
                              {member.role}
                            </p>
                          </div>
                        </div>

                        {/* Blue Clip-path (Hover State) */}
                        <div
                          className="absolute -mt-32 right-0 w-[90%] h-44 flex justify-center items-center mr-3.5 bg-blue-500 shadow-lg transition-all duration-500 ease-in-out translate-y-16 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100"
                          style={{
                            clipPath:
                              "polygon(0 11%, 100% 0, 100% 100%, 25% 100%, 0 100%)",
                          }}
                        >
                          <div className="flex flex-col justify-center items-center px-4 text-center">
                            <p className="text-white text-base font-bold opacity-90 mb-2">
                              {member.name}
                            </p>
                            <span className="text-white text-sm opacity-90">
                              {member.description}
                            </span>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots with Numbers */}
            {maxSlide > 0 && (
              <div className="flex justify-center items-center  gap-3 relative z-10 mt-20">
                {[...Array(maxSlide)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsAutoPlay(false);
                      setTimeout(() => setIsAutoPlay(true), 10000);
                    }}
                    className={`transition-all duration-300 relative group ${
                      currentSlide === index
                        ? "w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                        : "w-3 h-3 bg-gray-300 hover:bg-blue-400 rounded-full"
                    }`}
                  >
                    {currentSlide === index && (
                      <span className="text-white font-bold relative z-10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
