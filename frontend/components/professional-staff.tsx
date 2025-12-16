"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  Database,
  Sparkles,
  ChevronRight,
  Rocket,
  ShoppingCart,
  CreditCard,
} from "lucide-react";
import MarqueeDemo from "./marquee";

interface Slide {
  image: string;
  category: string;
  title: string;
  description: string;
  bgColor: string;
  accentColor: string;
  stats: { number: string; label: string };
}

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  gradient: string;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function PayzonIndiaHero() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeService, setActiveService] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  const slides: Slide[] = [
    {
      image: "/images/it.jpg",
      category: "IT Services",
      title: "Innovative IT Solutions by Payzon India",
      description:
        "Payzon India delivers scalable IT infrastructure, custom software, and secure cloud solutions that help businesses streamline operations, reduce costs, and drive digital growth.",
      bgColor: "from-black/90 via-black/20",
      accentColor: "blue",
      stats: { number: "600+", label: "Projects Delivered" },
    },
    {
      image: "/images/digital-marketing.jpg",
      category: "Digital Marketing",
      title: "Digital Marketing Strategies",
      description:
        "Boost your brand visibility with Payzon India's SEO, social media campaigns, and digital marketing solutions designed to maximize ROI and online presence.",
      bgColor: "from-black/90 via-black/20",
      accentColor: "blue",
      stats: { number: "200+", label: "Campaigns Launched" },
    },
    {
      image: "/images/e-commerce.webp",
      category: "E-Commerce",
      title: "Nationwide Dropshipping Solutions",
      description:
        "Payzon India delivers scalable e-commerce platforms designed to boost sales, improve customer journeys, and enable hassle-free nationwide dropshipping.",
      bgColor: "from-black/90 via-black/20",
      accentColor: "blue",
      stats: { number: "99.8%", label: "Uptime Guaranteed" },
    },
    {
      image: "/images/fin.jpg",
      category: "Fintech Solutions",
      title: "Secure Fintech Innovations",
      description:
        "Providing advanced fintech solutions with secure payment systems, compliance-driven platforms, and analytics to empower financial institutions.",
      bgColor: "from-black/90 via-black/20",
      accentColor: "blue",
      stats: { number: "50+", label: "Financial Institutions Served" },
    },
  ];

  const services: Service[] = [
    {
      title: "IT Services",
      description:
        "Providing scalable IT infrastructure, enterprise software solutions, and cloud services to optimize your business operations efficiently.",
      icon: <Zap className="w-6 h-6 md:w-7 md:h-7" />,
      color: "from-blue-500 to-indigo-500",
      gradient: "from-blue-50 to-indigo-50",
    },
    {
      title: "Digital Marketing",
      description:
        "Enhancing online presence, boosting brand visibility, and driving leads through SEO, social media, and data-driven campaigns.",
      icon: <Database className="w-6 h-6 md:w-7 md:h-7" />,
      color: "from-purple-500 to-violet-500",
      gradient: "from-purple-50 to-violet-50",
    },
    {
      title: "E-Commerce",
      description:
        "Building secure, scalable, and user-friendly online stores with seamless payment integration and optimized shopping experiences.",
      icon: <ShoppingCart className="w-6 h-6 md:w-7 md:h-7" />,
      color: "from-green-500 to-emerald-500",
      gradient: "from-green-50 to-emerald-50",
    },
    {
      title: "Fintech Solutions",
      description:
        "Delivering secure fintech platforms for digital payments, lending, and financial management with compliance and scalability in mind.",
      icon: <CreditCard className="w-6 h-6 md:w-7 md:h-7" />,
      color: "from-orange-500 to-pink-500",
      gradient: "from-orange-50 to-pink-50",
    },
  ];

  const renderTitle = (title: string) => {
    const words = title.split(" ");
    if (words.length > 3) {
      return (
        <>
          {words.slice(0, 3).join(" ")}
          <br />
          {words.slice(3).join(" ")}
        </>
      );
    }
    return title;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      slides.forEach((slide) => {
        const img = new window.Image();
        img.src = slide.image;
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      if (!isTouchDevice) {
        let timeoutId: NodeJS.Timeout;
        const handleMouseMove = (e: MouseEvent) => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            setMousePosition({
              x: (e.clientX / window.innerWidth) * 100,
              y: (e.clientY / window.innerHeight) * 100,
            });
          }, 16);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
          clearTimeout(timeoutId);
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setIsVisible(true);
        },
        { threshold: 0.1 }
      );
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      };
    }
  }, []);

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000); // Auto-slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, slides.length]);

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(serviceInterval);
  }, [services.length]);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      const distance = touchStart - touchEnd;
      if (Math.abs(distance) > 50) {
        setIsAutoPlay(false);
        if (distance > 0) setActiveSlide((prev) => (prev + 1) % slides.length);
        else
          setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setTimeout(() => setIsAutoPlay(true), 10000);
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen  relative overflow-hidden "
    >
      {/* Mouse background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-40 transition-all duration-500 hidden md:block" />
      </div>

      <div className="relative z-10 bg-[#EDF1F7] ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start py-8 sm:py-12 md:py-16 lg:py-20  ">
          {/* Carousel */}
          <div
            className={`lg:col-span-6 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative group">
              <div className="relative overflow-hidden border-2 border-gradient-to-r from-blue-500/50 to-blue-700/50">
                <Image
                  src={slides[activeSlide].image}
                  alt={slides[activeSlide].title}
                  width={1200}
                  height={600}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105 will-change-transform"
                  style={{ imageRendering: "auto" }}
                  priority={activeSlide === 0}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${slides[activeSlide].bgColor} to-transparent opacity-70 transition-opacity duration-500`}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white z-20 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md rounded-full px-3 sm:px-4 py-1 sm:py-2 border border-blue-400/30 mb-3 sm:mb-4">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse text-blue-400" />
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {slides[activeSlide].category}
                    </span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent leading-tight">
                    {renderTitle(slides[activeSlide].title)}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-6 max-w-md leading-relaxed">
                    {slides[activeSlide].description}
                  </p>
                </div>
              </div>

              {/* Dot navigation */}
              <div className="absolute bottom-0 right-0 bg-blue-700/70 p-4 sm:p-6 shadow-2xl border border-blue-400/30 backdrop-blur-xl z-30">
                <div className="flex flex-row sm:flex-col items-center space-x-4 sm:space-x-0 sm:space-y-4">
                  <div className="relative">
                    {isAutoPlay && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl sm:rounded-2xl animate-ping opacity-20" />
                    )}
                  </div>
                  <div className="flex space-x-2 sm:space-x-0 sm:flex-col sm:space-y-4">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm font-black transition-all duration-300 ease-out ${
                          activeSlide === index
                            ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-2xl scale-110 shadow-blue-500/50"
                            : "bg-gray-200 text-black hover:bg-blue-100 hover:scale-105"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      >
                        <span className="relative z-10">{index + 1}</span>
                        {activeSlide === index && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg sm:rounded-xl animate-pulse opacity-40" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div
            className={`lg:col-span-6 space-y-6 transform transition-all duration-1000 ease-out delay-300 px-4 py-4 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div>
              <div className="flex items-center space-x-2 sm:space-x-3 ">
                <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full" />
                <div className="flex items-center space-x-2 text-blue-600 font-bold text-sm sm:text-xl">
                  <Rocket className="w-4 h-4 sm:w-8 sm:h-8 animate-pulse" />
                  <span>Payzon India Empowering Digital Ventures</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-black text-black leading-tight mt-4">
                Innovative Solutions Empowering Business Growth
              </h2>
              <button className="px-4 sm:px-6 mt-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-bold text-sm sm:text-base hover:scale-105 transition-transform duration-300 ease-out">
                Get Started with Payzon India
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl p-2 transition-all duration-300 cursor-pointer flex flex-col justify-between`}
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  <div className="relative z-10 flex flex-col justify-center gap-4">
                    <div className="flex gap-2 items-center">
                      <div
                        className={`w-14 h-14 rounded-full border-2 border-blue-600 flex items-center justify-center group-hover:scale-100 group-hover:animate-bounce transition-transform duration-300`}
                      >
                        <span className="text-xl text-blue-600">
                          {service.icon}
                        </span>
                      </div>
                      <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h4>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 group-hover:text-gray-800 transition-colors">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        img {
          will-change: transform;
          image-rendering: auto;
        }
        .group:hover img {
          transform: scale(1.05);
        }
        section {
          scroll-behavior: smooth;
        }
        @media (max-width: 640px) {
          .animate-float {
            animation-duration: 6s;
          }
        }
      `}</style>
    </section>
  );
}
