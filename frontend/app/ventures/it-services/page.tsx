"use client";

import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const PyazonLandingPage: React.FC = () => {
  const services = [
    "IT Services",
    "Digital Marketing",
    "E-commerce",
    "Fintech Solutions",
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
            Welcome to <span className="text-blue-500">Payzon</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200">
            IT Services Excellence — Empower Your Business with Innovative Solutions
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

          {/* Main Content Area - Takes 8 columns */}
          <motion.main
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Blog-like Section for IT Services */}
            <section className="rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 lg:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=400&fit=crop"
                  alt="IT Services"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-blue-900/30"></div>
              </div>
              <div className="p-8 prose prose-lg max-w-none text-gray-800">
                <motion.h1
                  className="text-4xl font-bold text-black mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  IT Services at Payzon: Empowering Your Digital Transformation
                </motion.h1>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  At Payzon IT Services, we specialize in delivering cutting-edge IT solutions designed to help businesses build smarter, scale faster, and secure their operations in the digital era. With over 10 years of experience, our IT services are tailored to meet the unique needs of startups, enterprises, and everything in between. We are committed to delivering secure, fully functional, high-performance, and portable development to our clients. Below, we dive into the details of our comprehensive IT offerings, highlighting descriptions, features, benefits, and how they can drive your business forward.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Web & App Development Solutions
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Build Smarter, Scale Faster. Our custom web and mobile app solutions are tailored to your business needs—responsive, secure, and future-ready for the digital era. We focus on creating user-centric applications that enhance user experience, integrate seamlessly with existing systems, and support scalability as your business grows. Whether it's a simple website or a complex mobile app, our development team uses the latest technologies like React, Next.js, Flutter, and more to deliver high-performance solutions.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <li>Custom solutions for web and mobile applications.</li>
                  <li>Responsive design for various devices.</li>
                  <li>Secure and scalable architecture.</li>
                </motion.ul>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Benefits include reduced time-to-market, improved efficiency, and a competitive edge through innovative features. Part of Payzon's commitment to delivering secure, fully functional, high-performance, and portable development solutions.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Ready-Made B2B API Portal for Startups
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Seamless Integrations, Infinite Possibilities. Empower your business with powerful APIs for payments, verification, recharges, and more—easy integration, secure, and scalable. Our ready-made B2B API portals are designed for startups looking to quickly incorporate advanced functionalities without building from scratch.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <li>APIs for payments, verification, and recharges.</li>
                  <li>Seamless integration capabilities.</li>
                  <li>Secure and scalable infrastructure.</li>
                </motion.ul>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Benefits encompass faster development cycles, cost savings, and the ability to focus on core business operations while leveraging reliable APIs. Included under enterprise-grade solutions, with documentation, authentication, rate limiting, and analytics for effective monetization of data and services.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Complete Shopping Portal
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Shop Smarter, Experience Better. Our feature-rich eCommerce portals come with secure payments, smooth navigation, and personalized shopping experiences that customers love. Built on platforms like Shopify, WooCommerce, or custom frameworks, these portals include inventory management, AI-driven recommendations, and multi-vendor support.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <li>Secure payment gateway integration.</li>
                  <li>Smooth navigation and user experience.</li>
                  <li>Personalized shopping features.</li>
                  <li>Inventory management and advanced analytics.</li>
                </motion.ul>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Benefits include increased customer retention, higher conversion rates, and seamless integration with logistics and payment gateways for a hassle-free online shopping ecosystem. Perfect for e-commerce businesses looking to grow, with full-featured platform capabilities.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  Cyber Security
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Fortify Your Future, Secure Your Now. Protect your business with cutting-edge cybersecurity solutions—advanced firewalls, real-time threat detection, and proactive monitoring to keep your data safe. Our services include vulnerability assessments, penetration testing, endpoint protection, and compliance consulting (e.g., GDPR, HIPAA).
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <li>Advanced firewalls.</li>
                  <li>Real-time threat detection.</li>
                  <li>Proactive monitoring.</li>
                </motion.ul>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Benefits feature minimized risk of data breaches, enhanced trust from customers, and continuous protection against evolving threats like ransomware and phishing attacks. Part of Payzon's world-class IT services, focused on delivering secure solutions.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  KYC Verification Services
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Trust Built Fast, Verified with Ease. Streamline KYC and compliance with our secure, automated verification services—fast, reliable, and built for trust. Next-generation verification infrastructure powered by AI, blockchain security, and government API integration. Experience lightning-fast authentication with military-grade security protocols.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <li>Aadhaar Verification: Instant Aadhaar verification with OTP-based authentication. Verify identity documents in real-time with 99.9% accuracy using government-approved APIs and advanced biometric matching.</li>
                  <li>PAN Verification: Real-time PAN card verification with instant status updates. Cross-verify details with Income Tax Department database for complete compliance and fraud detection.</li>
                  <li>GST Verification: Comprehensive GSTIN verification with business details validation. Confirm registration status, business information, and compliance records instantly with MCA integration.</li>
                  <li>Live Face Verification: AI-powered biometric face verification with advanced liveness detection. Secure authentication using anti-spoofing technology and deep learning for fraud prevention.</li>
                  <li>Corporate Verification: Verify corporate identity with CIN, DIN, and comprehensive company registration details. Fully integrated with MCA database for business legitimacy and compliance verification.</li>
                  <li>e-KYC Services: Seamless digital KYC with multi-document verification, biometric authentication, and full regulatory compliance for efficient customer onboarding and risk management.</li>
                </motion.ul>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Benefits include enhanced security, regulatory compliance, and efficient onboarding processes.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  Dedicated Web Hosting Services
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  Unbreakable Uptime, Unmatched Reliability. Power your business with secure, scalable, and lightning-fast hosting solutions designed for 24/7 availability and peak performance. We offer managed hosting with automatic backups, SSL certificates, and DDoS protection.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  <li>High uptime and reliability.</li>
                  <li>Scalable infrastructure.</li>
                  <li>Lightning-fast performance.</li>
                </motion.ul>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  Benefits include superior website speed, reduced downtime, and the flexibility to handle traffic spikes without compromising performance. Part of Payzon's commitment to enterprise-grade hosting for digital success.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  B2B Courier API/Portal
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  Transform Your Business, Embrace the Future. Empower your enterprise with AI-driven tools, cloud solutions, and next-gen applications for unmatched efficiency and growth. Our B2B courier APIs integrate with major logistics providers, offering real-time tracking, automated routing, and analytics dashboards.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  <li>Real-time tracking.</li>
                  <li>Route optimization.</li>
                  <li>Automated dispatch.</li>
                </motion.ul>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  Benefits include streamlined supply chain operations, cost optimization, and improved delivery accuracy for e-commerce and logistics businesses. Included under logistics solutions, empowering enterprises with advanced tools.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  Premium Hosting Solutions
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  Enterprise-grade hosting solutions designed to power your digital success with unmatched performance and reliability.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-4 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  <li><strong>Forex VPS Server:</strong> Optimized VPS hosting for forex trading with ultra-low latency, stable connectivity, and dedicated resources to ensure fast execution of trades.</li>
                  <li><strong>Cyber Panel VPS Server:</strong> Lightweight VPS hosting with CyberPanel control panel, built-in security, and easy server management for websites and applications.</li>
                  <li><strong>C-Panel VPS Server:</strong> Reliable VPS hosting with C-Panel integration, automated tools, and advanced features for hassle-free website and application management.</li>
                  <li><strong>N8N VPS Server:</strong> Custom VPS hosting for N8N workflow automation, offering scalable performance, dedicated resources, and secure integrations.</li>
                  <li><strong>Media Server:</strong> Optimized media servers with scalable storage, high-speed delivery, and global CDN for seamless video, audio, and content streaming.</li>
                  <li><strong>Cloud Server:</strong> Flexible cloud infrastructure with auto-scaling, load balancing, and global availability to power modern web applications and businesses.</li>
                  <li><strong>MS SQL Database Server:</strong> Enterprise-grade MS SQL Database Servers with high performance, automated backups, and advanced security for mission-critical database applications.</li>
                </motion.ul>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  These premium solutions ensure that your IT infrastructure is robust, scalable, and tailored to specific industry needs, providing benefits like enhanced security, optimal performance, and cost-effective resource management.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  Revolutionary Portal Solutions
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                >
                  If someone wants to start their own business and needs a portal, we have ready-made portal solutions available for immediate use. Transform your business with our cutting-edge portal solutions, featuring advanced technology, seamless integration, and exceptional user experiences designed to drive growth. Choose the portal that suits your needs and get started today!
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-4 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                >
                  <li><strong>Travel Portal:</strong> Complete travel booking platform with flight, hotel, and package reservations. Real-time inventory, secure payments, and seamless user experience for travel agencies and customers.</li>
                  <li><strong>Recharge Portal:</strong> Multi-operator mobile recharge and bill payment solution. Instant processing, competitive margins, and comprehensive reporting for retailers and distributors.</li>
                  <li><strong>Shopping Portal:</strong> Full-featured e-commerce platform with inventory management, payment gateway integration, and advanced analytics. Perfect for businesses scaling their online presence.</li>
                  <li><strong>B2B API Portal:</strong> Enterprise-grade API management platform with documentation, authentication, rate limiting, and analytics. Monetize your data and services effectively.</li>
                  <li><strong>B2B Courier Services:</strong> Enterprise-grade courier management platform with real-time tracking, route optimization, and automated dispatch. Streamline your logistics operations.</li>
                </motion.ul>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                >
                  These portals offer ready-made solutions for quick deployment, enabling businesses to launch operations efficiently with advanced features and integrations.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.1 }}
                >
                  Why Choose Payzon IT Services?
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                >
                  With a focus on innovation and reliability, Payzon IT Services stands out by offering end-to-end solutions that are secure, scalable, and customized. Our team of experts ensures proactive support, cutting-edge technology adoption, and a commitment to delivering superior results. Whether you're a startup or an enterprise, our IT services help you achieve digital excellence without the hassle. Turn your ideas into reality with our exceptional software design and development team. Join the growing list of clients who have leveraged our expertise to scale their business.
                </motion.p>
              </div>
            </section>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default PyazonLandingPage;