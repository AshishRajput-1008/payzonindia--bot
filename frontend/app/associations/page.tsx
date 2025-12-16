"use client";

import React from "react";
import { Phone, CheckCircle, ArrowRight, Video, Newspaper, Users, Shield, Zap, Calendar, PlayCircle, DollarSign, BarChart3 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const PyazonLandingPage: React.FC = () => {
  const services = [
    "Media",
    "Social Walfare",
    "Finance Audits",
    
  ];

  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
        </svg>
      ),
      title: "Latest Video Coverage",
      description: "Watch live and on-demand video news on our channel, keeping you connected to every major event.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z" />
        </svg>
      ),
      title: "In-Depth Political Analysis",
      description: "Expert articles and opinions providing deep insights into political events.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z" />
        </svg>
      ),
      title: "Crypto Updates",
      description: "Latest news and trends on blockchain, cryptocurrency, and digital finance.",
    },
  ];

  const mediaContent = [
    {
      title: "The Future of Sustainable Living",
      subtitle: "Eco-Friendly Lifestyle",
      description: "How adopting an eco-friendly lifestyle can help protect Earth's resources and ensure a clean, green, and balanced future for the next generations.",
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      author: "Sadaiv Satya News Team",
      date: "2 hours ago",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop"
    },
    {
      title: "Can There Be a War Between America and Pakistan?",
      subtitle: "International Relations",
      description: "Amid global tensions, an analysis of potential conflicts between the US and Pakistan. Expert opinions and historical context.",
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      author: "Political Expert",
      date: "1 day ago",
      image: "https://images.unsplash.com/photo-1568033105626-3f9c12e5a5e9?w=800&h=600&fit=crop"
    },
    {
      title: "New Heights in Crypto Market",
      subtitle: "Digital Currency Trends",
      description: "Recent surges in Bitcoin and other cryptocurrencies, with advice for investors.",
      icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
      author: "Financial Analyst",
      date: "Just now",
      image: "https://images.unsplash.com/photo-1640630825079-32f4a85decd5?w=800&h=600&fit=crop"
    },
    {
      title: "Latest Business World News",
      subtitle: "Business Updates",
      description: "Recent developments in the Indian economy, stock market trends, and corporate news.",
      icon: <DollarSign className="w-12 h-12 text-blue-500" />,
      author: "Business Desk",
      date: "3 hours ago",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <img
          src="/images/bg-pagetitle.jpg"
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Welcome to <span className="text-blue-500">Sadaiv Satya News</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200">
            Pursuit of Truth — With Video News, Political Articles, Business, and Crypto Updates
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Takes 4 columns */}
          <motion.aside
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-48 space-y-8">
              {/* Services Menu */}
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-700/50">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">
                  Our Categories
                </h2>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-blue-700 hover:bg-blue-600 px-5 py-3 text-white rounded-full font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/images/bg-info-box1.jpg"
                  alt="News Team"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
                  <motion.svg
                    className="w-16 h-16 text-blue-300 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.59 21 12 21S20 19.21 20 17V7C20 4.79 16.42 3 12 3M18 17C18 17.5 15.87 19 12 19S6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16S16.39 15.55 18 14.77V17M18 12.45C16.7 13.4 14.42 14 12 14C9.58 14 7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11C14.39 11 16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5C15.87 5 18 6.5 18 7S15.87 9 12 9Z" />
                  </motion.svg>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Contact for News?
                  </h3>
                  <div className="mb-4 flex flex-col items-center">
                    <div className="flex items-center text-white mb-2">
                      <Phone className="w-6 h-6 mr-2" />
                      <span className="text-2xl font-semibold">
                        +91 755 485 9540
                      </span>
                    </div>
                  </div>
                  <p className="text-white text-lg mb-6">
                    Or reach out via our contact form:
                  </p>
                  <motion.button
                    className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-400 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.aside>

          {/* Main Content Area - Takes 8 columns */}
          <motion.main
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Section */}
            <section className="rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 lg:h-96">
                <Image
                  src="/images/Sadaiv MEDIA 1.png"
                  alt="News broadcast"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-red-900/10"></div>
              </div>
              <div className="p-8">
                <motion.h1
                  className="text-4xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Sadaiv Satya News
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Sadaiv Satya News, a trusted media platform under the Payzon India umbrella, delivers unbiased reporting and insightful analysis across multiple fields. We specialize in video news, political articles, business updates, and crypto trends, covering topics like environmental sustainability, international relations, and economic developments. Our mission is to empower informed decisions with real-time updates and in-depth content. As part of Payzon India, we align with their vision of providing innovative digital solutions, ensuring accessibility and reliability for our audience.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    className="bg-blue-900 p-6 rounded-lg relative overflow-hidden hover:bg-blue-500 transition-all duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600 rounded-full transform translate-x-8 -translate-y-8"></div>
                    <div className="relative flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-blue-100 font-semibold text-lg">
                          Video News
                        </h3>
                        <p className="text-blue-200 text-sm">
                          View all videos and get live updates.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="bg-blue-900 p-6 rounded-lg relative overflow-hidden hover:bg-blue-500 transition-all duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600 rounded-full transform -translate-x-10 translate-y-10"></div>
                    <div className="relative flex items-center gap-3">
                      <Newspaper className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-blue-100 font-semibold text-lg">
                          Political Articles
                        </h3>
                        <p className="text-blue-200 text-sm">
                          In-depth analysis and expert opinions.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Featured Stories Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {mediaContent.map((story, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="relative h-48">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/20"></div>
                    <div className="absolute top-4 left-4">
                      {React.cloneElement(story.icon, { className: "text-white drop-shadow-lg" })}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{story.subtitle}</h3>
                    <h4 className="text-xl font-extrabold text-blue-600 mb-2">{story.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{story.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{story.author}</span>
                      <span><Calendar className="w-4 h-4 inline mr-1" /> {story.date}</span>
                    </div>
                    <motion.button
                      className="text-blue-500 font-semibold flex items-center gap-2 hover:text-blue-700 mt-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      Read Full Story <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </section>

            {/* We Deliver Truth Section */}
            <motion.section
              className="rounded-2xl shadow-xl p-8 bg-gradient-to-r from-blue-50 to-indigo-50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-center">
                <motion.div
                  className="md:w-64 flex-shrink-0"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
  src="/images/Sadaiv MEDIA 1.png"
  alt="Media team"
  width={400}
  height={300}
  className="w-full rounded-lg"
/>

                </motion.div>
                <div className="flex-1 text-center md:text-left">
                  <motion.h2
                    className="text-3xl font-bold text-black mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    About Sadaiv Satya News
                  </motion.h2>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-gray-700 mr-3 mt-1 text-lg">•</span>
                      <span>
                        Part of Payzon India, Sadaiv Satya News focuses on delivering credible news in video news, political analysis, business updates, and crypto trends.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-700 mr-3 mt-1 text-lg">•</span>
                      <span>
                        We provide real-time coverage and expert insights on critical issues like sustainability, global politics, and financial markets, ensuring truth and transparency.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-blue-700/50">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-900/30 transition-all duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="bg-blue-900 p-3 rounded-full flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-700 text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-gray-700">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default PyazonLandingPage;