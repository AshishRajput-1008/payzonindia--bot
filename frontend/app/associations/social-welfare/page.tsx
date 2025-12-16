"use client";

import React from "react";
import {
  Phone,
  CheckCircle,
  ArrowRight,
  Shield,
  Users,
  Zap,
  Lock,
  Globe,
  Calendar,
  CreditCard,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const PyazonLandingPage: React.FC = () => {
  const services = ["Media", "Social Welfare", "Finance Audits"];

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
            Welcome to{" "}
            <span className="text-blue-500">Sadaiv Yuva Foundation</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200">
            Securing Every Digital Life — Cyber Awareness, Protection &
            Empowerment
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
                  alt="Foundation Team"
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

          {/* Main Content Area - Takes 8 columns: Blog-like Detailed Article on Sadaiv Yuva Foundation */}
          <motion.main
            className="lg:col-span-8 space-y-8 prose prose-lg max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Section - Integrated into Blog Introduction */}
            <section className="rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64 lg:h-96 flex items-center justify-center ">
                <Image
                  src="/images/Sadaiv_logo.png"
                  alt="Cyber security awareness"
                  height={600}
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
                  Unlocking the Mission of Sadaiv Yuva Foundation: Pioneering
                  Cyber Safety in the Digital Age
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Sadaiv Yuva Foundation, a 12A / 80G / CSR FUND approved
                  non-profit organization, stands at the forefront of digital
                  empowerment, dedicated to securing every digital life through
                  comprehensive cyber awareness, protection strategies, and
                  community education. As an integral part of the Payzon India
                  ecosystem, the foundation leverages innovative digital
                  solutions to combat evolving cyber threats, fostering a safer
                  online environment for individuals, families, and businesses
                  across the globe. Our core focus revolves around equipping
                  vulnerable populations—such as women, children, elders, and
                  youth—with the knowledge and tools to navigate the digital
                  world securely, preventing financial frauds, online abuses,
                  and scams that plague modern society.
                </motion.p>
              </div>
            </section>

            {/* Blog-like Detailed Content: Continuous Article on Sadaiv Yuva Foundation */}
            <article className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              {/* About Us Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  About Sadaiv Yuva Foundation
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Established under the visionary umbrella of Payzon India,
                  Sadaiv Yuva Foundation embodies the ethos of "eternal youth"
                  in safeguarding the future through proactive cyber defense.
                  Registered as a non-profit with full tax-exempt status under
                  sections 12A and 80G, and approved for CSR funding, the
                  foundation channels corporate social responsibility
                  initiatives into tangible digital safety programs. Our journey
                  began with a recognition of the widening digital divide and
                  the surge in cybercrimes, prompting us to launch awareness
                  campaigns that have now reached thousands. We collaborate with
                  government bodies, tech firms, and community leaders to
                  deliver workshops, online resources, and real-time support
                  helplines, ensuring that cyber literacy is accessible to all
                  socio-economic strata.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
                  alt="Foundation community workshop"
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
                  <Shield className="w-6 h-6 text-blue-500 inline mr-2" />
                  <span className="font-semibold text-blue-900">
                    Milestone:
                  </span>{" "}
                  Empowered over 50,000 individuals through 200+ awareness
                  sessions since inception.
                </motion.div>
              </section>

              {/* Mission and Vision Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Mission and Vision: Building a Cyber-Resilient Society
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  The mission of Sadaiv Yuva Foundation is to democratize cyber
                  safety education, making it a fundamental right in the digital
                  era. We envision a world where every user, regardless of age
                  or background, can thrive online without fear of exploitation.
                  By integrating advanced technologies from Payzon India—such as
                  AI-driven threat detection tools and interactive e-learning
                  platforms—we bridge the gap between awareness and action. Our
                  vision extends to policy advocacy, pushing for stronger cyber
                  laws and inclusive digital policies that protect the most
                  vulnerable.
                </motion.p>
                <ul className="space-y-3 text-gray-700 text-base list-disc pl-6 mb-6">
                  <li>
                    <strong>Mission Pillars:</strong> Education through
                    workshops, real-time fraud alerts via apps, and community
                    partnerships for widespread impact.
                  </li>
                  <li>
                    <strong>Vision Goals:</strong> Achieve zero-tolerance for
                    preventable cybercrimes by 2030 through scalable,
                    tech-enabled programs.
                  </li>
                </ul>
              </section>

              {/* Key Initiatives Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Our Key Initiatives: Combating Digital Threats Head-On
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Sadaiv Yuva Foundation's initiatives are laser-focused on the
                  most pressing cyber threats, delivering targeted interventions
                  that educate, protect, and empower.
                </motion.p>

                {/* Financial Frauds Protection */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Financial Frauds Protection: Safeguarding Assets in the
                  Digital Economy
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  In an age where digital transactions are ubiquitous, financial
                  frauds like phishing scams, fake investment schemes, OTP
                  interception, and UPI misuse pose severe risks. Our initiative
                  equips users with practical tools: from recognizing suspicious
                  links to implementing multi-factor authentication. Through
                  interactive webinars and mobile alerts, we've helped recover
                  millions in potential losses, partnering with banks and
                  fintechs to roll out fraud-detection simulations. This program
                  emphasizes proactive education, turning potential victims into
                  vigilant guardians of their finances.
                </motion.p>

                {/* Citizen Cyber Fraud Prevention */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Citizen Cyber Fraud Prevention: Protecting the Vulnerable from
                  Online Perils
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  Tailored for women, children, and elders—who often face
                  heightened risks— this initiative addresses online abuse,
                  grooming, fake job offers, and identity theft. We conduct
                  school programs, senior citizen forums, and women empowerment
                  sessions, teaching safe browsing, privacy settings, and
                  emergency reporting. Integrated with Payzon's secure
                  platforms, our resources include anonymous helplines and AI
                  chatbots for instant advice, fostering a culture of digital
                  empathy and resilience.
                </motion.p>

                {/* Crypto & Gaming Scam Awareness */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Crypto & Gaming Scam Awareness: Navigating the Wild West of
                  Digital Assets
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  With the rise of cryptocurrencies and online gaming, scams
                  promising quick riches abound. Our awareness drives demystify
                  blockchain basics, spot fake rewards, and avoid phishing in
                  metaverses. Through gamified learning modules and expert-led
                  podcasts, we guide enthusiasts toward legitimate investments,
                  collaborating with regulators to expose Ponzi schemes and rug
                  pulls.
                </motion.p>

                {/* Advanced Threats: Ransomware and More */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  Tackling Advanced Threats: Ransomware, BEC, Wire Fraud, and
                  Rootkits
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  We delve into sophisticated attacks like Ransomware—malware
                  that locks files for ransom—Business Email Compromise (BEC)
                  for corporate espionage, Wire Transfer Frauds via
                  impersonation, and Rootkit Malware for stealthy breaches. Our
                  forensic workshops and threat intelligence reports empower
                  organizations to fortify defenses, with case studies
                  illustrating recovery strategies and legal recourse.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
                  alt="Cyber threat simulation"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
              </section>

              {/* Partnerships and Impact Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  Partnerships, Team, and Measurable Impact
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  Sadaiv Yuva Foundation thrives on strategic alliances with
                  Payzon India, cybersecurity firms, NGOs, and government
                  agencies, amplifying our reach through CSR-funded projects.
                  Our diverse team of ethical hackers, educators, and policy
                  experts drives innovation in safety curricula. The impact is
                  profound: reduced fraud reports in partnered communities by
                  40%, thousands of lives protected, and a growing network of
                  cyber ambassadors.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <p className="text-center text-sm text-gray-600">
                      Expert Team of Specialists
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Globe className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <p className="text-center text-sm text-gray-600">
                      Global Reach via  Partnerships
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion and Call to Action */}
              <section className="text-center py-8 border-t border-gray-200">
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  Join Us in Securing the Digital Future
                </motion.h2>
                <motion.p
                  className="text-gray-700 mb-6 max-w-2xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  At Sadaiv Yuva Foundation, we're more than an
                  organization—we're a movement towards a fear-free digital
                  world. Whether through donations, volunteering, or
                  participating in our programs, your involvement fortifies our
                  collective defense. As part of Payzon India, we invite you to
                  connect, learn, and contribute to building tomorrow's
                  cyber-resilient society.
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

export default PyazonLandingPage;
