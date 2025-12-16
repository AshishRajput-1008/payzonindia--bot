import { useState, useEffect } from "react";
import {
  Shield,
  Phone,
  Users,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Megaphone,
  ShoppingCart,
  FileText,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield, // PR Services → Shield for protection/reputation
    title: "PR Services",
    description:
      "At Payzon India, we craft powerful PR campaigns that build trust, manage reputation, and connect your brand with the right media networks for long-term visibility.",
    image:
      "https://evolutionpr.co.za/wp-content/uploads/2020/07/pr-word-cloud-2.jpg",
  },
  {
    icon: Monitor, // Brand Promotion → Monitor for digital campaigns/online presence
    title: "Brand Promotion",
    description:
      "Payzon India helps your brand grow with targeted digital promotions, creative strategies, and engaging content that amplify your presence across multiple platforms.",
    image:
      "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063170.jpg?semt=ais_hybrid&w=740",
  },
  {
    icon: Megaphone, // Lead Generation → Megaphone for announcing/calling leads
    title: "Lead Generation",
    description:
      "Our team at Payzon India drives qualified leads to your business using SEO, paid ads, and personalized campaigns that strengthen your sales pipeline.",
    image:
      "https://stylevanity.com/wp-content/uploads/2022/07/ecommerce-lead-generation-8.jpg",
  },
  {
    icon: ShoppingCart, // Dropshipping → ShoppingCart for e-commerce fulfillment
    title: "Dropshipping",
    description:
      "Payzon India simplifies your e-commerce journey with dropshipping solutions, ensuring smooth order fulfillment, supplier coordination, and growth-driven strategies.",
    image:
      "https://www.hostinger.com/in/tutorials/wp-content/uploads/sites/52/2021/11/how-to-start-dropshipping-business.png",
  },
  {
    icon: FileText, // D-U-N-S® Registration → FileText for official/business documents
    title: "D-U-N-S® Registration",
    description:
      "We assist businesses in securing their D-U-N-S® registration through Payzon India, boosting global credibility and unlocking new business partnerships worldwide.",
    image: "/images/Gemini_Generated_Image_1dbfna1dbfna1dbf.png",
  },
  {
    icon: CheckCircle, // Meta Verification → CheckCircle for verified/authentic
    title: "Meta Verification",
    description:
      "With Payzon India, get your social profiles Meta verified to build authenticity, increase trust, and stand out on Facebook and Instagram with a verified badge.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&fit=crop",
  },
];

export default function Services() {
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

  const maxSlide = Math.max(0, services.length - slidesPerView);

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
    const threshold = 50; // Minimum distance to trigger swipe
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0 && currentSlide < maxSlide) {
        setCurrentSlide((prev) => prev + 1); // Swipe right
      } else if (dragDistance < 0 && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1); // Swipe left
      }
    }
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  return (
    <section className="bg-gray-100">
      <section
        className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto relative"
        // Removed overflow-hidden to allow touch events
      >
        <div className="px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-blue-600 font-semibold mb-4 flex items-center justify-center text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-blue-600"></div>
                <div className="w-3 h-0.5 bg-blue-600"></div>
              </div>
              <span className="mx-4 tracking-wider uppercase">
                Digital Marketing Services
              </span>
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-blue-600"></div>
                <div className="w-6 h-0.5 bg-blue-600"></div>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Grow Your Brand Online <br />
              With Targeted Digital Marketing
            </h2>
          </div>

          <div className="relative group/section max-w-7xl mx-auto">
            {/* Left Arrow - appears on section hover */}
            {maxSlide > 0 && (
              <button
                onClick={handlePrevious}
                className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 items-center justify-center z-20 opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 hidden lg:flex hover:bg-gray-50"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
            )}

            {/* Right Arrow - appears on section hover */}
            {maxSlide > 0 && (
              <button
                onClick={handleNext}
                className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 items-center justify-center z-20 opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 hidden lg:flex hover:bg-gray-50"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            )}

            {/* Services Cards Container */}
            <div
              className="overflow-x-hidden" // Changed to overflow-x-hidden to allow vertical scrolling if needed
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${
                    currentSlide * (100 / slidesPerView)
                  }%)`,
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / slidesPerView}%` }}
                  >
                    {/* Card with extra top padding for icon */}
                    <div className="relative rounded-2xl  group/card cursor-pointer bg-white mt-8">
                      {/* Service Image */}
                      <div className="relative h-80 overflow-hidden ">
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                        />

                        {/* Default Blue Strip at bottom - diagonal cut */}
                        <div className="absolute bottom-0 left-0 right-0 transition-all duration-500 group-hover/card:-translate-y-full">
                          {/* Blue background wrapper */}
                          <div className="relative h-32">
                            {/* Before pseudo - top diagonal */}
                            <div
                              className="absolute inset-0 bg-blue-600/80"
                              style={{
                                clipPath:
                                  "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
                                zIndex: 1,
                              }}
                            />
                            {/* After pseudo - can be used for shadow or overlay if needed */}
                            <div
                              className="absolute inset-0 bg-blue-700/10"
                              style={{
                                clipPath:
                                  "polygon(0 30%, 100% 0%, 100% 100%, 0% 100%)",
                                zIndex: 2,
                              }}
                            />

                            {/* Icon */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-blue-600">
                                <service.icon className="w-7 h-7 text-blue-600" />
                              </div>
                            </div>

                            {/* Title */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-6 z-10">
                              <h3 className="text-lg font-bold text-white leading-tight px-2">
                                {service.title}
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Hover Overlay - slides up from bottom */}
                        <div className="absolute inset-0 bg-blue-600 text-white flex flex-col justify-center p-6 text-center transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-in-out">
                          <h3 className="text-xl font-bold mb-4 text-white">
                            {service.title}
                          </h3>
                          <p className="text-sm text-blue-50 mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex justify-center">
                            <button className="bg-[#7d70ff] text-white px-6 py-2.5 text-sm font-semibold transition-colors duration-200 shadow-md">
                              Read more
                            </button>
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
    </section>
  );
}
