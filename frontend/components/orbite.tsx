"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    Code,
    Shield,
    TrendingUp,
    ExternalLink,
    Sparkles,
    Star,
    ArrowUpRight,
} from "lucide-react";

interface SkillData {
    title: string;
    percentage: number;
    icon: React.ReactNode;
    color: string;
    image?: string;
}

interface PartnerData {
    name: string;
    description: string;
    url: string;
    gradient: string;
    logo?: string;
    backgroundImage: string;
    category?: string;
    rating?: number;
    featured?: boolean;
}

const FloatingParticles: React.FC = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
            <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-blue-200/20 rounded-full animate-pulse"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                }}
            />
        ))}
    </div>
);

const ProgressBar: React.FC<{ skill: SkillData; index: number }> = ({ skill, index }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setWidth(skill.percentage), 500 + index * 200);
        return () => clearTimeout(timer);
    }, [skill.percentage, index]);

    return (
        <div className="space-y-3 group">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
                        {skill.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-black group-hover:text-blue-600 transition-colors duration-300">
                        {skill.title}
                    </h3>
                </div>
                <span className="text-lg font-semibold text-blue-600 transition-opacity duration-300 group-hover:opacity-100">
                    {skill.percentage}%
                </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out`}
                    style={{ width: `${width}%` }}
                />
            </div>
        </div>
    );
};

// Next-Level Partner Card Component
const PartnerCard: React.FC<{ partner: PartnerData; index: number }> = ({ partner, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Intersection Observer for entrance animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        setMousePosition({ x, y });
    };

    const tiltStyle = {
        transform: isHovered
            ? `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    };

    return (
        <div
            ref={cardRef}
            className={`relative group cursor-pointer rounded-3xl overflow-hidden shadow-lg transition-all duration-700 
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ ...tiltStyle, animationDelay: `${index * 150}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Background Image */}
            {partner.backgroundImage && (
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
                        style={{
                            backgroundImage: `url(${partner.backgroundImage})`,
                            transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px) scale(${isHovered ? 1.1 : 1})`,
                        }}
                    />
                    {/* Dark overlay for text visibility */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500 rounded-3xl" />
                </div>
            )}

            {/* Card Content */}
            <div className="relative z-20 p-6 flex flex-col h-[370px] justify-between">
                <div className="flex flex-col gap-4">
                    {/* Logo & Name */}
                    <div className="flex items-center gap-4 mb-2">
                        {partner.logo && (
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        )}
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide transition-all duration-300 group-hover:text-blue-300">
                            {partner.name}
                        </h3>
                    </div>

                    {/* Description */}
                   
                </div>

 <p className="text-base sm:text-lg font-black bottom-2 text-white leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {partner.description}
                    </p>
                {/* CTA Button */}
                <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                    Visit {partner.name} <ExternalLink className="w-4 h-4" />
                </a>
            </div>

            {/* Subtle ambient glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
        </div>
    );
};


const BusinessShowcase: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const skillsData: SkillData[] = [
        {
            title: "Web Development & Support",
            percentage: 97,
            icon: <Code className="w-5 h-5" />,
            color: "from-blue-500 to-blue-700",
            image: "/images/webdev.png",
        },
        {
            title: "Sales & Revenue Reinforce",
            percentage: 96,
            icon: <TrendingUp className="w-5 h-5" />,
            color: "from-emerald-500 to-teal-600",
            image: "/images/sales.png",
        },
        {
            title: "Cyber Affairs & Data Security",
            percentage: 95,
            icon: <Shield className="w-5 h-5" />,
            color: "from-red-500 to-pink-600",
            image: "/images/security.png",
        },
        {
            title: "Hosting Services",
            percentage: 95,
            icon: <TrendingUp className="w-5 h-5" />,
            color: "from-orange-500 to-yellow-600",
            image: "/images/security.png",
        },
    ];

    const partnersData: PartnerData[] = [
        {
            name: "Smart Tax Idea",
            description:
                "Smart tax idea is a legal corporate company and one stop for the corporates with regards to rendering Legal and Secretarial Services.",
            url: "https://smarttaxidea.com/",
            gradient: "from-blue-600 to-indigo-600",
            logo: "/images/SMART TAX !DEA.png",
            backgroundImage: "https://www.payzonindia.com/assets/images/smartideabanner.png",
            category: "Legal Services",
            rating: 4.9,
            featured: true
        },
        {
            name: "Ineffable Spark",
            description:
                "Accelerate your banking career with our comprehensive training program, earning NISM and IRDA certifications.",
            url: "https://ineffablespark.com/",
            gradient: "from-blue-500 to-purple-600",
            logo: "/images/inffablesparklogo (1).png",
            backgroundImage: "https://www.payzonindia.com/assets/images/inferrablesparkimg.png",
            category: "Training",
            rating: 4.8,
            featured: true
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) =>
            setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="bg-white relative min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden max-w-7xl mx-auto"
        >
            <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.23, 1, 0.320, 1) forwards;
        }
        .parallax {
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.05));
          background-attachment: fixed;
          background-size: cover;
          transition: transform 0.1s ease-out;
        }
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>

            <FloatingParticles />
            <div
                className="fixed w-48 h-48 bg-gradient-to-r from-blue-500/10 to-blue-700/10 rounded-full blur-2xl pointer-events-none transition-all duration-300 z-0"
                style={{ left: mousePosition.x - 96, top: mousePosition.y - 96 }}
            />

            <div className="relative z-10 px-4 sm:px-6 lg:px-12 flex flex-col h-full">
                {/* Skills Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="md:col-span-1 animate-fadeIn">
                        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                            Our Skills and Expertise
                        </h1>
                        <p className="text-gray-600">
                            Our team specializes in cutting-edge web development and software
                            solutions, delivering scalable and innovative applications tailored to
                            business needs.
                        </p>
                        <button
                            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
                            onClick={() => alert("Contact us for more details!")}
                        >
                            Explore Our Services
                        </button>
                    </div>
                    <div
                        className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 transition-all duration-700 delay-200"
                    >
                        {skillsData.map((skill, index) => (
                            <div
                                key={index}
                                className="p-4 sm:p-6 bg-gray-50 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 animate-fadeIn"
                                style={{ animationDelay: `${index * 0.3}s` }}
                            >
                                <ProgressBar skill={skill} index={index} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enhanced Partners Section with Dark Background */}
                <div className={`mt-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 sm:p-12 overflow-hidden">
                        {/* Background effects for partners section */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />

                        <div className="relative z-10">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
                                Our Corporate
                                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-2">
                                    Ally For Business Growth
                                </span>
                            </h2>
                            <p className="text-xl text-white/70 max-w-2xl mx-auto text-center mb-12">
                                Collaborating with industry leaders to deliver exceptional experiences
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {partnersData.map((partner, index) => (
                                    <PartnerCard key={index} partner={partner} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessShowcase;