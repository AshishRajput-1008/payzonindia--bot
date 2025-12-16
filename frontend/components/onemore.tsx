"use client";

import React from "react";
import Image from "next/image";
import { MoveLeft, MoveRight, Quote } from "lucide-react";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-1 sm:w-2 h-1 sm:h-2 bg-blue-500 rounded-full"></div>
            <span className="text-blue-600 font-semibold text-base sm:text-lg">
              Our Own Brands
            </span>
            <div className="w-1 sm:w-2 h-1 sm:h-2 bg-blue-500 rounded-full"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Partnering for Youth Empowerment <br />
            <span className="text-blue-600">Through Media & Foundation</span>{" "}
            Initiatives
          </h1>
        </div>

        {/* Steps Container */}
        <div className="space-y-12 sm:space-y-16">
          {/* Step 1 - Sadaiv Satya Media */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 border-b pb-4">
            <div className="flex-1 max-w-md">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-red-500 mb-4 sm:mb-6 border-4 border-orange-400 rounded-3xl px-8 py-2">
                Sadaiv Satya Media
              </h2>
              <p className="text-gray-800 font-medium mb-6 sm:mb-8 leading-relaxed p-4">
                <Quote className="inline-block text-red-500 w-6 h-6 mr-1 rotate-180 align-middle" />
                Sadaiv Satya Media and Broadcasting Pvt Ltd is a dynamic media
                company focused on honest broadcasting and content creation that
                empowers communities. Join us in a replay of this webinar to see
                how to collaborate from the first line of code to impactful media
                campaigns sent in less than 15 minutes, using our contact form to
                kickstart your media journey.
                <Quote className="inline-block text-red-500 w-6 h-6 ml-1 align-middle" />
              </p>
              <div className="flex justify-center">
                <Link href="https://www.sadaivsatya.com/">
                  <button className="bg-red-500 text-white px-6 sm:px-24 py-3 sm:py-4 font-bold text-base sm:text-xl transition-colors">
                    www.sadaivsatya.com
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 mx-4 sm:mx-8">
              <div className="w-10 sm:w-12 h-10 lg:w-12 bg-blue-600 rounded-full flex items-center justify-center">
                <MoveRight className="text-white w-5 sm:w-6 h-5 sm:h-6" />
              </div>
            </div>
            <div className="flex-shrink-0 relative rounded-3xl shadow-2xl">
              <div className="w-full h-56 rounded-3xl flex items-center justify-center relative">
                <Image
                  src="/images/Sadaiv MEDIA 1.png"
                  alt="Sadaiv Satya Media Broadcasting"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Step 2 - Sadaiv Yuva Foundation */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex-shrink-0 relative rounded-3xl shadow-2xl px-16">
              <div className="w-full h-72 rounded-3xl flex items-center justify-center relative">
                <Image
                  src="/images/Sadaiv_logo.png"
                  alt="Sadaiv Yuva Foundation Empowerment"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex-shrink-0 mx-4 sm:mx-8">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <MoveLeft className="text-white w-5 sm:w-6 h-5 sm:h-6" />
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <h2 className="text-2xl sm:text-3xl font-black whitespace-nowrap uppercase text-red-500 mb-4 sm:mb-6 border-4 border-orange-400 rounded-3xl px-2 py-2">
                Sadaiv Yuva Foundation
              </h2>
              <p className="text-gray-800 font-medium mb-6 sm:mb-8 leading-relaxed p-1">
                <Quote className="inline-block text-red-500 w-6 h-6 mr-1 rotate-180 align-middle" />
                Sadaiv Yuva Foundation, a 12A/80G/CSR-approved non-profit, is more
                than a foundation—it’s a movement. When we receive your inquiry,
                our dedicated team will guide you toward youth leadership programs,
                skill development, and global impact initiatives that nurture young
                minds as change-makers for tomorrow.
                <Quote className="inline-block text-red-500 w-6 h-6 ml-1 align-middle" />
              </p>
              <div className="flex justify-center">
                <Link href="https://www.sadaivsatya.com/">
                  <button className="bg-red-500 text-white px-6 sm:px-24 py-3 sm:py-4 font-bold text-base sm:text-xl transition-colors">
                    www.sadaivsatya.com
                  </button>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;