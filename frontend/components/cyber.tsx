"use client";

import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

export default function CyberSecurityUI() {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at first actual slide
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slides = [
    {
      title: "Digital Fraud protection",
      image:
        "https://static.wixstatic.com/media/b66f46_ea4eeeaf9d1f46f79323af580c36ecbd~mv2.jpeg",
    },
    {
      title: "2FA Authentication",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/070/629/028/small_2x/two-factor-authentication-man-using-laptop-and-smartphone-for-secure-verification-code-access-technology-concept-photo.jpeg",
    },
    {
      title: "Auto Backup Services",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQFAWFDlj-0ESA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1684295891988?e=2147483647&v=beta&t=CfCmVpKCDrac-TzcJxVW1fXja7_kLurz-llf1yTHFhU",
    },
    {
      title: "E-Kyc Verification",
      image:
        "https://www.1kosmos.com/wp-content/uploads/understanding-ekyc-ft.webp",
    },
  ];

  const slideWidth = 208; // Card width (192px) + margin (16px)
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const totalSlides = slides.length;
  const extendedSlides = [
    ...slides.slice(-1), // Clone last slide at the start
    ...slides,
    ...slides.slice(0, 1), // Clone first slide at the end
  ];

  // Auto slide
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const startAutoplay = () => {
    if (isDragging) return;
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  // Handle seamless loop
  useEffect(() => {
    if (!sliderRef.current || isDragging) return;

    if (currentSlide === totalSlides + 1) {
      // Reached cloned first slide at the end
      setIsTransitioning(false);
      setCurrentSlide(1); // Jump to first actual slide
    } else if (currentSlide === 0) {
      // Reached cloned last slide at the start
      setIsTransitioning(false);
      setCurrentSlide(totalSlides); // Jump to last actual slide
    } else {
      setIsTransitioning(true);
    }
  }, [currentSlide, isDragging, totalSlides]);

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    stopAutoplay();
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (touchStartX.current === null || touchEndX.current === null) {
      startAutoplay();
      return;
    }

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left - next slide
        setCurrentSlide((prev) => prev + 1);
      } else {
        // Swipe right - previous slide
        setCurrentSlide((prev) => prev - 1);
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => startAutoplay(), 100);
  };

  // Mouse events for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    stopAutoplay();
    touchStartX.current = e.clientX;
    touchEndX.current = null;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (touchStartX.current === null || touchEndX.current === null) {
      startAutoplay();
      return;
    }

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setCurrentSlide((prev) => prev + 1);
      } else {
        setCurrentSlide((prev) => prev - 1);
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => startAutoplay(), 100);
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background with team image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/team-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-start w-full max-w-6xl">
          {/* Left white card */}
          <div className="bg-white py-8 sm:py-12 lg:py-16 pl-6 sm:pl-8 lg:pl-12 pr-8 sm:pr-12 lg:pr-24 w-full lg:w-[550px] shadow-2xl relative z-20 mb-6 lg:mb-0">
            <div className="mb-4">
              <span className="text-blue-700 text-sm sm:text-base font-semibold uppercase tracking-wider">
                CYBER SHIELD FOR CORPORATES
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Legal Support & Awareness in Digital Cyber Crimes
            </h1>

            <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
              Specializes in combating cyber fraud and providing robust
              protection against digital crimes. With consultancy and expert
              solutions, we safeguard businesses and corporates from online
              threats, ensuring a secure digital environment.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 sm:w-6 h-5 sm:h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  We offer data security and cyber services for companies &
                  businesses
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 sm:w-6 h-5 sm:h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  Get the best consult from cyber expert advisors working in the
                  legal sector for corporates.
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Swiper */}
          <div className="relative w-full lg:w-[550px] lg:-ml-16 z-20 mt-6 lg:mt-24 select-none">
            <div
              className="w-full h-64 sm:h-80 lg:h-96 relative overflow-hidden bg-white cursor-pointer"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{
                touchAction: "pan-y",
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
              }}
            >
              {/* Slide container */}
              <div
                ref={sliderRef}
                className={`flex ${
                  isTransitioning
                    ? "transition-transform duration-500 ease-out"
                    : ""
                }`}
                style={{
                  transform: `translateX(-${currentSlide * slideWidth}px)`,
                }}
              >
                {extendedSlides.map((slide, index) => (
                  <div
                    key={index}
                    className="w-48 sm:w-60 h-64 sm:h-80 lg:h-96 relative overflow-hidden flex-shrink-0 mr-2 sm:mr-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-1 hover:-translate-x-1 hover:-translate-y-1"
                  >
                    {/* Background image */}
                    <div
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    >
                      {/* Full black overlay */}
                      <div className="absolute inset-0 bg-black/10"></div>

                      {/* Title on top */}
                      <div className="absolute bottom-8 left-3 right-3 text-white font-semibold text-sm sm:text-xl z-10 bg-black/50 rounded-md p-2 sm:p-3 text-center shadow-md">
                        {slide.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-4 sm:mt-6 gap-1 sm:gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    stopAutoplay();
                    setCurrentSlide(index + 1); // Offset for cloned slide
                    setTimeout(startAutoplay, 1000);
                  }}
                  className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-colors ${
                    index === (currentSlide - 1 + totalSlides) % totalSlides
                      ? index === 0
                        ? "bg-green-500"
                        : "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
