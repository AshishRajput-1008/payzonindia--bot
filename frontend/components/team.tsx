import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Dribbble,
} from "lucide-react";

const teamMembers = [
  {
    name: "Maria Speier",
    role: "President, Principal",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Ashish Sudra",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Rachna Sheth",
    role: "Business Head",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Tapak Meni",
    role: "President, Principal",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
];

export default function VersatileBrains() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragEndX, setDragEndX] = useState(0);

  // Responsive slides per view
  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    return 4;
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
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, maxSlide]);

  // Manual navigation
  const handlePrevious = () => {
    setIsAutoPlay(false);
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
    setTimeout(() => setIsAutoPlay(true), 5000);
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
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto relative bg-white">
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative group/section max-w-7xl mx-auto">
          {/* Left Arrow */}
          {maxSlide > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 items-center justify-center z-20 opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 hidden lg:flex hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
          )}

          {/* Right Arrow */}
          {maxSlide > 0 && (
            <button
              onClick={handleNext}
              className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 items-center justify-center z-20 opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 hidden lg:flex hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          )}

          {/* Cards Container */}
          <div
            className="overflow-x-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <div className="relative rounded-2xl shadow-lg group/card cursor-pointer bg-white">
                    {/* Image */}
                    <div className="relative h-96 overflow-hidden ">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                      />

                      {/* Fixed Black Clip Path Bottom Strip */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 transition-all duration-500">
                        <div
                          className="relative h-full bg-black text-white flex flex-col items-center justify-center p-4"
                          style={{
                            clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0% 100%)",
                          }}
                        >
                          {/* Social Icons - 50% on image, 50% outside */}
                          <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 z-10">
                            <div className="p-2 bg-white flex items-center justify-center shadow-lg border-2 border-blue-600 rounded-full gap-1">
                              <div className="p-1">
                                <Facebook size={14} className="text-blue-600" />
                              </div>
                              <div className="p-1">
                                <Twitter size={14} className="text-blue-600" />
                              </div>
                              <div className="p-1">
                                <Dribbble size={14} className="text-blue-600" />
                              </div>
                            </div>
                          </div>

                          {/* Name and Role - Fixed in black */}
                          <div className="text-center z-10 relative">
                            <h3 className="font-bold text-sm leading-tight">{member.name}</h3>
                            <p className="text-xs opacity-90">{member.role}</p>
                          </div>
                        </div>

                        {/* Hover: White Overlay on Bottom Strip */}
                        <div className="absolute inset-0 bg-white text-black flex flex-col items-center justify-center p-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-20"
                          style={{
                            clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0% 100%)",
                          }}
                        >
                          <div className="text-center">
                            <h3 className="font-bold text-sm leading-tight">{member.name}</h3>
                            <p className="text-xs opacity-90">{member.role}</p>
                          </div>
                           <button className="bg-white text-blue-600 px-6 py-2.5 text-sm font-semibold rounded-md transition-colors duration-200 hover:bg-gray-100">
                            Read more
                          </button>
                        </div>
                      </div>

                      {/* Hover Overlay: Blue Clip Path from Top */}
                      <div className="absolute inset-0 bg-blue-600/80 text-white flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                        <div
                          className="absolute bottom-0 left-0 right-0 h-full"
                          style={{
                            clipPath: "polygon(0 100%, 100% 70%, 100% 0, 0 0)",
                            backgroundColor: "rgba(59, 130, 246, 0.9)",
                          }}
                        />
                        <div className="relative z-10">
                          <h3 className="text-xl font-bold mb-4">Lead the team of passionate developers, designers and strategists with a lot of thought and analysis come true!</h3>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {maxSlide > 0 && (
            <div className="flex justify-center space-x-2 mt-8">
              {[...Array(maxSlide + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsAutoPlay(false);
                    setTimeout(() => setIsAutoPlay(true), 5000);
                  }}
                  className={`transition-all duration-300 ${
                    currentSlide === index
                      ? "w-8 h-3 bg-blue-600 rounded-full"
                      : "w-3 h-3 bg-gray-400 hover:bg-gray-500 rounded-full"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}