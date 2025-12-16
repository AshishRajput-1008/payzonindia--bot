"use client";

import { Marquee } from "@/components/magicui/marquee";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Play, Pause } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  id: string;
  img: string;
  name: string;
  description?: string; // Added for partner details
}

const reviews: Review[] = [
  { id: "1", img: "/images/1.png", name: "Shabd Today", description: "Leading IT solutions provider" },
  { id: "2", img: "/images/2.png", name: "Cascab", description: "Innovative fintech solutions" },
  { id: "4", img: "/images/4.png", name: "Nainital Testie Basket", description: "Trusted cybersecurity experts" },
  { id: "5", img: "/images/5.png", name: "S.V.N Group Of College", description: "Global digital marketing agency" },
  { id: "6", img: "/images/6.png", name: "I Way Tours&Travels", description: "Creative design studio" },
  { id: "9", img: "/images/9.png", name: "I Way Shoppy", description: "Enterprise software specialists" },
  { id: "smart-tax", img: "/images/SMART TAX !DEA.png", name: "Smart Tax Idea", description: "Tax optimization platform" },
  { id: "jkk", img: "/images/jkk.png", name: "Dun & Bradstreet", description: "Comprehensive HR services" },
];

interface ReviewCardProps {
  img: string;
  name: string;
  description?: string;
  onClick: () => void;
}

const ReviewCard = ({ img, name, description, onClick }: ReviewCardProps) => {
  return (
    <motion.div
      className="group relative flex items-center justify-center w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 p-4 mx-3 cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      role="button"
      aria-label={`View details for ${name}`}
    >
      {/* Animated background glow */}

      {/* Main card container */}
      <div className="relative w-full h-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-2xl border border-white/10 group-hover:border-blue-400/40 transition-all duration-500  overflow-hidden">
        {/* Animated corner accents */}
        

        {/* Logo container */}
        <div className="flex items-center justify-center w-full h-full p-4">
          <Image
            src={img}
            alt={name}
            width={240}
            height={240}
            className="object-contain w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
           
          />
        </div>

        {/* Name and description overlay */}
        {/* <div className="absolute inset-x-0 bottom-0 p-3 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-blue-600 text-sm font-semibold">{name}</p>
          {description && <p className="text-gray-600 text-xs mt-1">{description}</p>}
        </div> */}
      </div>
    </motion.div>
  );
};

export default function EnhancedMarqueeDemo() {
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [speed, setSpeed] = useState(45); // Speed in seconds
  const [selectedPartner, setSelectedPartner] = useState<Review | null>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Touch event handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
    setIsPaused(false);
  };

  const handleSwipe = () => {
    const difference = touchStartX.current - touchEndX.current;
    const isLeftSwipe = difference > 50;
    const isRightSwipe = difference < -50;

    if (isLeftSwipe) setDirection("left");
    if (isRightSwipe) setDirection("right");
  };

  // Mouse event handlers
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Direction and speed controls
  const goLeft = () => setDirection("left");
  const goRight = () => setDirection("right");
  const toggleSpeed = () => setSpeed((prev) => (prev === 35 ? 20 : 35));

  // Handle card click for modal
  const handleCardClick = (review: Review) => {
    setSelectedPartner(review);
  };

  // Close modal
  const closeModal = () => {
    setSelectedPartner(null);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goLeft();
    if (e.key === "ArrowRight") goRight();
    if (e.key === " ") {
      e.preventDefault();
      setIsPaused((prev) => !prev);
    }
  };

  return (
    <section
      className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden "
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Partner Marquee Section"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-section-blog.jpg"
          alt="Professional Background"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gray-400/10" />
      </div>

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 px-4 relative z-10">
        <div className="inline-flex items-center gap-4 mb-6 group">
          <Sparkles className="w-6 h-6 text-blue-400 animate-spin" style={{ animationDuration: "4s" }} />
          <div className="flex gap-1.5">
            <div className="w-8 h-1.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse" />
            <div className="w-4 h-1.5 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full animate-pulse delay-100" />
            <div className="w-2 h-1.5 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full animate-pulse delay-200" />
          </div>
          <span className="text-blue-400 text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-400/30">
            Our Partners
          </span>
          <div className="flex gap-1.5">
            <div className="w-2 h-1.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full animate-pulse delay-200" />
            <div className="w-4 h-1.5 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full animate-pulse delay-100" />
            <div className="w-8 h-1.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full animate-pulse" />
          </div>
          <Sparkles className="w-6 h-6 text-blue-400 animate-spin" style={{ animationDuration: "4s", animationDirection: "reverse" }} />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-600 mb-4 leading-tight">
          Trusted by{" "}
          <span className="text-blue-600 ">
            Industry Leaders
          </span>
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Building success through strategic partnerships and collaborative excellence
        </p>
      </div>

      {/* Marquee Container */}
      <div
        ref={marqueeRef}
        className="relative touch-pan-y px-4 sm:px-6 lg:px-8"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Control Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-20">
          <button
            onClick={goLeft}
            className="w-12 h-12 bg-blue-600 hover:from-blue-500/50 hover:to-blue-500/70 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/20 hover:border-blue-400/60 shadow-lg hover:shadow-blue-500/30 group"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-20">
          <button
            onClick={goRight}
            className="w-12 h-12 bg-blue-600 hover:from-blue-500/50 hover:to-blue-500/70 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/20 hover:border-blue-400/60 shadow-lg hover:shadow-blue-500/30 group"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

        {/* Speed Control */}
        {/* <div className="absolute top-4 right-4 z-20">
          <button
            onClick={toggleSpeed}
            className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-blue-500/30 hover:from-blue-500/50 hover:to-blue-500/50 rounded-full text-white text-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105"
            aria-label={speed === 35 ? "Speed up" : "Slow down"}
          >
            {speed === 35 ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            {speed === 35 ? "Fast" : "Slow"}
          </button>
        </div> */}

        {/* Single Marquee */}
        <Marquee
          pauseOnHover
          className="gap-4 sm:gap-6 md:gap-8 relative z-10"
          reverse={direction === "right"}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              img={review.img}
              name={review.name}
              description={review.description}
              onClick={() => handleCardClick(review)}
            />
          ))}
        </Marquee>

        {/* Progress Bar */}
        {/* <div className="relative mt-6 w-full max-w-4xl mx-auto h-1 bg-gray-700/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
          />
        </div> */}
      </div>

      {/* Modal for Partner Details */}
      <AnimatePresence>
        {selectedPartner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
            role="dialog"
            aria-label={`Details for ${selectedPartner.name}`}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl p-6 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={selectedPartner.img}
                  alt={selectedPartner.name}
                  width={120}
                  height={120}
                  className="object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                {selectedPartner.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
                {selectedPartner.description || "A valued partner in our journey to success."}
              </p>
              <button
                onClick={closeModal}
                className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-500 text-white rounded-lg hover:scale-105 transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}