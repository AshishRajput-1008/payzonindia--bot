"use client";

import React from "react";
import {
  Phone,
  CheckCircle,
  ArrowRight,
  Shield,
  Code,
  GraduationCap,
  Leaf,
  Award,
  Building2,
  LineChart,
  Package,
  Globe,
  TrendingUp,
  Target,
  Heart,
  Cpu,
  Mail,
  Zap,
  Users,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";

const PayzonAboutUsPage: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
      title: "Innovation Driven",
      description:
        "Leveraging cutting-edge technologies like AI, blockchain, and IoT to create scalable solutions that empower businesses and communities.",
    },
    {
      icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />,
      title: "Sustainability Focused",
      description:
        "Committed to eco-friendly practices, sustainable growth, and supporting organic farming across all our operations and initiatives.",
    },
  ];

  const milestones = [
    {
      year: "2009",
      title: "Foundation Established",
      description:
        "Payzon India Pvt Ltd founded in Bhopal, Madhya Pradesh, as a dynamic software company focused on innovative digital solutions. Starting with a vision to empower businesses globally, we began our journey in IT services and digital innovation.",
      icon: <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      year: "2018",
      title: "IT Services Expansion",
      description:
        "Launched comprehensive IT services including web development, mobile apps, API integrations, and digital transformation solutions for businesses across India. This expansion marked our entry into scalable IT infrastructure and secure cloud solutions.",
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      year: "2020",
      title: "E-commerce Ecosystem",
      description:
        "Introduced specialized e-commerce platforms for organic farming, toys, jewellery, clothing, electronics, and sustainable industries. We focused on creating secure, scalable, and user-friendly online stores with seamless payment integrations.",
      icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      year: "2022",
      title: "Cyber Security & Foundation",
      description:
        "Established Sadaiv Yuva Foundation for cyber awareness and partnered with global tech leaders for advanced security solutions. Our cyber security services include penetration testing, firewall management, data encryption, and legal support for digital crimes.",
      icon: <Lock className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      year: "2024",
      title: "Media & Skills Ecosystem",
      description:
        "Launched Sadaiv Satya News for unbiased reporting and comprehensive skills development programs creating a holistic ecosystem for digital empowerment. We emphasize empowering human potential through training in emerging technologies.",
      icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      year: "2025",
      title: "Global Reach & Fintech",
      description:
        "Expanded services internationally, serving clients in 50+ countries with innovative fintech APIs, payment solutions, and Smart Tax Idea financial services. Our fintech solutions include secure platforms for digital payments, lending, and financial management.",
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
  ];

  const values = [
    {
      icon: (
        <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500" />
      ),
      title: "Integrity",
      description:
        "Upholding the highest ethical standards in all operations, building trust with every stakeholder through transparency and accountability.",
    },
    {
      icon: (
        <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-500" />
      ),
      title: "Innovation",
      description:
        "Constantly pushing boundaries with cutting-edge technology, AI, and creative solutions to deliver future-ready platforms.",
    },
    {
      icon: (
        <Target className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-500" />
      ),
      title: "Excellence",
      description:
        "Committed to delivering superior quality and exceptional service in every project with attention to detail and perfection.",
    },
    {
      icon: (
        <Leaf className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-emerald-500" />
      ),
      title: "Sustainability",
      description:
        "Promoting eco-friendly practices, organic farming, and social responsibility for a better tomorrow and sustainable future.",
    },
  ];

  const services = [
    {
      category: "Technology & Innovation",
      color: "blue",
      icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />,
      items: [
        "Custom Software Development",
        "Web & Mobile App Development",
        "Fintech APIs & Payment Gateways",
        "AI & Machine Learning Solutions",
        "Blockchain Integration",
        "Cloud Computing Services",
        "Cyber Security & Data Protection",
        "IT Consulting & Digital Transformation",
        "API Development & KYC Verification",
        "Web Hosting & B2B Portals",
      ],
    },
    {
      category: "E-commerce Platforms",
      color: "green",
      icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />,
      items: [
        "Organic Farming Marketplace",
        "Handcrafted Jewellery Store",
        "Premium Toys E-commerce",
        "Fashion & Clothing Platform",
        "Electronics & Gadgets Store",
        "Gift Items Marketplace",
        "B2B & B2C Solutions",
        "Multi-vendor Platform Development",
        "Spices & Vegetables Marketplace",
        "Divine Industries E-commerce",
      ],
    },
    {
      category: "Digital Marketing",
      color: "purple",
      icon: <LineChart className="w-6 h-6 sm:w-8 sm:h-8" />,
      items: [
        "SEO & Content Marketing",
        "Social Media Management",
        "PPC & Google Ads",
        "Brand Strategy & Design",
        "Email Marketing Campaigns",
        "Influencer Marketing",
        "Analytics & Reporting",
        "Conversion Rate Optimization",
        "Drop-Shipping Services",
        "PR Services & Celebrity Hiring",
      ],
    },
    {
      category: "Social Impact",
      color: "orange",
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      items: [
        "Sadaiv Satya News (Unbiased Media)",
        "Sadaiv Yuva Foundation (Cyber Awareness)",
        "Skills Development Programs",
        "Smart Tax Idea (Financial Services)",
        "Rural Empowerment Initiatives",
        "Youth Training Programs",
        "Community Outreach",
        "Pro-bono Services",
        "Global Impact Initiatives",
        "12A/80G/CSR-Approved Non-Profit Activities",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-white py-16 sm:py-24 md:py-32 overflow-hidden">
        <img
          src="/images/bg-pagetitle.jpg"
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-3 sm:mb-4 px-4 sm:px-6 py-1.5 sm:py-2 bg-blue-500/30 backdrop-blur-sm rounded-full border border-blue-300/30">
              <span className="text-xs sm:text-sm font-semibold">
                Est. 2009 | Bhopal, Madhya Pradesh
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent px-2">
              About Payzon India
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl max-w-4xl mx-auto mb-6 sm:mb-8 text-gray-200 leading-relaxed px-4">
              An emerging corporate powerhouse from Central India, driving
              innovation and growth across technology, e-commerce, fintech,
              media, and social impact with unwavering commitment to excellence,
              sustainability, and customer satisfaction. Serving globally since
              2009, we focus on empowering businesses with secure, innovative
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-white text-blue-900 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                Our Story{" "}
                <ArrowRight className="inline w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </button>
              <button className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Payzon India Team"
                className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold">
                Who We Are
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Empowering Businesses Through Innovation
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                <strong>Payzon India Pvt Ltd</strong> is a dynamic software
                company headquartered in{" "}
                <strong>
                  B1, Patel Nagar, Raisen Road, Bhopal, Madhya Pradesh, Pin:
                  462022
                </strong>
                , specializing in innovative, scalable solutions that empower
                businesses to streamline operations, enhance productivity, and
                drive digital transformation. Founded in <strong>2009</strong>,
                we have evolved from a local IT services provider into a
                comprehensive ecosystem spanning:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        {feature.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Our commitment extends to global certifications and compliance,
                ensuring seamless worldwide operations. We provide 24/7 support
                and focus on sustainable development, digital safety, and
                combating cyber fraud with legal assistance.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                  Technology
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium">
                  E-commerce
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-medium">
                  Fintech
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-100 text-orange-700 rounded-full text-xs sm:text-sm font-medium">
                  Media
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-pink-100 text-pink-700 rounded-full text-xs sm:text-sm font-medium">
                  Social Impact
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Our Journey of Excellence
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              A decade of innovation, growth, and impact across multiple
              industries
            </p>
          </motion.div>
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className={`flex ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } items-center gap-8`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-5/12">
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {milestone.year}
                          </div>
                          <div className="text-blue-300">{milestone.icon}</div>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                        <Zap className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-6 sm:space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 sm:pl-12"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="absolute left-3 sm:left-4 top-6 sm:top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/20">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {milestone.year}
                      </div>
                      <div className="text-blue-300">{milestone.icon}</div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The principles that guide every decision and action at Payzon
              India
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group text-center p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Ecosystem */}
      <section className="relative py-12 sm:py-16 md:py-24">
        <img
          src="/images/bg-section-blog.jpg"
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
              Our Comprehensive Ecosystem
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
              End-to-end solutions across technology, commerce, and social
              impact
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 md:p-4 bg-gray-100 rounded-xl sm:rounded-2xl text-gray-700">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                    {service.category}
                  </h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Culture */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
              Our Team & Culture
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
                  A Diverse Team of  Experts
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                  Our success is driven by a passionate team of professionals
                  including software engineers, digital marketers, financial
                  experts, cyber security specialists, and social impact
                  leaders. We foster a collaborative culture that encourages
                  innovation, continuous learning, and work-life balance. Our
                  team is committed to delivering transformative solutions and
                  is trusted by industry leaders worldwide.
                </p>
               
              </div>
              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-lg py-4 px-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <Cpu className="w-8 h-8 text-blue-300" />
                    <h4 className="text-xl font-semibold">Innovation Labs</h4>
                  </div>
                  <p className="text-gray-300">
                    Dedicated R&D centers experimenting with AI, blockchain,
                    IoT, and emerging technologies to create future-driven
                    solutions.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg py-4 px-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <GraduationCap className="w-8 h-8 text-green-300" />
                    <h4 className="text-xl font-semibold">Learning Academy</h4>
                  </div>
                  <p className="text-gray-300">
                    Continuous training programs keeping our team at the
                    forefront of industry trends and technologies, including
                    skills in digital marketing and cyber security.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg py-4 px-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <Heart className="w-8 h-8 text-pink-300" />
                    <h4 className="text-xl font-semibold">
                      Community Outreach
                    </h4>
                  </div>
                  <p className="text-gray-300">
                    Pro-bono initiatives and skill development programs for
                    underprivileged youth and rural communities, through our
                    Sadaiv Yuva Foundation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to us for innovative solutions and partnerships
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Phone
              </h3>
              <p className="text-gray-600">+91 755 485 9540</p>
              <p className="text-gray-600">+91 755 492 3296</p>
            </motion.div>
            <motion.div
              className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Mail className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Email
              </h3>
              <p className="text-gray-600">info@payzonindia.com</p>
            </motion.div>
            <motion.div
              className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Building2 className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Address
              </h3>
              <p className="text-gray-600">B1, Patel Nagar, Raisen Road</p>
              <p className="text-gray-600">
                Bhopal, Madhya Pradesh, Pin: 462022
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PayzonAboutUsPage;
