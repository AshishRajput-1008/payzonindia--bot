"use client";

import React from "react";
import { Phone, CheckCircle, ArrowRight, Video, Newspaper, Users, Shield, Zap, Calendar, PlayCircle, DollarSign, BarChart3 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const PyazonLandingPage: React.FC = () => {
  const services = [
    "Media",
    "Social Welfare",
    "Finance Audits",
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

          {/* Main Content Area - Takes 8 columns: Blog-like Detailed Article on Sadaiv Satya News */}
          <motion.main
            className="lg:col-span-8 space-y-8 prose prose-lg max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Section - Integrated into Blog Introduction */}
            <section className="rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 lg:h-96">
                <Image
                  src="/images/Sadaiv MEDIA 1.png"
                  alt="Sadaiv Satya News"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-red-900/30"></div>
              </div>
              <div className="p-8">
                <motion.h1
                  className="text-4xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Exploring Sadaiv Satya News: Your Gateway to Unbiased Truth in Media
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Sadaiv Satya News stands as a beacon of integrity in the fast-evolving world of digital media, committed to the relentless pursuit of truth. Under the innovative umbrella of Payzon India, this platform delivers a dynamic blend of video news, in-depth political articles, timely business updates, and cutting-edge crypto insights. Our mission is clear: to empower audiences with credible, unbiased information that fosters informed decision-making. From breaking news alerts to analytical deep-dives, Sadaiv Satya News covers a spectrum of categories including media, social welfare, and finance audits, ensuring comprehensive coverage that resonates with diverse viewers. As part of Payzon India's ecosystem, we leverage advanced digital tools to provide accessible, reliable content that bridges the gap between complex events and everyday understanding.
                </motion.p>
              </div>
            </section>

            {/* Blog-like Detailed Content: Continuous Article on Sadaiv Satya News */}
            <article className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              {/* About Us Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  About Sadaiv Satya News
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Founded on the principle of "Sadaiv Satya" – always the truth – Sadaiv Satya News is a premier digital media outlet dedicated to delivering factual, unbiased reporting. As an integral part of Payzon India, a leader in digital solutions, we harness cutting-edge technology to broadcast real-time news and foster public discourse. Our platform spans video news for dynamic storytelling, political articles for nuanced analysis, business sections for economic insights, and crypto updates for the digital finance frontier. With a focus on categories like media, social welfare initiatives, and finance audits, we aim to not only inform but also inspire action towards societal betterment. Our team of seasoned journalists and experts ensures every piece of content upholds the highest standards of accuracy and ethical journalism, building trust in an era of information overload.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop"
                  alt="Media broadcast studio"
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
                  <Newspaper className="w-6 h-6 text-blue-500 inline mr-2" />
                  <span className="font-semibold text-blue-900">Core Value:</span> Unwavering commitment to truth, transparency, and timeliness in every story we tell.
                </motion.div>
              </section>

              {/* Categories and Coverage Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Our Core Categories: Media, Social Welfare, and Finance Audits
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  At Sadaiv Satya News, our content is thoughtfully categorized to address the multifaceted interests of our audience. The Media section features live video coverage and on-demand clips that bring global events to life, from press conferences to community stories. Social Welfare delves into humanitarian efforts, policy impacts, and grassroots movements, highlighting initiatives that promote equity and well-being. Finance Audits provide rigorous examinations of corporate practices, regulatory compliance, and economic transparency, equipping viewers with tools to navigate financial complexities. These categories are interconnected, reflecting our holistic approach to journalism that links societal issues with economic realities.
                </motion.p>

                {/* Media Category */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Media: Dynamic Video News and Live Updates
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Our Media category is the heartbeat of Sadaiv Satya News, offering high-quality video content that captures the pulse of current affairs. From breaking news to investigative reports, our videos are produced with state-of-the-art equipment and edited for clarity and impact. We cover everything from local elections to international summits, ensuring viewers receive unfiltered, real-time insights. Integrated with Payzon India's digital infrastructure, our platform supports seamless streaming across devices, making truth accessible anytime, anywhere.
                </motion.p>

                {/* Social Welfare Category */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Social Welfare: Championing Causes for a Better Society
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  Social Welfare at Sadaiv Satya News spotlights stories that matter to the underserved and underrepresented. We explore government programs, NGO efforts, and community-driven change, such as environmental conservation projects and welfare reforms. Our in-depth articles and video series aim to raise awareness and drive policy discussions, embodying our commitment to social justice. By partnering with experts and activists, we provide balanced perspectives that encourage viewer engagement and advocacy.
                </motion.p>

                {/* Finance Audits Category */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Finance Audits: Ensuring Transparency in Economic Affairs
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  In the Finance Audits section, we scrutinize financial statements, corporate governance, and market irregularities with forensic precision. Our reports expose discrepancies and celebrate ethical practices, aiding investors and regulators alike. Covering audits of major firms and emerging fintech, this category underscores the importance of accountability in building economic trust. As part of Payzon India's financial ecosystem, our audits align with broader goals of sustainable growth and regulatory compliance.
                </motion.p>
                <Image
                  src="https://static.vecteezy.com/system/resources/previews/035/630/209/non_2x/hand-with-magnifying-glass-and-calculator-analysis-of-financial-report-financial-audit-concept-calculation-auditing-tax-process-business-background-illustration-in-flat-design-vector.jpg"
                  alt="Finance audit analysis"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
              </section>

              {/* Featured Topics Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Spotlight Stories: Key Topics in Focus
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  Sadaiv Satya News thrives on diverse, impactful stories that shape public discourse. Here, we delve into select topics that exemplify our coverage.
                </motion.p>

                {/* Sustainable Living */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  The Future of Sustainable Living: Eco-Friendly Practices for Tomorrow
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  In an era of climate urgency, adopting eco-friendly lifestyles is imperative. This article explores practical steps like reducing plastic use, embracing renewable energy, and community gardening. By integrating global case studies and expert interviews, we illustrate how individual actions can safeguard Earth's resources, ensuring a balanced future. Sadaiv Satya News advocates for sustainability through multimedia content that inspires change.
                </motion.p>

                {/* International Relations */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  Can There Be a War Between America and Pakistan? Analyzing Global Tensions
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  Geopolitical strains between the United States and Pakistan raise alarms about potential escalation. This in-depth analysis reviews historical alliances, current diplomatic frictions, and military postures. Drawing on insights from international relations experts, we assess risks and pathways to de-escalation, emphasizing the human cost of conflict. Sadaiv Satya News provides balanced reporting to promote understanding over division.
                </motion.p>

                {/* Crypto Market */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  New Heights in Crypto Market: Navigating Bitcoin Surges and Investor Strategies
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  The cryptocurrency market is soaring, with Bitcoin shattering records amid institutional adoption. This piece examines market drivers, volatility factors, and prudent investment tips. From blockchain innovations to regulatory shifts, our coverage equips readers with knowledge for informed participation in digital finance. At Sadaiv Satya News, we demystify crypto to empower economic inclusion.
                </motion.p>

                {/* Business News */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                >
                  Latest Business World News: Trends Shaping India's Economy
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.1 }}
                >
                  India's business landscape is buzzing with stock market highs, startup booms, and corporate mergers. This update covers key developments, from policy reforms to sectoral growth in tech and manufacturing. With data visualizations and expert commentary, we help navigate the opportunities and challenges in this dynamic economy. Sadaiv Satya News is your reliable source for business intelligence.
                </motion.p>
                <Image
                  src="https://coindcx.com/blog/wp-content/uploads/2023/10/What-is-_-Top-Crypto-Trends-1-1200x675.webp"
                  alt="Crypto and business trends"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
              </section>

              {/* Mission and Impact Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                >
                  Our Mission: Pursuit of Truth and Societal Impact
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.3 }}
                >
                  The ethos of Sadaiv Satya News is rooted in journalistic integrity and public service. We strive to uncover truths that influence policy, spark conversations, and drive positive change. Through collaborations with Payzon India, we innovate in content delivery, from AI-enhanced analytics to interactive video formats. Our impact is measured not just in views, but in the actions inspired – from community welfare drives to informed voting.
                </motion.p>
                <ul className="space-y-3 text-gray-700 text-base list-disc pl-6">
                  <li>Credible Reporting: Fact-checked content across all platforms.</li>
                  <li>Innovative Delivery: Leveraging Payzon tech for immersive experiences.</li>
                  <li>Community Engagement: Forums and feedback loops for audience voices.</li>
                </ul>
              </section>

              {/* Conclusion and Call to Action */}
              <section className="text-center py-8 border-t border-gray-200">
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                >
                  Join the Pursuit of Truth with Sadaiv Satya News
                </motion.h2>
                <motion.p
                  className="text-gray-700 mb-6 max-w-2xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                >
                  In a world flooded with information, Sadaiv Satya News cuts through the noise to deliver clarity and context. Subscribe today to stay ahead with our video news, political insights, business alerts, and crypto trends. As part of Payzon India, we're committed to your journey towards enlightenment. Contact us to share your story or collaborate on impactful narratives.
                </motion.p>
                <motion.button
                  className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-600 transition-all duration-300 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe Now <PlayCircle className="w-5 h-5" />
                </motion.button>
              </section>
            </article>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default PyazonLandingPage;