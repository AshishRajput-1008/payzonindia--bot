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
            Welcome to <span className="text-blue-500">Payzon API</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200">
            Fintech Excellence — Secure, Fast APIs for Recharge, Payments & Verification Worldwide
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
                  alt="Fintech Security"
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
                    Secure Your Fintech Future
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
                    Integrate APIs 24/7 – Global Support Available
                  </p>
                  <motion.button
                    className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-400 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Get Started</span>
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
            {/* Blog-like Section for APIs */}
            <section className="rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 lg:h-96">
                <Image
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20230216170349/What-is-an-API.png"
                  alt="Fintech API integration"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
              <div className="p-8 prose prose-lg max-w-none text-gray-800">
                <motion.h1
                  className="text-4xl font-bold text-black mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Payzon APIs: Secure, Efficient, and Scalable Solutions for Fintech
                </motion.h1>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Payzon offers a comprehensive suite of APIs designed to empower businesses with fast, secure, and budget-oriented fintech solutions. Serving globally with a focus on trust and security, our APIs cover mobile recharges, utility bill payments, e-KYC verification, and e-commerce functionalities. With easy integration, high TPS capability, and robust security measures, Payzon APIs ensure seamless digital transactions available 24/7. Below, we detail each API category, including descriptions, features, benefits, integration, and security aspects.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Mobile Recharge, DTH & Data Card Recharge API
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  This API enables businesses to provide mobile recharge, DTH, and data card recharge services tailored to client needs and budgets. It supports various operators and ensures instant processing for enhanced user convenience.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <li>Supports mobile, DTH, and data card recharges across multiple operators.</li>
                  <li>User-friendly interface with interactive features and chat support.</li>
                  <li>High TPS capability for efficient transaction processing.</li>
                  <li>Full-time support for seamless integration.</li>
                </motion.ul>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Benefits include convenient digital access, improved user experience, and high system performance. Integration is straightforward into websites or apps, with dedicated team assistance. Security ensures protected data exchanges, preventing unauthorized access and attacks.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Utilities Bill Payments API
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  The Utilities Bill Payments API facilitates payments for a wide range of services, including landline, postpaid mobile, gas, insurance, electricity, and more, provided by private companies.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <li>Covers telecommunications, electrical utilities, natural gas, transportation, water, and wastewater services.</li>
                  <li>Instant processing and comprehensive reporting.</li>
                  <li>Compatible with digital platforms for online access.</li>
                </motion.ul>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Benefits encompass versatility for various utility types and enhanced convenience for users. Integration details align with Payzon's Fast API solutions. Security is maintained through safe data exchanges, though specifics for this API emphasize general protection measures.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Verification APIs (E-KYC, Aadhaar, GSTN, Live Face)
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Payzon's Verification APIs include E-KYC for customer identification, Aadhaar for identity verification, GSTN for business authentication, and Live Face for biometric checks, crucial for compliance and fraud prevention.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <li>E-KYC: Significant for anti-financial crime measures using biometric/demographic info.</li>
                  <li>Aadhaar Verification: Real-time confirmation via UIDAI portal with 99.9% accuracy.</li>
                  <li>GSTN Verification: Authenticates GSTIN with business details and MCA integration.</li>
                  <li>Live Face Verification: AI-powered with liveness detection, anti-spoofing, and fraud pattern recognition.</li>
                  <li>Blockchain support for crypto user verification to prevent duplicates.</li>
                </motion.ul>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Benefits include regulatory compliance, fraud detection, and secure onboarding. Integration is supported by technical teams for online platforms. Security features biometric checks, behavioral analysis, and government API integrations for high reliability.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  Shopping Portal API (E-commerce)
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  The Shopping Portal API enables e-commerce platforms like Payzon Shopy, allowing online purchases with rewards such as cashback, miles, or points via affiliate links.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <li>Supports seller onboarding, discount coupons, and product sales from a single platform.</li>
                  <li>Inventory management, payment gateway integration, and advanced analytics.</li>
                  <li>Reward systems for enhanced user engagement.</li>
                </motion.ul>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Benefits include increased user retention through incentives and scalable online presence. Integration aligns with digital services for e-commerce growth. Security ensures safe transactions, aligned with general API protections.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  How Payzon APIs Work
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Payzon APIs operate as digital payment methods available 24/7, even on holidays. Unlike traditional wallets, they directly withdraw and deposit funds from bank accounts using Virtual Payment Addresses, IFSC codes, MMID, Aadhaar, or one-time Virtual IDs. Each transaction requires MPIN verification for security, applicable to recharge, bill payments, and other APIs.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  Testimonials and Additional Insights
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  Users praise Payzon for building strong online presence and maintaining it through integrated tools. For verification, emphasis is on accuracy and fraud prevention. Overall, Payzon APIs are highlighted for their role in fintech innovation, with a focus on security and efficiency.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  Why Choose Payzon APIs?
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  With global reach, robust security, easy integration, and high performance, Payzon APIs provide trusted solutions for businesses. Our commitment to innovation ensures seamless, secure transactions, helping you focus on growth while we handle the technical backbone.
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