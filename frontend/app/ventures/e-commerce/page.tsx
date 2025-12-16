"use client";

import React from "react";
import { Phone, ArrowRight, ShoppingCart, Package, CreditCard, Clock, Truck, DollarSign, Tag, Gift } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const PayzonShoppyLandingPage: React.FC = () => {
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
            Welcome to <span className="text-blue-500">Payzon Shoppy</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200">
            Your Premier E-commerce Destination — Fresh Products, Low Prices & Seamless Shopping
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

              {/* Promo & Delivery Card */}
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/images/bg-info-box1.jpg"
                  alt="Shopping Promotion"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center bg-black/20">
                  <motion.div
                    className="bg-blue-500 text-white px-4 py-2 rounded-full mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Tag className="w-5 h-5 inline mr-2" /> WOODVEG25
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Save Up to 25% Today!
                  </h3>
                  <p className="text-white text-lg mb-6">
                    Free Delivery on Orders Over £30
                  </p>
                  <motion.button
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-500 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Shop Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.aside>

          {/* Main Content Area - Takes 8 columns */}
          <motion.main
            className="lg:col-span-8 space-y-8 prose prose-lg max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Blog-like Section for E-commerce Services */}
            <section className="rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 lg:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop"
                  alt="E-commerce shopping"
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
                  Payzon Shoppy: Redefining E-commerce Excellence with Comprehensive Services
                </motion.h1>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Payzon Shoppy is more than just an online store—it’s a dynamic e-commerce ecosystem designed to deliver unparalleled convenience, quality, and value. As a flagship offering of Payzon India, our e-commerce services combine cutting-edge technology, customer-centric solutions, and a commitment to sustainability to create a shopping experience that stands out. From sourcing fresh products daily to offering secure payments, round-the-clock support, and exclusive promotions, we empower shoppers with a seamless and rewarding journey. Whether you're seeking everyday essentials or unique finds, Payzon Shoppy is your trusted partner in modern commerce.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  About Payzon Shoppy’s E-commerce Services
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  At the heart of Payzon Shoppy lies a robust e-commerce platform that integrates advanced technology with a deep understanding of customer needs. Our services are built on four pillars: affordability, quality, security, and accessibility. By leveraging Payzon India’s expertise in IT Services, Digital Marketing, and Fintech Solutions, we’ve created a marketplace that not only offers a diverse range of products but also ensures a secure, user-friendly, and cost-effective shopping experience. Our commitment to daily fresh products, competitive pricing, and exceptional support has made us a preferred choice for over 100,000 customers, with a growing network of suppliers and partners.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
                  alt="Payzon Shoppy marketplace"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
                <motion.div
                  className="bg-blue-50 p-6 rounded-lg mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <ShoppingCart className="w-6 h-6 text-blue-500 inline mr-2" />
                  <span className="font-semibold text-blue-900">Milestone:</span> Served 100,000+ customers with a 95% satisfaction rate across 1 million+ orders.
                </motion.div>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Competitive Pricing: Lower Costs, Higher Value
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Payzon Shoppy’s commitment to “Low Prices Than in Other Stores” is driven by our direct-to-consumer model, which eliminates intermediaries and reduces costs. We conduct daily price comparisons with competitors to ensure our customers get the best deals on groceries, electronics, clothing, and more. Our AI-driven pricing algorithms optimize costs, offering bulk discounts and seasonal promotions that make shopping affordable for all. In 2024 alone, we saved customers over £1 million through competitive pricing, making Payzon Shoppy the go-to platform for budget-conscious shoppers.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <li><strong>Dynamic Pricing:</strong> Real-time adjustments to offer the lowest prices in the market.</li>
                  <li><strong>Bulk Savings:</strong> Discounts on larger orders to maximize value for families and businesses.</li>
                  <li><strong>Transparency:</strong> Clear pricing with no hidden fees or surprise charges at checkout.</li>
                </motion.ul>
                <Image
                  src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=400&fit=crop"
                  alt="Competitive pricing deals"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  Fresh Products Daily: Quality You Can Count On
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Our “Fresh Products Every Day” promise ensures that every item, from fruits and vegetables to bakery goods, is sourced fresh daily from trusted suppliers. Partnering with over 5,000 farmers and producers, we maintain a rigorous quality control process, including temperature-controlled storage and rapid delivery systems. Our blockchain-enabled supply chain provides transparency, allowing customers to trace the origin of their purchases. This focus on freshness has reduced waste by 30% and earned us a 4.8/5 rating for product quality from customers.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <li><strong>Freshness Guarantee:</strong> Daily restocking ensures peak quality for perishables.</li>
                  <li><strong>Eco-Friendly Practices:</strong> Sustainable packaging to preserve freshness and reduce environmental impact.</li>
                  <li><strong>Traceability:</strong> Blockchain technology to verify product origins and quality.</li>
                </motion.ul>
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop"
                  alt="Fresh products delivery"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Secure Payments: Shop with Confidence
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  Payzon Shoppy’s “Safe Payment With Any Bank Card” service integrates advanced fintech solutions to protect every transaction. Supporting major cards like Visa, Mastercard, and regional payment methods, our platform uses 256-bit encryption and PCI DSS compliance to safeguard financial data. Real-time fraud detection, powered by AI, monitors transactions, reducing fraud incidents by 98%. Our one-click checkout for returning customers streamlines the process, ensuring speed without compromising security.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  <li><strong>Universal Compatibility:</strong> Accepts all major bank cards and digital wallets.</li>
                  <li><strong>Advanced Security:</strong> Multi-layered encryption and fraud monitoring for peace of mind.</li>
                  <li><strong>Seamless Checkout:</strong> Fast, secure payment options for a frictionless experience.</li>
                </motion.ul>
                <Image
                  src="https://cdn.bap-software.net/2024/02/27234805/gateway1.jpg"
                  alt="Secure payment processing"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  24/7 Customer Support: Always By Your Side
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  Our “24/7 Support Always Be There for You” commitment ensures that help is available whenever you need it. With a team of 200+ support specialists, we offer assistance via live chat, email, and phone, resolving 90% of queries within 10 minutes. Our AI-powered chatbot provides instant answers to common questions, while personalized support tickets ensure complex issues are tracked and resolved efficiently. This dedication to customer service has earned us a 4.9/5 rating for support responsiveness.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  <li><strong>Multi-Channel Support:</strong> Reach us via chat, email, or phone, anytime.</li>
                  <li><strong>AI Assistance:</strong> Instant answers through our intelligent chatbot for quick resolutions.</li>
                  <li><strong>Proactive Follow-Ups:</strong> Dedicated support tickets to ensure no issue goes unresolved.</li>
                </motion.ul>
                <Image
                  src="https://www.deskera.com/blog/content/images/2021/06/-customer-service-tips-min.jpg"
                  alt="Customer support team"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />

               
               

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.1 }}
                >
                  Free Delivery: Convenience at No Extra Cost
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                >
                  With our “Free Delivery To Your Door” on orders over £30, Payzon Shoppy makes shopping effortless and cost-effective. Our logistics network, optimized by AI-driven route planning, ensures timely deliveries with real-time tracking. Using eco-friendly packaging, we’ve reduced delivery-related emissions by 25%, serving 80,000+ customers with free shipping. Flexible delivery windows cater to busy lifestyles, making convenience a cornerstone of our service.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.3 }}
                >
                  <li><strong>Reliable Logistics:</strong> AI-optimized delivery routes for speed and efficiency.</li>
                  <li><strong>Sustainable Packaging:</strong> Eco-conscious materials to protect products and the planet.</li>
                  <li><strong>Flexible Scheduling:</strong> Choose delivery times that suit your needs.</li>
                </motion.ul>
                <Image
                  src="https://www.shutterstock.com/image-vector/fast-delivery-service-concept-courier-260nw-2529822853.jpg"
                  alt="Free delivery service"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                >
                  Why Payzon Shoppy Stands Out
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                >
                  Payzon Shoppy’s e-commerce services are designed to deliver unmatched value through a combination of competitive pricing, fresh products, secure payments, 24/7 support, exclusive promotions, and free delivery. Backed by Payzon India’s technological expertise, our platform integrates AI, blockchain, and fintech innovations to create a seamless and trustworthy shopping experience. With a focus on sustainability and customer satisfaction, we’ve built a community of loyal shoppers who rely on us for quality and convenience.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.6 }}
                >
                  <li><strong>Technology-Driven:</strong> AI and blockchain for personalized shopping and transparency.</li>
                  <li><strong>Customer-Centric:</strong> 24/7 support and easy returns for a hassle-free experience.</li>
                  <li><strong>Sustainable Focus:</strong> Eco-friendly practices across sourcing, packaging, and delivery.</li>
                </motion.ul>

                <motion.h2
                  className="text-3xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.7 }}
                >
                  Join the Payzon Shoppy Community
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.8 }}
                >
                  Whether you’re a first-time shopper or a loyal customer, Payzon Shoppy invites you to experience e-commerce done differently. Take advantage of our WOODVEG25 promo, enjoy free delivery on orders over £30, and shop with confidence knowing our team is here 24/7. Join our growing community of savvy shoppers and discover why Payzon Shoppy is the future of online retail.
                </motion.p>
                <motion.button
                  className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-600 transition-all duration-300 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Shopping <Gift className="w-5 h-5" />
                </motion.button>
              </div>
            </section>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default PayzonShoppyLandingPage;