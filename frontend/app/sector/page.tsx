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
  Gift,
  Sparkles,
  Package,
  Shirt,
  Smartphone,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const PayzonSectorsPage: React.FC = () => {
  const services = [
    "IT Services",
    "Cyber Security",
    "Skills Development",
    "Organic Farming",
    "Toys Industries",
    "Artificial Jewellery",
    "Spices & Vegetables",
    "Divine Industries",
    "Clothing",
    "Electronics",
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
            Payzon Working Sectors
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200">
            Powering Innovation Across Diverse Industries — From Technology to
            Sustainable Commerce
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
                  Our Initiatives
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
                  alt="Business Partnership"
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
                    Partner with Us?
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
                    Explore opportunities in any of our sectors:
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

          {/* Main Content Area - Takes 8 columns: Blog-like Detailed Article on Payzon Sectors */}
          <motion.main
            className="lg:col-span-8 space-y-8 prose prose-lg max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Section - Integrated into Blog Introduction */}
            <section className="rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 lg:h-72 flex items-center justify-center ">
                <Image
                  src="/images/logo.png"
                  alt="Cyber security awareness"
                  height={400}
                  width={300}
                  className="object-contain"
                  priority
                />
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-blue-900/30"></div> */}
              </div>
              <div className="p-8">
                <motion.h1
                  className="text-4xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Exploring Payzon India’s Diverse Sectors: Pioneering
                  Innovation and Sustainability
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Payzon India stands as a beacon of innovation, seamlessly
                  blending technology with sustainable commerce to empower
                  businesses and communities across a spectrum of industries.
                  From cutting-edge IT services and robust cyber security
                  solutions to skills development and specialized e-commerce
                  platforms, Payzon’s ecosystem is designed to foster growth,
                  inclusivity, and resilience. Our sectors—ranging from organic
                  farming to artificial jewellery, toys, clothing, and
                  electronics—reflect a commitment to bridging traditional
                  craftsmanship with modern digital infrastructure. By
                  integrating AI, blockchain, and sustainable practices, we
                  create value that transcends industries, driving economic
                  progress while prioritizing environmental and social impact.
                </motion.p>
              </div>
            </section>

            {/* Blog-like Detailed Content: Continuous Article on Payzon Sectors */}
            <article className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              {/* About Payzon India Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  About Payzon India: A Multi-Sector Powerhouse
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Payzon India is more than a conglomerate; it’s a dynamic
                  ecosystem that integrates technology, commerce, and social
                  good to create a sustainable future. Operating across ten key
                  sectors—IT Services, Cyber Security, Skills Development,
                  Organic Farming, Toys Industries, Artificial Jewellery, Spices
                  & Vegetables, Divine Industries, Clothing, and Electronics—we
                  empower local artisans, farmers, and entrepreneurs while
                  leveraging advanced digital solutions. Our integrated approach
                  ensures that each sector benefits from a robust technological
                  backbone, enabling seamless operations, scalability, and
                  market reach. By fostering innovation and sustainability,
                  Payzon India is redefining how industries collaborate to drive
                  economic and societal progress.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
                  alt="Payzon India ecosystem"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
                <motion.div
                  className="bg-blue-50 p-6 rounded-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <CheckCircle className="w-6 h-6 text-blue-500 inline mr-2" />
                  <span className="font-semibold text-blue-900">
                    Core Value:
                  </span>{" "}
                  Innovation, sustainability, and inclusivity across all
                  sectors, powered by technology.
                </motion.div>
              </section>

              {/* Sector Details Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Our Sectors: Driving Impact Across Industries
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Payzon India’s diverse portfolio is strategically designed to
                  address modern challenges while promoting economic growth and
                  sustainability. Below, we delve into each sector, highlighting
                  its mission, impact, and unique contributions to the Payzon
                  ecosystem.
                </motion.p>

                {/* IT Services */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  IT Services: Powering Digital Transformation
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Payzon’s IT Services form the technological backbone of our
                  ecosystem, offering comprehensive solutions such as web
                  development, mobile app creation, API integrations, and
                  cloud-based digital transformation. Catering to startups,
                  SMEs, and enterprises, we deliver scalable platforms that
                  enhance operational efficiency and customer engagement. Our
                  AI-driven tools and blockchain integrations ensure secure,
                  innovative solutions, positioning businesses at the forefront
                  of the digital age. With a team of expert developers and
                  engineers, Payzon IT Services has powered over 500 projects,
                  transforming ideas into robust digital realities.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
                  alt="IT services development"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />

                {/* Cyber Security */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Cyber Security: Safeguarding the Digital Frontier
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  In an era of rising cyber threats, Payzon’s Cyber Security
                  sector provides advanced protection through awareness
                  training, security audits, and compliance solutions. We
                  specialize in safeguarding data against phishing, ransomware,
                  and insider threats, offering tailored services for businesses
                  and individuals. Our partnerships with global cybersecurity
                  firms and in-house ethical hackers ensure robust defenses,
                  with programs like Sadaiv Yuva Foundation amplifying community
                  awareness. To date, we’ve protected over 1,000 organizations,
                  reducing breach risks by 60% through proactive measures.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
                  alt="Cyber security operations"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />

                {/* Skills Development */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Skills Development: Empowering Future-Ready Talent
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  Payzon’s Skills Development sector is dedicated to bridging
                  the skill gap, empowering youth and professionals with
                  training in technology, digital marketing, entrepreneurship,
                  and soft skills. Through offline bootcamps, online courses,
                  and corporate partnerships, we’ve upskilled over 10,000
                  individuals, with a focus on rural and underserved
                  communities. Our programs align with industry needs, ensuring
                  employability and fostering innovation. By integrating
                  AI-driven learning platforms, we personalize education, making
                  it accessible and impactful.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop"
                  alt="Skills development workshop"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />

                {/* Organic Farming E-commerce */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Organic Farming E-commerce: From Farm to Table
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  Our Organic Farming E-commerce platform connects local farmers
                  with consumers, delivering chemical-free produce directly to
                  doorsteps. By leveraging blockchain for supply chain
                  transparency and AI for demand forecasting, we ensure
                  freshness and fair pricing. Supporting over 2,000 farmers
                  across India, this sector promotes sustainable agriculture,
                  reduces carbon footprints, and empowers rural economies. Our
                  farm-to-table model has served 50,000+ customers, fostering
                  trust in organic living.
                </motion.p>
                <Image
                  src="https://timesofagriculture.in/wp-content/uploads/2023/10/Organic-Farming-1024x576.jpg"
                  alt="Organic farming produce"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />

                {/* Toys Industries E-commerce */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  Toys Industries E-commerce: Inspiring Play, Sustainably
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  Payzon’s Toys Industries E-commerce platform offers a curated
                  range of educational, eco-friendly, and creative toys,
                  supporting local manufacturers. Designed to spark imagination,
                  our products prioritize safety and sustainability, using
                  non-toxic materials. With a user-friendly digital marketplace,
                  we’ve empowered 500+ small-scale toymakers, reaching 100,000+
                  families. Our AI-driven personalization ensures
                  age-appropriate recommendations, enhancing the joy of play
                  while promoting environmental consciousness.
                </motion.p>
                <Image
                  src="https://www.shutterstock.com/shutterstock/photos/2078875312/display_1500/stock-photo-funny-surprised-little-girl-lying-in-the-chaos-of-toys-kid-s-face-surrounded-by-building-blocks-2078875312.jpg"
                  alt="Eco-friendly toys"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />

                {/* Artificial Jewellery E-commerce */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  Artificial Jewellery E-commerce: Affordable Elegance
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  Our Artificial Jewellery E-commerce platform celebrates Indian
                  craftsmanship with trendy, affordable designs for every
                  occasion. By blending traditional artistry with modern
                  aesthetics, we support over 1,000 artisans, many from rural
                  areas. Our blockchain-secured supply chain ensures ethical
                  sourcing, while AR-powered virtual try-ons enhance customer
                  experiences. With 200,000+ pieces sold, Payzon is redefining
                  accessible luxury in the jewellery market.
                </motion.p>
                <Image
                  src="https://m.media-amazon.com/images/I/81uV-jxCpdL._UY1100_.jpg"
                  alt="Artificial jewellery designs"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />

                {/* Spices & Vegetables E-commerce */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  Spices & Vegetables E-commerce: Freshness Delivered
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  Payzon’s Spices & Vegetables E-commerce platform delivers
                  premium herbs, spices, and seasonal produce directly from
                  farms. Supporting 3,000+ farmers, we ensure quality through
                  stringent checks and sustainable packaging. Our logistics
                  network, powered by AI-driven route optimization, guarantees
                  same-day delivery in urban areas. Serving 150,000+ households,
                  this sector celebrates India’s culinary heritage while
                  boosting agrarian economies.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop"
                  alt="Fresh spices and vegetables"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />

                {/* Divine Industries E-commerce */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                >
                  Divine Industries E-commerce: Spirituality Meets Innovation
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.1 }}
                >
                  Our Divine Industries E-commerce platform offers spiritual and
                  wellness products, including idols, incense, and meditation
                  accessories. Catering to a growing demand for holistic living,
                  we support 500+ artisans crafting authentic, eco-friendly
                  items. Our platform uses AI to recommend products based on
                  spiritual preferences, reaching 80,000+ customers. By
                  integrating cultural heritage with digital accessibility, we
                  foster devotion and mindfulness.
                </motion.p>
                <Image
                  src="https://t4.ftcdn.net/jpg/06/93/21/49/360_F_693214953_gEueIikfJqkLK3SH1hfBXz50ow9aV4Gx.jpg"
                  alt="Spiritual products"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />

                {/* Clothing E-commerce */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                >
                  Clothing E-commerce: Sustainable Fashion Forward
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.3 }}
                >
                  Payzon’s Clothing E-commerce platform showcases trendy ethnic
                  wear, casual apparel, and sustainable fashion from local
                  designers. By promoting eco-friendly fabrics and ethical
                  production, we support 1,500+ weavers and designers. Our
                  AR-powered virtual fitting rooms and AI-driven style
                  recommendations have driven 300,000+ sales, celebrating
                  India’s textile heritage while embracing modern trends.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=400&fit=crop"
                  alt="Sustainable fashion"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />

                {/* Electronics E-commerce */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                >
                  Electronics E-commerce: Technology at Your Fingertips
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                >
                  Our Electronics E-commerce platform offers the latest gadgets,
                  smart home devices, and consumer electronics at competitive
                  prices. With a focus on reliability and after-sales support,
                  we partner with top brands and local distributors, serving
                  200,000+ customers. Our AI-driven product recommendations and
                  blockchain-secured transactions ensure a seamless, trustworthy
                  shopping experience.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=400&fit=crop"
                  alt="Consumer electronics"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
              </section>

              {/* Innovation and Impact Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.6 }}
                >
                  Driving Innovation and Measurable Impact
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.7 }}
                >
                  Payzon India’s success lies in its integrated ecosystem, where
                  technology powers commerce and sustainability drives growth.
                  Our IT and Cyber Security sectors provide the infrastructure
                  for secure, scalable operations, while Skills Development
                  ensures a skilled workforce. Our e-commerce platforms empower
                  local communities, creating economic opportunities for over
                  10,000 artisans, farmers, and entrepreneurs. By leveraging AI,
                  blockchain, and eco-conscious practices, we’ve achieved a 40%
                  increase in market reach and a 30% reduction in carbon
                  emissions across our supply chains.
                </motion.p>
                <ul className="space-y-3 text-gray-700 text-base list-disc pl-6">
                  <li>
                    <strong>Integrated Ecosystem:</strong> Seamless connectivity
                    between technology and commerce sectors.
                  </li>
                  <li>
                    <strong>End-to-End Solutions:</strong> Supporting businesses
                    from ideation to market success.
                  </li>
                  <li>
                    <strong>Innovation Driven:</strong> AI, blockchain, and
                    sustainability as core drivers of progress.
                  </li>
                </ul>
              </section>

              {/* Conclusion and Call to Action */}
              <section className="text-center py-8 border-t border-gray-200">
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.8 }}
                >
                  Join Payzon India’s Journey of Innovation
                </motion.h2>
                <motion.p
                  className="text-gray-700 mb-6 max-w-2xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.9 }}
                >
                  Payzon India invites businesses, artisans, and communities to
                  join our mission of creating a sustainable, tech-driven
                  future. Whether you’re a farmer, designer, or tech enthusiast,
                  our ecosystem offers opportunities to grow, innovate, and
                  thrive. Partner with us to explore new horizons in technology,
                  commerce, and social impact.
                </motion.p>
                <motion.button
                  className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-600 transition-all duration-300 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Involved <Zap className="w-5 h-5" />
                </motion.button>
              </section>
            </article>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default PayzonSectorsPage;
