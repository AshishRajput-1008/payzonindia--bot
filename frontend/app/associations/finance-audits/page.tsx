"use client";

import React from "react";
import { Phone, CheckCircle, ArrowRight, FileText, Calculator, Building, Scale, Calendar, Shield, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const PyazonLandingPage: React.FC = () => {
  const services = [
    "Company Registration",
    "Income Tax Return Filing",
    "GST Registration & Return",
    "Company Audit Services",
    "FPO Company Incorporation",
    "PWD Registration",
    "ROC Representation",
    "Regulatory Filings",
    "Section 8 Company Registration",
    "Tax Planning & Strategy",
    "Financial Audit Services",
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
            Welcome to <span className="text-blue-500">Smart Tax Idea</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200">
            Expert C.A Services in India — Your Trusted Partner for All Financial & Tax Needs
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
                  Our Services
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
                  alt="Tax Consultants"
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
                    Need Tax Assistance?
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
                    Get expert CA consultation today:
                  </p>
                  <motion.button
                    className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-400 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Consult Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.aside>

          {/* Main Content Area - Takes 8 columns: Blog-like Detailed Article on Smart Tax Idea */}
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
                  src="/images/SMART TAX !DEA.png"
                  alt="Smart Tax Idea"
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
                  Discover Smart Tax Idea: Your Comprehensive Guide to Expert C.A. Services in India
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Welcome to Smart Tax Idea, your one-stop solution for expert Chartered Accountant (C.A.) services in India. Specializing in professional and reliable services for individuals, startups, and businesses nationwide, our team of experienced C.A.s is dedicated to providing comprehensive financial and tax solutions tailored to your unique needs. Whether you're an entrepreneur starting a new venture or an established company seeking expert guidance, Smart Tax Idea ensures your financials are in order, helping you avoid penalties and focus on growth. With over 18 years of corporate consultancy experience, we bring professional services including company registration, ROC representation, regulatory filings, Section 8 company registration, and tax planning & strategy.
                </motion.p>
              </div>
            </section>

            {/* Blog-like Detailed Content: Continuous Article on Smart Tax Idea */}
            <article className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              {/* About Us Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  About Smart Tax Idea
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Smart Tax Idea is a trusted provider of expert Chartered Accountant (C.A.) services in India, offering professional and reliable financial and tax solutions for individuals, startups, and businesses across the country. With over 18 years of corporate consultancy experience, the company is committed to delivering the best C.A. consultation in India. We aim to be more than just a C.A. service provider, acting as a long-term financial partner to help clients make smarter decisions, avoid penalties, and unlock growth opportunities. Smart Tax Idea is trusted by 10,000+ clients and boasts a 99.7% satisfaction rate, having resolved 12,000+ support requests with 97% customer satisfaction. At Smart Tax Idea, you get more than just a CA – you get a long-term financial partner. We help you make smarter decisions, avoid penalties, and unlock growth opportunities.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
                  alt="Tax professionals at work"
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
                  <Users className="w-6 h-6 text-blue-500 inline mr-2" />
                  <span className="font-semibold text-blue-900">Key Stat:</span> Trusted by 10,000+ clients with a 99.7% satisfaction rate.
                </motion.div>
              </section>

              {/* Services Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Our Comprehensive Services
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Smart Tax Idea offers a wide range of services to meet the financial and regulatory needs of businesses and individuals. From GST registration to income tax return filing, we provide comprehensive solutions to ensure compliance while maximizing your eligible benefits and deductions.
                </motion.p>

                {/* Company Registration */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Company Registration in India
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Starting a business is an exciting journey, and we make it seamless by handling all aspects of company registration in India. Whether you're setting up a private limited company, LLP, or any other form, our team provides end-to-end services to ensure compliance with legal requirements. Company registration is the legal process of incorporating a company under the Companies Act, establishing your business as a separate legal entity, allowing you to enjoy limited liability, tax benefits, and other advantages. It is crucial for businesses aiming to expand, raise capital, or operate legally in India. Key factors include a unique company name compliant with ROC regulations, a registered office address, and at least two directors for a PVT LTD company.
                </motion.p>

                {/* Income Tax Return Filing */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Income Tax Return Filing
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  Ensure your taxes are filed accurately and on time with the expertise of our Chartered Accountants. Our team specializes in income tax return filing, offering personalized services to individuals and businesses to maximize savings while staying compliant. An Income Tax Consultant provides expert advice on filing Income Tax Returns and ensures compliance with Indian tax laws. They help optimize tax savings, assist in tax planning, and guide through deductions and exemptions to minimize tax liabilities.
                </motion.p>

                {/* GST Registration & Return */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  GST Registration & GST Return
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  With GST laws constantly evolving, it's essential to stay updated. We offer GST registration and GST return filing services to simplify your tax-related worries. Whether you need help with a new registration or handling GST notices, our team of experts has got you covered. GST (Goods and Services Tax) is a single tax levied on the supply of goods and services in India. A GST Consultant helps businesses understand GST regulations, assists with GST registration, filing returns, and ensures proper compliance with the law. They are crucial for businesses to avoid penalties and optimize GST-related processes.
                </motion.p>

                {/* Company Audit Services */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Company Audit Services
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  Our company audit services ensure that your financial records are accurate and compliant with Indian regulations. We provide detailed auditing to help businesses maintain transparency and trust with stakeholders. Ensure your business is audit-ready at all times. Our financial audit services provide detailed insights, help detect irregularities, and keep you aligned with Indian regulatory standards. We conduct statutory audits, internal audits, tax audits, and more.
                </motion.p>

                {/* FPO Company Incorporation */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  FPO Company Incorporation
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  Planning to form a Farmer Producer Organization (FPO)? We guide you through every step of FPO company incorporation in India, ensuring you meet all legal requirements and set your FPO up for success.
                </motion.p>

                {/* PWD Registration */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  PWD Registration
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  Our experts assist with PWD registration, ensuring your business complies with the Persons with Disabilities (PWD) Act. This is crucial for businesses that wish to include disabled-friendly practices or receive government benefits related to this. PWD Registration (Persons with Disabilities Registration) is required if you are a business aiming to hire people with disabilities. It ensures that you meet legal requirements and qualify for government benefits. You can register with the PWD authority by submitting relevant documents and complying with the norms set by the government.
                </motion.p>

                {/* Other Services */}
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  Additional Services: ROC Representation, Regulatory Filings, Section 8 Company, and Tax Planning
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  We also offer ROC Representation for Registrar of Companies matters, handle necessary Regulatory Filings for businesses, provide services for Section 8 Company Registration, and deliver expert Tax Planning & Strategy to maximize tax savings—with potential savings of 30-50% through proper planning.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
                  alt="Financial audit services"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
              </section>

              {/* Why Choose Us Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                >
                  Why Choose Smart Tax Idea?
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.1 }}
                >
                  At Smart Tax Idea, we offer expert financial and taxation services tailored to your specific needs. Discover why thousands trust us for professional and reliable solutions. Our expert C.A. advisors bring years of experience and in-depth knowledge to the table, ensuring that you receive the best financial and taxation advice tailored to your specific needs. We provide comprehensive solutions from GST registration to income tax return filing, meeting the financial and regulatory needs of businesses and individuals across India. At Smart Tax Idea, we believe in offering top-notch services at competitive prices, focusing on providing value and ensuring transparency in all our dealings.
                </motion.p>
                <ul className="space-y-3 text-gray-700 text-base list-disc pl-6">
                  <li>Expert CA Advisors: Years of experience providing tailored financial and taxation advice.</li>
                  <li>Comprehensive Solutions: Wide range of services for all financial and regulatory requirements.</li>
                  <li>Affordable & Transparent: Competitive pricing with complete transparency.</li>
                </ul>
              </section>

              {/* FAQs Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                >
                  Frequently Asked Questions (FAQs)
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.3 }}
                >
                  Get quick answers to common queries about our C.A. services in India.
                </motion.p>

                <div className="space-y-6">
                  <div>
                    <motion.h3
                      className="text-xl font-semibold text-gray-800 mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.4 }}
                    >
                      What is Company Registration in India?
                    </motion.h3>
                    <p className="text-gray-700">Company Registration in India is the legal process of incorporating a company under the Companies Act. It establishes your business as a separate legal entity, allowing you to enjoy limited liability, tax benefits, and other advantages. It is crucial for businesses aiming to expand, raise capital, or operate legally in India. When opting for Company Registration in India, it's essential to consider several key factors. Firstly, ensure that you have a unique company name that complies with the Registrar of Companies (ROC) regulations. You will also need a registered office address and at least two directors for a PVT LTD Company.</p>
                  </div>

                  <div>
                    <motion.h3
                      className="text-xl font-semibold text-gray-800 mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.5 }}
                    >
                      What does an Income Tax Consultant do?
                    </motion.h3>
                    <p className="text-gray-700">An Income Tax Consultant provides expert advice on filing Income Tax Returns and ensures that you comply with Indian tax laws. They help optimize tax savings, assist in tax planning, and guide you through deductions and exemptions to minimize your tax liabilities.</p>
                  </div>

                  <div>
                    <motion.h3
                      className="text-xl font-semibold text-gray-800 mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.6 }}
                    >
                      What is GST and the role of a GST Consultant?
                    </motion.h3>
                    <p className="text-gray-700">GST (Goods and Services Tax) is a single tax levied on the supply of goods and services in India. A GST Consultant helps businesses understand GST regulations, assists with GST registration, filing returns, and ensures proper compliance with the law. They are crucial for businesses to avoid penalties and optimize GST-related processes.</p>
                  </div>

                  <div>
                    <motion.h3
                      className="text-xl font-semibold text-gray-800 mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.7 }}
                    >
                      What is PWD Registration?
                    </motion.h3>
                    <p className="text-gray-700">PWD Registration (Persons with Disabilities Registration) is required if you are a business aiming to hire people with disabilities. It ensures that you meet legal requirements and qualify for government benefits. You can register with the PWD authority by submitting relevant documents and complying with the norms set by the government.</p>
                  </div>
                </div>
              </section>

              {/* Client Testimonials Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.8 }}
                >
                  What Our Clients Are Saying
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.9 }}
                >
                  We are proud to be one of the leading providers of expert C.A. services in India, trusted by thousands of businesses and individuals for professional, reliable, and prompt services. Our clients appreciate our commitment to excellence, as reflected in our high satisfaction rates.
                </motion.p>
                {/* Note: Specific testimonials not detailed on the site, so general statement used */}
              </section>

              {/* Conclusion and Call to Action */}
              <section className="text-center py-8 border-t border-gray-200">
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3.0 }}
                >
                  Ready to Partner with Smart Tax Idea?
                </motion.h2>
                <motion.p
                  className="text-gray-700 mb-6 max-w-2xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3.1 }}
                >
                  Take your business to the next level with Smart Tax Idea – your trusted partner for online CA services across India. Whether you're a startup, a growing company, or an individual looking for expert tax and accounting support, we make it simple, reliable, and affordable. Contact us today to get started on your path to financial success.
                </motion.p>
                <motion.button
                  className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-blue-600 transition-all duration-300 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started <ArrowRight className="w-5 h-5" />
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