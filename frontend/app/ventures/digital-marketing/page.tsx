"use client";

import React from "react";
import { Phone, CheckCircle, ArrowRight, Megaphone, BadgeCheck, Hash, BarChart3, Truck, DollarSign, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const PyazonLandingPage: React.FC = () => {
  const services = [
    "IT Services",
    "Digital Marketing",
    "E-commerce",
    "Fintech Solutions",
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
      title: "Data-Driven Strategies",
      description: "Leverage analytics and insights to optimize campaigns for maximum impact.",
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
      title: "Targeted Campaigns",
      description: "Reach your ideal audience with precision targeting across multiple platforms.",
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
      title: "Measurable ROI",
      description: "Track performance with detailed reports to ensure every investment counts.",
    },
  ];

  // Detailed blog-style content focused solely on Digital Marketing, sourced and expanded from https://www.payzonmarketing.com/
  // This includes all aspects (APIs/services) like PR Services, Meta Verification, DLT Registration, SEO/SMO, Drop Shipping, Paid AD Campaigns, Lead Generation, and Business Booster.
  // Structured as a long-form blog post with sections, headings, paragraphs for a narrative flow, no cards/grids.

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
            Welcome to <span className="text-blue-500">Payzon</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200">
            Digital Marketing Excellence — Elevate Your Brand & Drive Growth
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
                  Our Ventures
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
                  alt="Business People Silhouette"
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
                    Need Assistance?
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
                    <span>Contact</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.aside>

          {/* Main Content Area - Takes 8 columns: Blog-Style Digital Marketing Page */}
          <motion.main
            className="lg:col-span-8 space-y-8 prose prose-lg max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Section for Digital Marketing Blog */}
            <section className="rounded-2xl shadow-xl overflow-hidden bg-white">
              <div className="relative h-64 lg:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop"
                  alt="Digital marketing landscape"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-blue-900/30"></div>
              </div>
              <div className="p-8">
                <motion.h1
                  className="text-4xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Understanding Digital Marketing: A Comprehensive Guide from Payzon Marketing
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  In today's fast-paced digital world, digital marketing has become the cornerstone of business growth. At Payzon Marketing, we specialize in crafting strategies that not only elevate your brand but also drive measurable results. This in-depth guide explores the intricacies of digital marketing, drawing from our expertise in services like SEO, paid campaigns, PR, and more. Whether you're a startup or an established enterprise, understanding these elements can transform how you connect with your audience.
                </motion.p>
                <motion.div
                  className="bg-blue-50 p-6 rounded-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 inline-block mr-2" />
                  <span className="text-green-700 font-semibold">Key Insight:</span> Digital marketing isn't just about ads—it's about building authentic relationships through data-driven approaches.
                </motion.div>
              </div>
            </section>

            {/* Blog Section 1: Introduction to Digital Marketing */}
            <section className="bg-white rounded-2xl shadow-xl p-8">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                What is Digital Marketing and Why Does It Matter?
              </motion.h2>
              <motion.p
                className="text-gray-700 text-base leading-relaxed mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Digital marketing encompasses all marketing efforts that use the internet or electronic devices to promote products and services. Unlike traditional marketing, it allows for real-time tracking, personalization, and scalability. At Payzon Marketing, we leverage channels like search engines, social media, email, and mobile apps to reach billions of users worldwide. According to industry reports, businesses that invest in digital marketing see up to 2.8 times more revenue growth than those that don't. Our approach ensures your campaigns are not only visible but also convertible, focusing on ROI from day one.
              </motion.p>
              <motion.p
                className="text-gray-700 text-base leading-relaxed mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                From optimizing your online presence to running targeted ads, digital marketing is about meeting customers where they are—online. Payzon's integrated solutions, including SEO/SMO services and paid ad campaigns, help businesses skyrocket their visibility and engagement.
              </motion.p>
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
                alt="Digital marketing channels"
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </section>

            {/* Blog Section 2: Core Pillars of Digital Marketing at Payzon */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                The Core Pillars: SEO, SMO, and Performance Marketing
              </motion.h2>
              <motion.p
                className="text-gray-700 text-base leading-relaxed mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                At the heart of digital marketing are Search Engine Optimization (SEO) and Social Media Optimization (SMO). SEO involves enhancing your website's visibility on search engines like Google through keyword research, on-page optimization, and link-building strategies. Payzon's SEO/SMO services are tailored to drive organic traffic, ensuring your brand ranks higher without constant ad spend. For instance, we analyze user intent and competitor strategies to create content that resonates, leading to sustained growth.
              </motion.p>
              <motion.p
                className="text-gray-700 text-base leading-relaxed mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Complementing this is performance marketing, particularly our Paid AD Campaigns. We design data-driven ads on platforms like Google Ads, Facebook, and Instagram, optimizing for clicks, conversions, and ROI. By A/B testing creatives and targeting demographics precisely, we've helped clients achieve up to 300% ROI. Lead Generation ties into this, using targeted campaigns and analytics to fuel sales pipelines with qualified prospects.
              </motion.p>
              <BarChart3 className="w-12 h-12 text-blue-500 mx-auto mb-6" />
              <motion.p
                className="text-gray-700 text-base leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Our Business Booster package integrates these pillars with branding and automation, accelerating growth for startups by combining SEO, ads, and lead gen into a seamless strategy.
              </motion.p>
            </section>

            {/* Blog Section 3: Advanced Services - PR, Verification, and Compliance */}
            <section className="bg-white rounded-2xl shadow-xl p-8">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Advanced Digital Strategies: PR, Verification, and Compliance in the Digital Age
              </motion.h2>
              <motion.p
                className="text-gray-700 text-base leading-relaxed mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Beyond basics, digital marketing requires trust-building tools like PR Services and Meta Verification. Our PR services amplify your brand through compelling stories, media relations, press releases, and influencer partnerships. We've navigated crises for clients, turning challenges into opportunities for visibility. Meta Verification Services secure the coveted blue tick on platforms like Facebook and Instagram, boosting authenticity and preventing impersonation—essential for credibility in a crowded digital space.
              </motion.p>
              <motion.p
                className="text-gray-700 text-base leading-relaxed mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                For seamless campaigns, DLT Registration ensures compliance with telecom regulations for SMS and voice marketing in India. We handle operator onboarding, template approvals, and end-to-end processes, allowing you to focus on strategy without legal hurdles. These services integrate with our e-commerce offerings, like Drop Shipping, where we set up inventory-free stores with sourcing, fulfillment, and marketing to scale your online presence effortlessly.
              </motion.p>
              <div className="flex justify-center mb-6">
                <Megaphone className="w-12 h-12 text-blue-500 mr-4" />
                <BadgeCheck className="w-12 h-12 text-blue-500 mr-4" />
                <Hash className="w-12 h-12 text-blue-500" />
              </div>
              <motion.p
                className="text-gray-700 text-base leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Together, these advanced APIs (aspects) form a robust digital marketing ecosystem at Payzon, ensuring compliance, trust, and amplified reach.
              </motion.p>
            </section>

            {/* Blog Section 4: Measuring Success and Future Trends */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Measuring Success: ROI, Analytics, and Emerging Trends
              </motion.h2>
              <motion.p
                className="text-gray-700 text-base leading-relaxed mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Success in digital marketing is quantifiable. We provide detailed reports on metrics like CTR, conversion rates, and customer acquisition costs. Our data-driven strategies ensure every campaign is optimized for maximum impact, with tools for real-time adjustments. Looking ahead, trends like AI personalization, voice search, and Web3 integration are shaping the future—Payzon is at the forefront, incorporating these into our services for forward-thinking clients.
              </motion.p>
              <DollarSign className="w-12 h-12 text-blue-500 mx-auto mb-6" />
              <motion.p
                className="text-gray-700 text-base leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                By focusing on targeted campaigns and measurable ROI, Payzon helps businesses thrive in the digital landscape.
              </motion.p>
            </section>

            {/* Closing Section: Call to Action */}
            <section className="bg-blue-900 text-white rounded-2xl shadow-xl p-8 text-center">
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Ready to Elevate Your Digital Marketing?
              </motion.h2>
              <motion.p
                className="text-blue-100 text-base leading-relaxed mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Partner with Payzon Marketing for expert digital strategies that drive growth. Contact us today to get started.
              </motion.p>
              <motion.button
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 mx-auto hover:bg-blue-400 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </section>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default PyazonLandingPage;