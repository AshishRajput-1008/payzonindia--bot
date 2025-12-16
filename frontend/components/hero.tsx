import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";

// Types
interface Slide {
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  accent: string;
  position: "left" | "right" | "center";
}

// Data
const slides: Slide[] = [
  {
    title: "Leading a Legacy ",
    subtitle: "of Innovation",
    description:
      "As the cornerstone of our group, PayzonIndia drives transformative solutions across industries, uniting expertise and innovation.",
    buttonText: "Discover Our Group",
    accent: "from-blue-700 via-blue-700 to-blue-900",
    position: "center",
  },
  {
    title: "Empowering ",
    subtitle: "Global Growth",
    description:
      "Our diverse portfolio of companies delivers cutting-edge technology and services to fuel your success worldwide.",
    buttonText: "Explore Our Ventures",
    accent: "from-blue-700 via-blue-700 to-blue-900",
    position: "center",
  },
  {
    title: "Building a ",
    subtitle: "Stronger Future",
    description:
      "With a commitment to excellence, our group shapes industries through innovation, reliability, and global reach.",
    buttonText: "Join Our Vision",
    accent: "from-blue-700 via-blue-700 to-blue-900",
    position: "center",
  },
];

// Simple Button component
const Button = ({
  children,
  onClick,
  disabled,
  className,
  variant = "default",
  size = "default",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "icon";
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    icon: "h-10 w-10",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className || ""}`}
    >
      {children}
    </button>
  );
};

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  };

  const currentSlideData = slides[currentSlide];

  // Get content alignment based on slide position
  const getContentAlignment = (position: string) => {
    switch (position) {
      case "left":
        return "text-left items-start justify-start";
      case "right":
        return "text-right items-end justify-end";
      case "center":
      default:
        return "text-center items-center justify-center";
    }
  };

  // Get container alignment (both X and Y axis)
  const getContainerAlignment = (position: string) => {
    switch (position) {
      case "left":
        return "justify-start items-start pt-32"; // Left top
      case "right":
        return "justify-end items-end pb-32"; // Right bottom
      case "center":
      default:
        return "justify-center items-center"; // Center center
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-18">
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out"
            autoPlay
            loop
            muted
            playsInline
            style={{
              transform: `scale(${isAnimating ? 1.05 : 1}) translate(${mousePosition.x * 8}px, ${mousePosition.y * 4}px)`,
            }}
          >
            <source src="/images/payzon.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10" />
        </div>

        {/* Navigation Arrows - Fixed Position */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrev}
            disabled={isAnimating}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white hover:scale-105 transition-transform duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </div>

        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            disabled={isAnimating}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white hover:scale-105 transition-transform duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Main Content */}
        <div className="min-h-screen">
          <div className={`relative z-10 min-h-screen flex px-6 sm:px-12 lg:px-16 ${getContainerAlignment(currentSlideData.position)}`}>
            <div className={`max-w-2xl w-full ${getContentAlignment(currentSlideData.position)}`}>
              <div
                className={`transition-all duration-700 ease-out ${isAnimating
                    ? "opacity-0 translate-y-10 scale-95"
                    : "opacity-100 translate-y-0 scale-100"
                  }`}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                  <span className="block text-white">{currentSlideData.title}</span>
                  <span className="block text-white">
                    {currentSlideData.subtitle}
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-xl">
                  {currentSlideData.description}
                </p>

                {/* CTA Button */}
                <div className={`flex ${currentSlideData.position === 'center' ? 'justify-center' : currentSlideData.position === 'right' ? 'justify-end' : 'justify-start'}`}>
                  <span
                    className={`group relative overflow-hidden bg-gradient-to-r ${currentSlideData.accent} hover:scale-105 text-white px-6 py-4 text-lg font-semibold transition-transform duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <span className="relative z-10">{currentSlideData.buttonText}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInCenter {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out both;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out both;
        }

        .animate-slideInCenter {
          animation: slideInCenter 1s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Hero;