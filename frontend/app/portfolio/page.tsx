"use client"
import { useState, useEffect, useRef } from "react";
import { ExternalLink, Globe, TrendingUp, Shield, ShoppingCart, Heart, Zap, Send, ArrowRight, Star, Users, Award, Rocket } from "lucide-react";
import Link from "next/link";

interface Company {
    id: number;
    name: string;
    logo: string;
    website: string;
    description: string;
    benefits: string[];
    features: string[];
    category: string;
    gradient: string;
    icon: React.ReactNode;
    urlname: string;
}

const companies: Company[] = [
    {
        id: 1,
        name: "PayzonAPI",
        logo: "/images/logo.png",
        website: "https://www.payzonapi.com/",
        description: "PayzonAPI powers digital transactions with secure, scalable payment solutions. It offers seamless integrations for UPI, cards, and net banking. Trusted by fintech leaders for reliability and innovation.",
        benefits: [
            "Ensures secure transactions with enterprise-grade encryption",
            "Provides 99.99% uptime for uninterrupted commerce",
            "Trusted by leading fintech companies"
        ],
        features: [
            "Real-time transaction monitoring",
            "Instant settlement APIs",
            "AI-driven fraud detection",
            "Customizable dashboards"
        ],
        category: "Fintech Solutions",
        gradient: "from-blue-600 to-blue-800",
        icon: <Zap className="w-8 h-8" />,
        urlname: "payzonapi.com"
    },
    {
        id: 2,
        name: "Payzon Marketing",
        logo: "https://www.payzonmarketing.com/images/campaign/imgh1.png",
        website: "https://www.payzonmarketing.com/",
        description: "Payzon Marketing drives ROI-focused digital campaigns with AI-powered insights. From SEO to influencer partnerships, we boost brand visibility. Our strategies deliver measurable customer acquisition and retention.",
        benefits: [
            "Maximizes brand reach and conversions",
            "Delivers measurable ROI for campaigns",
            "Tailored solutions for all business sizes"
        ],
        features: [
            "Omni-channel marketing strategies",
            "Real-time analytics dashboards",
            "Lead nurturing funnels",
            "Video-first campaign designs"
        ],
        category: "Digital Marketing",
        gradient: "from-blue-600 to-blue-800",
        icon: <TrendingUp className="w-8 h-8" />,
        urlname: "payzonmarketing.com"
    },
    {
        id: 3,
        name: "Payzon Shoppy",
        logo: "/images/shoppy-logo.png",
        website: "https://www.payzonshoppy.com/",
        description: "Payzon Shoppy is an AI-powered e-commerce platform for vendors and consumers. It offers personalized shopping and scalable business tools. Cross-border selling and analytics redefine digital marketplaces.",
        benefits: [
            "Empowers vendors with scalable tools",
            "Enhances consumer shopping experience",
            "Supports global market expansion"
        ],
        features: [
            "Intelligent catalog management",
            "Hyper-personalized recommendations",
            "Real-time logistics tracking",
            "Machine learning analytics"
        ],
        category: "E-commerce Platform",
        gradient: "from-blue-600 to-blue-800",
        icon: <ShoppingCart className="w-8 h-8" />,
        urlname: "payzonshoppy.com"
    },
    {
        id: 4,
        name: "Sadaiv Satya",
        logo: "https://www.sadaivsatya.com/_next/static/media/Final%20Logo.c0b61321.png",
        website: "https://www.sadaivsatya.com/",
        description: "Sadaiv Satya delivers unbiased journalism with fact-checked stories. Covering politics, tech, and lifestyle via multimedia platforms. We foster informed citizenship through credible reporting.",
        benefits: [
            "Promotes trust through fact-checked news",
            "Reaches millions across platforms",
            "Encourages informed public discourse"
        ],
        features: [
            "Real-time news updates",
            "Multimedia storytelling",
            "Advanced CMS integration",
            "SEO-optimized content delivery"
        ],
        category: "Media & News",
        gradient: "from-blue-600 to-blue-800",
        icon: <Globe className="w-8 h-8" />,
        urlname: "sadaivsatya.com"
    },
    {
        id: 5,
        name: "Sadaiv Yuva Foundation",
        logo: "https://www.sadaivyuvafoundation.com/Sadaiv_logo.png",
        website: "https://www.sadaivyuvafoundation.com/",
        description: "Sadaiv Yuva Foundation empowers youth through education and skills. We focus on vocational training and social impact programs. Bridging opportunities for a brighter future.",
        benefits: [
            "Empowers youth with skills and opportunities",
            "Promotes social and environmental causes",
            "Fosters community development"
        ],
        features: [
            "Vocational training programs",
            "Startup incubation support",
            "Digital literacy workshops",
            "Community and government partnerships"
        ],
        category: "Social Impact",
        gradient: "from-blue-600 to-blue-800",
        icon: <Heart className="w-8 h-8" />,
        urlname: "sadaivyuvafoundation.com"
    },
    {
        id: 6,
        name: "Smart Tax Idea",
        logo: "/images/SMART TAX !DEA.png",
        website: "https://smarttaxidea.com/",
        description: "Smart Tax Idea provides expert CA and corporate consultancy services. Specializing in tax, compliance, and business incorporation. Simplifying financial clarity for startups and enterprises.",
        benefits: [
            "Simplifies complex tax processes",
            "Supports business growth with compliance",
            "Trusted by startups and enterprises"
        ],
        features: [
            "Company incorporation services",
            "GST and income tax filing",
            "Statutory audits and ROC compliance",
            "Merger and trademark support"
        ],
        category: "Legal & Tax Services",
        gradient: "from-blue-600 to-blue-800",
        icon: <Globe className="w-8 h-8" />,
        urlname: "smarttaxidea.com"
    },
    {
        id: 8,
        name: "Ineffable Spark",
        logo: "/images/inffablesparklogo (1).png",
        website: "https://ineffablespark.com/",
        description: "Ineffable Spark trains professionals for India’s banking sector. Offers NISM and IRDA certification-focused coaching. Bridges the experience gap for aspiring bankers.",
        benefits: [
            "Prepares candidates for banking careers",
            "Builds industry-relevant expertise",
            "Enhances professional confidence"
        ],
        features: [
            "NISM and IRDA certification coaching",
            "Real-world case studies",
            "Tailored guidance for banking roles",
            "20+ years of industry expertise"
        ],
        category: "Banking Education",
        gradient: "from-blue-600 to-blue-800",
        icon: <TrendingUp className="w-8 h-8" />,
        urlname: "ineffablespark.com"
    },
    {
        id: 9,
        name: "Cascab",
        logo: "/images/2.png",
        website: "https://cascab.com/",
        description: "Cascab offers premium spices and masala blends for authentic flavors. Elevates culinary experiences with quality ingredients. Trusted for vibrant taste in every dish.",
        benefits: [
            "Enhances dishes with authentic flavors",
            "Trusted by home and professional chefs",
            "Convenient online shopping experience"
        ],
        features: [
            "Wide range of spices (Tej Patta, Dalchini, etc.)",
            "Specialized masalas for various cuisines",
            "High-quality, authentic ingredients",
            "User-friendly e-commerce platform"
        ],
        category: "Food & Spices",
        gradient: "from-blue-600 to-blue-800",
        icon: <ShoppingCart className="w-8 h-8" />,
        urlname: "cascab.com"
    },
    {
        id: 10,
        name: "Shabd Today",
        logo: "/images/logo-Anils.png",
        website: "https://shabdtoday.com/",
        description: "Shabd Today delivers Hindi news with speed and accuracy. Covers diverse topics from politics to lifestyle. Committed to credible and engaging journalism.",
        benefits: [
            "Provides accurate and timely news",
            "Engages Hindi-speaking audiences",
            "Promotes credible journalism"
        ],
        features: [
            "Real-time Hindi news updates",
            "Multimedia content (articles, videos)",
            "JavaScript-enabled interface",
            "Regional and national coverage"
        ],
        category: "Hindi News",
        gradient: "from-blue-600 to-blue-800",
        icon: <Globe className="w-8 h-8" />,
        urlname: "shabdtoday.com"
    },
    {
        id: 11,
        name: "SVN Group",
        logo: "/images/5.png",
        website: "https://svngroup.in/",
        description: "SVN Group provides quality education and skill development programs. Offers diverse courses and modern learning facilities. Empowers students with knowledge and opportunities.",
        benefits: [
            "Empowers students with quality education",
            "Supports career and skill development",
            "Fosters holistic student growth"
        ],
        features: [
            "20+ courses in education and management",
            "Modern facilities (labs, libraries)",
            "Support for over 5,000 students",
            "Experienced faculty and mentorship"
        ],
        category: "Education",
        gradient: "from-blue-600 to-blue-800",
        icon: <Award className="w-8 h-8" />,
        urlname: "svngroup.in"
    },
];

export default function EnhancedPortfolioSection() {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
    };

    return (
        <section className="relative">
            {/* Hero Section */}
            <div className="relative min-h-[60vh] sm:min-h-[80vh] md:min-h-screen ">
                 <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/images/bg-pagetitle.jpg')`,
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative z-10 pt-28 sm:pt-24 md:pt-32 lg:pt-72 pb-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                            {/* Left Section */}
                            <div className="space-y-4 sm:space-y-6 animate-slide-in-right">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                    Welcome to
                                    <br />
                                    <span className="text-white">Payzonit Services</span>
                                </h1>
                                <p className="text-lg sm:text-base md:text-lg text-white max-w-xs sm:max-w-md md:max-w-lg leading-relaxed">
                                    At Payzonit Services, we build powerful ecosystems of <span className="text-white font-semibold">Fintech, Marketing, E-commerce, Media, and Social Impact</span> platforms.
                                    Each solution is crafted with innovation and purpose to empower businesses, uplift communities, and shape the digital future.
                                </p>
                                <div className="flex flex-wrap gap-3 sm:gap-4">
                                    <Link href="/portfolio">
                                        <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base shadow-lg hover:bg-blue-700 transition-all duration-300">
                                            Explore Portfolio
                                        </button>
                                    </Link>
                                    <Link href="/contact">
                                        <button className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
                                            <ArrowRight size={16} />
                                            Get a Free Quote
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="space-y-4 sm:space-y-6 animate-slide-in-right">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <span className="text-white text-lg sm:text-xl font-cedarville">
                                        ★ Our Expertise
                                    </span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                    Driving Innovation
                                    <br />
                                    <span className="text-white">Across Industries</span>
                                </h2>
                                <p className="text-lg sm:text-base md:text-lg text-white max-w-xs sm:max-w-md md:max-w-lg leading-relaxed">
                                    From <span className="text-white font-medium">secure payment gateways</span> and
                                    <span className="text-white font-medium"> digital marketing strategies</span> to
                                    <span className="text-white font-medium"> AI-powered e-commerce platforms</span> and
                                    <span className="text-white font-medium"> social empowerment programs</span>,
                                    our portfolio highlights how technology can transform lives and businesses alike.
                                </p>
                                {/* Floating Elements */}
                                <div className="absolute top-12 sm:top-16 right-4 sm:right-10">
                                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full animate-pulse"></div>
                                </div>
                                <div className="absolute top-24 sm:top-32 right-8 sm:right-16">
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-black rounded-full animate-bounce"></div>
                                </div>
                                <div className="absolute bottom-12 sm:bottom-16 right-0">
                                    <Send className="w-6 sm:w-8 h-6 sm:h-8 text-white opacity-20 animate-float" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Portfolio Section */}
            <section
                ref={sectionRef}
                className="relative py-12 sm:py-16 md:py-20 bg-white"
                onMouseMove={handleMouseMove}
            >
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-full opacity-20 blur-3xl animate-float-complex"
                        style={{ background: 'linear-gradient(45deg, #2563eb, #1e40af)', left: '10%', top: '20%' }}
                    />
                    <div
                        className="absolute w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 rounded-full opacity-15 blur-3xl animate-float-complex"
                        style={{ background: 'linear-gradient(135deg, #2563eb, #1e40af)', right: '10%', top: '60%', animationDelay: '2s' }}
                    />
                    <div
                        className="absolute w-36 sm:w-48 md:w-64 h-36 sm:h-48 md:h-64 rounded-full opacity-10 blur-3xl animate-float-complex"
                        style={{ background: 'linear-gradient(225deg, #2563eb, #1e40af)', left: '60%', bottom: '20%', animationDelay: '4s' }}
                    />
                    <div className="absolute inset-0 bg-lines opacity-10" />
                    <div className="absolute inset-0">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                            <defs>
                                <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1" />
                                    <stop offset="50%" stopColor="#1e40af" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0,300 Q250,200 500,300 T1000,300 L1000,1000 L0,1000 Z"
                                fill="url(#wave1)"
                                className="animate-wave-slow"
                            />
                        </svg>
                    </div>
                    <div className="absolute inset-0">
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full opacity-50 animate-float-network"
                                style={{
                                    left: `${10 + Math.random() * 80}%`,
                                    top: `${10 + Math.random() * 80}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${4 + Math.random() * 4}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                        {companies.map((company, index) => (
                            <div
                                key={company.id}
                                className={`group relative transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                                onMouseEnter={() => setActiveCard(company.id)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                <div className="relative h-[550px] sm:h-[600px] md:h-[650px] rounded-2xl overflow-hidden glass-card card-hover-effect">
                                    <div className="absolute inset-0 bg-white/90 border border-gray-200 rounded-2xl transition-all duration-500 group-hover:border-blue-600">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-10 group-hover:opacity-20 transition-all duration-500 rounded-2xl`} />
                                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                            <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br ${company.gradient} opacity-15 rounded-full blur-xl animate-float-slow`} />
                                            <div className={`absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br ${company.gradient} opacity-10 rounded-lg blur-lg animate-float-reverse`} />
                                        </div>
                                    </div>

                                    <div className="relative z-20 p-4 sm:p-6 md:p-8 h-full flex flex-col">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3 sm:gap-4">
                                                <div
                                                    className={`relative flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300 ${company.id === 10 ? 'w-32 sm:w-40 h-20 sm:h-24' : 'w-16 sm:w-20 h-16 sm:h-20'}`}
                                                >
                                                    <img
                                                        src={company.logo}
                                                        alt={`${company.name} logo`}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300">
                                                        {company.name}
                                                    </h3>
                                                    <a
                                                        href={company.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-black text-xs sm:text-sm md:text-base font-medium hover:underline mt-1"
                                                    >
                                                        {company.urlname}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className={`inline-flex items-center justify-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-full bg-gradient-to-br ${company.gradient} text-white mb-1 sm:mb-2 group-hover:scale-105 group-hover:rotate-6 transition-all duration-300 shadow-sm`}>
                                                    {company.icon}
                                                </div>
                                                <div className="bg-blue-600/10 backdrop-blur-md rounded-full px-2 sm:px-3 py-1 sm:py-2 border border-blue-600/20">
                                                    <span className="text-blue-600 text-xs sm:text-sm font-medium">{company.category}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 sm:mt-6 flex-grow">
                                            <p className="text-black text-sm sm:text-base font-medium mb-3 sm:mb-4">{company.description}</p>
                                            <div className="mb-3 sm:mb-4">
                                                <h4 className="text-base sm:text-lg font-semibold text-blue-600 mb-2">Benefits</h4>
                                                <ul className="text-black text-xs sm:text-sm font-medium leading-relaxed list-disc list-inside">
                                                    {company.benefits.map((benefit, idx) => (
                                                        <li key={idx}>{benefit}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-base sm:text-lg font-semibold text-blue-600 mb-2">Features</h4>
                                                <ul className="text-black text-xs sm:text-sm font-medium leading-relaxed list-disc list-inside">
                                                    {company.features.map((feature, idx) => (
                                                        <li key={idx}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <a
                                            href={company.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/btn relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 p-[2px] transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-600/25 mt-4"
                                        >
                                            <div className="relative flex items-center justify-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-sm rounded-xl px-4 sm:px-6 py-2 sm:py-3 text-black font-medium text-sm sm:text-base transition-all duration-300 group-hover/btn:bg-transparent group-hover/btn:text-white">
                                                <Rocket className="w-4 sm:w-5 h-4 sm:h-5 group-hover/btn:animate-bounce" />
                                                <span>Explore Platform</span>
                                                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                            </div>
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover/btn:opacity-20 blur-xl transition-opacity duration-300" />
                                        </a>
                                    </div>

                                    {activeCard === company.id && (
                                        <>
                                            <div className="absolute inset-0 pointer-events-none">
                                                {[...Array(15)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full animate-particle-burst"
                                                        style={{
                                                            left: '50%',
                                                            top: '50%',
                                                            animationDelay: `${i * 0.05}s`,
                                                            '--burst-x': `${(Math.random() - 0.5) * 400}px`,
                                                            '--burst-y': `${(Math.random() - 0.5) * 400}px`,
                                                        } as React.CSSProperties}
                                                    />
                                                ))}
                                            </div>
                                            <div className="absolute inset-0 pointer-events-none">
                                                <div className={`absolute top-1/2 left-1/2 w-0 h-0 bg-gradient-to-r ${company.gradient} rounded-full animate-ripple`} />
                                            </div>
                                        </>
                                    )}

                                    <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 overflow-hidden rounded-bl-2xl rounded-tr-2xl">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-20`} />
                                        <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-4 sm:w-5 h-4 sm:h-5 bg-blue-600/20 rounded-full animate-pulse" />
                                    </div>

                                    <div className="absolute -top-4 sm:-top-5 -right-4 sm:-right-5 w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-md group-hover:scale-110 group-hover:rotate-180 transition-all duration-500 border-2 sm:border-3 border-blue-600/20">
                                        {company.id}
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mouse-Following Effect (Disabled on Mobile) */}
                <div
                    className="absolute pointer-events-none transition-all duration-500 ease-out opacity-50 hidden sm:block"
                    style={{
                        left: `${mousePosition.x * 100}%`,
                        top: `${mousePosition.y * 100}%`,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <div className="w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-gradient-radial from-blue-600/20 via-blue-800/10 to-transparent rounded-full blur-2xl animate-pulse-gentle" />
                    <div className="absolute inset-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-radial from-blue-600/15 via-blue-800/10 to-transparent rounded-full blur-xl animate-spin-slow" />
                </div>

                {/* CSS Styles */}
                <style jsx>{`
                    @keyframes slide-up {
                        from {
                            opacity: 0;
                            transform: translateY(50px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes float-complex {
                        0%, 100% {
                            transform: translate(0, 0) rotate(0deg) scale(1);
                        }
                        25% {
                            transform: translate(30px, -30px) rotate(90deg) scale(1.1);
                        }
                        50% {
                            transform: translate(-20px, -60px) rotate(180deg) scale(0.9);
                        }
                        75% {
                            transform: translate(-40px, -20px) rotate(270deg) scale(1.05);
                        }
                    }

                    @keyframes float-slow {
                        0%, 100% {
                            transform: translateY(0) rotate(0deg);
                        }
                        50% {
                            transform: translateY(-20px) rotate(180deg);
                        }
                    }

                    @keyframes float-reverse {
                        0%, 100% {
                            transform: translateY(0) rotate(0deg);
                        }
                        50% {
                            transform: translateY(15px) rotate(-180deg);
                        }
                    }

                    @keyframes float-network {
                        0%, 100% {
                            transform: translate(0, 0) scale(1);
                            opacity: 0.6;
                        }
                        25% {
                            transform: translate(20px, -15px) scale(1.2);
                            opacity: 1;
                        }
                        50% {
                            transform: translate(-15px, -30px) scale(0.8);
                            opacity: 0.4;
                        }
                        75% {
                            transform: translate(-25px, 10px) scale(1.1);
                            opacity: 0.8;
                        }
                    }

                    @keyframes wave-slow {
                        0%, 100% {
                            transform: translateX(0);
                        }
                        50% {
                            transform: translateX(-50px);
                        }
                    }

                    @keyframes gradient-shift {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }

                    @keyframes spin-slow {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }

                    @keyframes particle-burst {
                        0% {
                            transform: translate(-50%, -50%) scale(0);
                            opacity: 1;
                        }
                        50% {
                            transform: translate(calc(-50% + var(--burst-x)), calc(-50% + var(--burst-y))) scale(1);
                            opacity: 0.8;
                        }
                        100% {
                            transform: translate(calc(-50% + var(--burst-x)), calc(-50% + var(--burst-y))) scale(0);
                            opacity: 0;
                        }
                    }

                    @keyframes ripple {
                        0% {
                            width: 0;
                            height: 0;
                            opacity: 1;
                        }
                        100% {
                            width: 400px;
                            height: 400px;
                            opacity: 0;
                            transform: translate(-50%, -50%);
                        }
                    }

                    @keyframes pulse-gentle {
                        0%, 100% {
                            transform: scale(1);
                            opacity: 0.6;
                        }
                        50% {
                            transform: scale(1.05);
                            opacity: 0.8;
                        }
                    }

                    @keyframes bounce-gentle {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                    }

                    @keyframes glow-pulse {
                        0%, 100% {
                            box-shadow: 0 0 20px rgba(37, 99, 235, 0.3);
                        }
                        50% {
                            box-shadow: 0 0 40px rgba(37, 99, 235, 0.6), 0 0 60px rgba(37, 99, 235, 0.4);
                        }
                    }

                    @keyframes text-shimmer {
                        0% {
                            background-position: -200%;
                        }
                        100% {
                            background-position: 200%;
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

                    @keyframes scale-in {
                        from {
                            opacity: 0;
                            transform: scale(0.8);
                        }
                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }

                    @keyframes rotate-continuous {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }

                    @keyframes float-x {
                        0%, 100% {
                            transform: translateX(0);
                        }
                        50% {
                            transform: translateX(20px);
                        }
                    }

                    @keyframes float-y {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-15px);
                        }
                    }

                    /* Animation utility classes */
                    .animate-slide-up {
                        animation: slide-up 0.8s ease-out forwards;
                    }

                    .animate-float-complex {
                        animation: float-complex 12s ease-in-out infinite;
                    }

                    .animate-float-slow {
                        animation: float-slow 8s ease-in-out infinite;
                    }

                    .animate-float-reverse {
                        animation: float-reverse 10s ease-in-out infinite;
                    }

                    .animate-float-network {
                        animation: float-network 6s ease-in-out infinite;
                    }

                    .animate-wave-slow {
                        animation: wave-slow 15s ease-in-out infinite;
                    }

                    .animate-gradient-shift {
                        background-size: 200% 200%;
                        animation: gradient-shift 4s ease infinite;
                    }

                    .animate-spin-slow {
                        animation: spin-slow 8s linear infinite;
                    }

                    .animate-particle-burst {
                        animation: particle-burst 1.5s ease-out forwards;
                    }

                    .animate-ripple {
                        animation: ripple 1s ease-out forwards;
                    }

                    .animate-pulse-gentle {
                        animation: pulse-gentle 3s ease-in-out infinite;
                    }

                    .animate-bounce-gentle {
                        animation: bounce-gentle 2s ease-in-out infinite;
                    }

                    .animate-glow-pulse {
                        animation: glow-pulse 3s ease-in-out infinite;
                    }

                    .animate-text-shimmer {
                        background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.4), transparent);
                        background-size: 200% 100%;
                        animation: text-shimmer 2s ease-in-out infinite;
                    }

                    .animate-fade-in-up {
                        animation: fade-in-up 0.6s ease-out forwards;
                    }

                    .animate-scale-in {
                        animation: scale-in 0.5s ease-out forwards;
                    }

                    .animate-rotate-continuous {
                        animation: rotate-continuous 10s linear infinite;
                    }

                    .animate-float-x {
                        animation: float-x 4s ease-in-out infinite;
                    }

                    .animate-float-y {
                        animation: float-y 5s ease-in-out infinite;
                    }

                    /* Utility classes */
                    .bg-gradient-radial {
                        background: radial-gradient(circle, var(--tw-gradient-stops));
                    }

                    .glass-card {
                        background: rgba(255, 255, 255, 0.9);
                        backdrop-filter: blur(10px);
                        border: 1px solid rgba(0, 0, 0, 0.1);
                    }

                    .glass-card:hover {
                        background: rgba(255, 255, 255, 0.95);
                        border: 1px solid rgba(37, 99, 235, 0.3);
                    }

                    .shadow-neon {
                        box-shadow: 
                            0 0 20px rgba(37, 99, 235, 0.4),
                            0 0 40px rgba(37, 99, 235, 0.2),
                            0 0 60px rgba(37, 99, 235, 0.1);
                    }

                    .card-hover-effect {
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    .card-hover-effect:hover {
                        transform: translateY(-8px) scale(1.02);
                        transform-style: preserve-3d;
                    }

                    .bg-lines {
                        background-image: 
                            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
                        background-size: 50px 50px;
                    }

                    /* Custom delay classes */
                    .delay-150 { animation-delay: 150ms; }
                    .delay-300 { animation-delay: 300ms; }
                    .delay-450 { animation-delay: 450ms; }
                    .delay-600 { animation-delay: 600ms; }
                    .delay-750 { animation-delay: 750ms; }

                    /* Responsive design optimizations */
                    @media (max-width: 640px) {
                        .animate-float-complex {
                            animation-duration: 6s;
                        }
                        
                        .animate-particle-burst {
                            animation-duration: 1s;
                        }
                        
                        .card-hover-effect:hover {
                            transform: translateY(-4px) scale(1.01);
                        }
                    }

                    @media (max-width: 1024px) {
                        .animate-wave-slow {
                            animation-duration: 10s;
                        }
                    }

                    /* Print styles */
                    @media print {
                        .animate-float-complex,
                        .animate-particle-burst {
                            animation: none;
                        }
                    }

                    /* Accessibility - Reduced motion preferences */
                    @media (prefers-reduced-motion: reduce) {
                        .animate-float-complex,
                        .animate-particle-burst,
                        .animate-wave-slow,
                        .animate-gradient-shift {
                            animation: none;
                        }
                        
                        .card-hover-effect:hover {
                            transform: none;
                        }
                    }

                    /* High contrast mode */
                    @media (prefers-contrast: high) {
                        .glass-card {
                            border: 2px solid rgba(37, 99, 235, 0.5);
                        }
                        
                        .shadow-neon {
                            box-shadow: 0 0 10px rgba(37, 99, 235, 0.8);
                        }
                    }

                    /* Performance optimizations */
                    .will-change-transform {
                        will-change: transform;
                    }

                    .will-change-opacity {
                        will-change: opacity;
                    }

                    /* Custom scrollbar for webkit browsers */
                    ::-webkit-scrollbar {
                        width: 8px;
                    }

                    ::-webkit-scrollbar-track {
                        background: rgba(0, 0, 0, 0.1);
                    }

                    ::-webkit-scrollbar-thumb {
                        background: linear-gradient(to bottom, #2563eb, #1e40af);
                        border-radius: 4px;
                    }

                    ::-webkit-scrollbar-thumb:hover {
                        background: linear-gradient(to bottom, #1e40af, #2563eb);
                    }
                `}</style>
            </section>
        </section>
    )
}