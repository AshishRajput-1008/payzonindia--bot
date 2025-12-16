"use client";

import React, { useState, useEffect, useRef } from "react";
import { Quote, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amit Sharma",
    position: "CEO",
    company: "Shabd Today",
    content:
      "Payzon India's web development services transformed our online presence with a sleek, responsive platform that boosted customer engagement by 40%. Their expertise is unmatched.",
    avatar: "/images/1.png",
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Marketing Director",
    company: "Cascab",
    content:
      "The digital marketing strategies from Payzon India, including SEO and influencer campaigns, doubled our website traffic in just three months. Truly exceptional results!",
    avatar: "/images/2.png",
  },
  {
    id: 3,
    name: "Rahul Verma",
    position: "CTO",
    company: "Nainital Testie Basket",
    content:
      "Payzon India's cybersecurity solutions protected our sensitive data with enterprise-grade encryption and proactive monitoring. Their team is a trusted partner in our security strategy.",
    avatar: "/images/4.png",
  },
  {
    id: 4,
    name: "Anjali Gupta",
    position: "COO",
    company: "S.V.N Group Of College",
    content:
      "With Payzon India's fintech APIs, we streamlined our payment processes, making transactions faster and more secure. Their support has been instrumental in our growth.",
    avatar: "/images/5.png",
  },
  {
    id: 5,
    name: "Vikram Singh",
    position: "Founder",
    company: "I Way Travels",
    content:
      "Payzon India's innovative IT solutions helped us launch a scalable platform that supports our global user base. Their team is professional and highly responsive.",
    avatar: "/images/6.png",
  },
  {
    id: 6,
    name: "Neha Kapoor",
    position: "Head of Operations",
    company: "I Way Shoppy",
    content:
      "The strategic guidance from Payzon India elevated our software infrastructure, ensuring seamless performance and reliability. A game-changer for our business.",
    avatar: "/images/9.png",
  },
  {
    id: 7,
    name: "Suresh Reddy",
    position: "Managing Director",
    company: "Smart Tax Idea",
    content:
      "Payzon India's fintech solutions simplified our tax optimization platform, enhancing user experience and operational efficiency. Their expertise is top-notch.",
    avatar: "/images/SMART TAX !DEA.png",
  },
  {
    id: 8,
    name: "Meena Desai",
    position: "HR Manager",
    company: "Dun & Bradstreet",
    content:
      "Payzon India's HR services streamlined our payroll and benefits administration, saving us time and resources. Their support is reliable and customer-focused.",
    avatar: "/images/jkk.png",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    if (!isTransitioning && !isDragging) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevTestimonial = () => {
    if (!isTransitioning && !isDragging) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  const goToTestimonial = (index: number) => {
    if (!isTransitioning && !isDragging && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

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
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      const threshold = 100; // Increased for better sensitivity
      if (Math.abs(diff) > threshold) {
        diff > 0 ? nextTestimonial() : prevTestimonial();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    if (isPlaying) startAutoplay();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
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
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      const threshold = 100; // Increased for better sensitivity
      if (Math.abs(diff) > threshold) {
        diff > 0 ? nextTestimonial() : prevTestimonial();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    if (isPlaying) startAutoplay();
  };

  const startAutoplay = () => {
    if (!isPlaying || isDragging) return;
    stopAutoplay();
    autoplayRef.current = setInterval(nextTestimonial, 3000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  useEffect(() => {
    if (isPlaying) startAutoplay();
    return () => stopAutoplay();
  }, [isPlaying]);

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevTestimonial();
    if (e.key === "ArrowRight") nextTestimonial();
    if (e.key === " ") {
      e.preventDefault();
      togglePlayPause();
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900"
      aria-label="Testimonials Section"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-section-blog.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-4 mb-6">
          <Quote className="w-8 h-8 text-blue-400 animate-pulse" />
          <span className="text-blue-400 text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-400/30">
            Client Testimonials
          </span>
          <Quote className="w-8 h-8 text-blue-400 animate-pulse" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-600 mb-4 leading-tight">
          Voices of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 animate-pulse">
            Success
          </span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Hear from our trusted partners about their experience with Payzon India
        </p>
      </div>

      {/* Main Content */}
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 ${
          isDragging ? "cursor-grab" : "cursor-pointer"
        } relative z-10`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ touchAction: "pan-y", userSelect: "none" }}
        role="region"
        aria-live="polite"
        aria-label="Testimonial carousel"
      >
        {/* Testimonial Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isTransitioning ? 0.5 : 1, y: isTransitioning ? 10 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-black dark:text-white mb-6 leading-relaxed inline-flex items-start gap-2">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 flex-shrink-0 mt-1 rotate-180" strokeWidth={2} />
            <span>{currentTestimonial.content}</span>
          </blockquote>
          <p className="text-blue-400 text-lg sm:text-xl md:text-2xl font-bold">
            {currentTestimonial.company}
          </p>
         
        </motion.div>

        {/* Avatar and Navigation */}
        <div className="flex flex-row md:flex-col items-center gap-4 md:gap-2">
          <motion.button
            onClick={prevTestimonial}
            className="p-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative flex items-center justify-center"
              initial={{ scale: index === currentIndex ? 1.1 : 1 }}
              animate={{ scale: index === currentIndex ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {index === currentIndex ? (
                <div className="w-16 h-16 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name} from ${testimonial.company}`}
                      width={80}
                      height={80}
                      className="object-cover"
                      priority={index === currentIndex}
                    />
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => goToTestimonial(index)}
                  className="w-3 h-3 rounded-full bg-white hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  aria-label={`Go to testimonial by ${testimonial.company}`}
                />
              )}
            </motion.div>
          ))}
          <motion.button
            onClick={nextTestimonial}
            className="p-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;