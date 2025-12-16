"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Headphones,
  Building2,
  Globe,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CheckCircle,
  ArrowRight,
  Zap,
  Users,
  Shield,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

const PayzonContactPage: React.FC = () => {



 

 

  

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 755 485 9540", "+91 755 485 9541"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      link: "tel:+917554859540",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@payzonindia.com", "support@payzonindia.com"],
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      link: "mailto:info@payzonindia.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: [
        "B1, Patel Nagar, Raisen Road",
        "Bhopal, Madhya Pradesh 462022",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Sat: 11:00 AM - 7:00 PM", "Sunday: Closed"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      link: "",
    },
  ];

  const services = [
    "IT Solutions & Software Development",
    "Fintech APIs & Payment Gateways",
    "E-commerce Platform Development",
    "Digital Marketing & SEO",
    "Cyber Security Services",
    "Mobile App Development",
    "Cloud Computing Solutions",
    "Financial Consulting (Smart Tax Idea)",
    "Other",
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      hoverBg: "hover:bg-blue-100",
      textColor: "text-blue-700",
      link: "https://www.facebook.com/PAYZONINDIA/",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      hoverBg: "hover:bg-blue-100",
      textColor: "text-blue-600",
      link: "https://www.linkedin.com/company/payzonindiabhopal/posts/?feedView=all",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      color: "from-sky-400 to-sky-500",
      bgColor: "bg-sky-50",
      hoverBg: "hover:bg-sky-100",
      textColor: "text-sky-600",
      link: "https://x.com/payzonindia",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      hoverBg: "hover:bg-pink-100",
      textColor: "text-pink-600",
      link: "https://www.instagram.com/thepayzonindia/",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      name: "YouTube",
      color: "from-red-600 to-red-700",
      bgColor: "bg-red-50",
      hoverBg: "hover:bg-red-100",
      textColor: "text-red-600",
      link: "https://www.youtube.com/channel/UCSjsk1O7zYurXPDl2o3RuIA",
    },
  ];

  const quickContact = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak with our experts",
      action: "Call Now",
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Get response within 24 hours",
      action: "Send Email",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="min-h-screen ">
      <section className="relative text-white py-32 overflow-hidden flex flex-col items-center justify-center min-h-screen z-10">
        {/* Background Image */}
        <img
          src="/images/bg-pagetitle.jpg"
          alt="Background"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20"
            >
              <span className="text-sm font-semibold">
                We're Here to Help 24/7
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h1>

            <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed font-light">
              Have a project in mind? Need expert consultation? Our team is
              ready to transform your ideas into reality.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="group bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 flex items-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+917554859540"
                className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-6 py-2 bg-blue-100 rounded-full">
              <span className="text-sm font-semibold text-blue-600">
                Contact Information
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Reach Out To Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to connect - choose what works best for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${info.color}`}
                ></div>

                <div
                  className={`inline-flex p-4 bg-gradient-to-br ${info.color} rounded-2xl text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {info.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {info.title}
                </h3>

                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <p
                      key={i}
                      className="text-gray-600 text-sm leading-relaxed"
                    >
                      {info.link && i === 0 ? (
                        <a
                          href={info.link}
                          className={`${info.textColor} hover:underline font-medium transition-colors`}
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Social Section */}
      <section id="contact-form" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-2 items-center">
            {/* Contact Form */}
            <div className="mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center lg:text-left">
                Connect With Us
              </h3>
              <p className="text-gray-600 mb-6 text-center lg:text-left">
                Follow us on social media for updates, insights, and industry
                news
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`group flex flex-col items-center gap-3 p-6 ${social.bgColor} ${social.hoverBg} rounded-2xl transition-all duration-300 border border-gray-100 hover:shadow-lg transform hover:-translate-y-1`}
                  >
                    <div
                      className={`p-3 bg-gradient-to-br ${social.color} rounded-xl text-white group-hover:scale-110 transition-transform`}
                    >
                      {social.icon}
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="inline-block mb-4 px-6 py-2 bg-blue-100 rounded-full">
                  <span className="text-sm font-semibold text-blue-600">
                    Find Us
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Visit Our Office
                </h3>

                <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.3759405211263!2d77.49342867477695!3d23.249645607817282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41dd20a8788b%3A0xbac1812be533a741!2sPAYZONINDIA%20PVT%20LTD!5e1!3m2!1sen!2sin!4v1759236311343!5m2!1sen!2sin"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold">Why Payzon India</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              Your Trusted Technology Partner
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join 10,000+ satisfied clients who trust us for their digital
              transformation journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="inline-flex p-5 bg-blue-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-12 h-12 text-blue-300" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Lightning Fast Response
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Get responses within 24 hours from our dedicated expert team,
                  ensuring your project never faces delays
                </p>

                <div className="flex items-center gap-2 text-blue-300">
                  <Check className="w-5 h-5" />
                  <span className="text-sm font-semibold">
                    24/7 Support Available
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="inline-flex p-5 bg-emerald-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-12 h-12 text-emerald-300" />
                </div>

                <h3 className="text-2xl font-bold mb-4">Expert Team</h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  certified professionals with years of industry experience
                  ready to bring your vision to life
                </p>

                <div className="flex items-center gap-2 text-emerald-300">
                  <Check className="w-5 h-5" />
                  <span className="text-sm font-semibold">
                    Certified Professionals
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="inline-flex p-5 bg-purple-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-12 h-12 text-purple-300" />
                </div>

                <h3 className="text-2xl font-bold mb-4">Trusted Partner</h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  10+ years of excellence with 99% client satisfaction rate and
                  proven track record of success
                </p>

                <div className="flex items-center gap-2 text-purple-300">
                  <Check className="w-5 h-5" />
                  <span className="text-sm font-semibold">
                    99% Satisfaction Rate
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PayzonContactPage;
