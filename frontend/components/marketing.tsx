"use client";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Lock,
  Eye,
  Zap,
  Users,
  Award,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

// Define interfaces for slide and feature objects
interface Slide {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  icon: LucideIcon;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  value: string;
}

// Define interface for particle objects
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

// Define interface for mouse position
interface MousePosition {
  x: number;
  y: number;
}

export default function CyberMarketingHero() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  const slides: Slide[] = [
    {
      title: "CYBER SECURITY",
      subtitle: "Advanced Threat Protection",
      description: "AI-powered security solutions that adapt and learn from emerging threats in real-time.",
      color: "from-blue-500 to-blue-700",
      icon: Shield,
    },
    {
      title: "WEB SECURITY",
      subtitle: "Complete Digital Defense",
      description: "Comprehensive web application security with zero-day protection and instant response.",
      color: "from-blue-500 to-blue-700",
      icon: Lock,
    },
    {
      title: "DATA PROTECTION",
      subtitle: "Enterprise Grade Encryption",
      description: "Military-grade encryption and compliance solutions for sensitive business data.",
      color: "from-blue-500 to-blue-700",
      icon: Eye,
    },
  ];

  const features: Feature[] = [
    { icon: Shield, title: "99.9% Threat Detection", value: "Advanced AI" },
    { icon: Zap, title: "Real-time Response", value: "<1ms Latency" },
    { icon: Users, title: "Global Coverage", value: "150+ Countries" },
    { icon: Award, title: "Industry Leader", value: "ISO 27001" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setParticles(newParticles);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              animation: `float ${particle.speed * 20 + 10}s linear infinite`,
              transform: `translate(${Math.sin(Date.now() * 0.001 + particle.id) * 20}px, ${
                Math.cos(Date.now() * 0.001 + particle.id) * 20
              }px)`,
            }}
          />
        ))}
      </div>

      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 animate-pulse" />

      {/* Dynamic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />

      {/* Mouse Follower Effect */}
      <div
        className="absolute w-96 h-96 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transform: `scale(${isHovered ? 1.5 : 1})`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-lg border border-blue-500/30">
              <Zap className="w-4 h-4 text-blue-500 mr-2" />
              <span className="text-sm font-semibold text-blue-700 tracking-wider">
                CYBER SHIELD FOR CORPORATES
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-tight">
                Legal Support
                <span className="block bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                  & Awareness
                </span>
                <span className="block">in Digital</span>
                <span className="block bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                  Cyber Crimes
                </span>
              </h1>

              <p className="text-xl text-black max-w-2xl leading-relaxed">
                Specializes in combating cyber fraud and providing robust protection against digital crimes. With
                consultancy and expert solutions, we safeguard businesses and corporates from online threats, ensuring a
                secure digital environment.
              </p>
            </div>

            {/* Feature Points */}
            <div className="space-y-4">
              {[
                "We offer data security and cyber services for companies & businesses",
                "Get the best consult from cyber expert advisors working in the legal sector for corporates.",
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-black text-lg group-hover:text-blue-500 transition-colors duration-300">{feature}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="group relative px-8 py-4 bg-blue-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center">
                  Get Protected Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - Interactive Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              {slides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 translate-x-0"
                        : index < currentSlide
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    {/* Glassmorphism Card */}
                    <div className="relative h-full bg-white border border-blue-500/20 rounded-3xl p-8 flex flex-col justify-center items-center text-center space-y-6">
                      {/* Animated Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-20 rounded-3xl`} />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)] rounded-3xl" />

                      {/* Icon */}
                      <div className="relative">
                        <div
                          className={`w-32 h-32 bg-gradient-to-br ${slide.color} rounded-3xl flex items-center justify-center shadow-2xl animate-pulse`}
                        >
                          <Icon className="w-16 h-16 text-white" />
                        </div>
                        {/* Floating Ring */}
                        <div
                          className="absolute inset-0 rounded-3xl border-4 border-blue-500/30 animate-spin"
                          style={{ animation: "spin 10s linear infinite" }}
                        />
                      </div>

                      {/* Content */}
                      <div className="relative space-y-4">
                        <h2 className="text-4xl font-black text-black tracking-wider">{slide.title}</h2>
                        <h3 className={`text-xl font-semibold bg-gradient-to-r ${slide.color} bg-clip-text text-transparent`}>
                          {slide.subtitle}
                        </h3>
                        <p className="text-black text-lg max-w-md leading-relaxed">{slide.description}</p>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                      <div className="absolute bottom-4 left-4 w-3 h-3 bg-blue-500 rounded-full animate-bounce" />
                    </div>
                  </div>
                );
              })}

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300 border border-blue-500/20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300 border border-blue-500/20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-blue-500 scale-125 shadow-lg shadow-blue-500/50"
                      : "bg-white/30 hover:bg-blue-500/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/20 to-transparent" />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}