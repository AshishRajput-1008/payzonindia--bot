"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CyberSecurityUI() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* 🔹 Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/team-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 🔹 Main Content */}
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl">
          
          {/* 🔸 Left Card */}
          <div className="bg-white py-8 sm:py-10 lg:py-16 px-6 sm:px-10 lg:px-14 rounded-xl shadow-2xl col-span-12 lg:col-span-7">
            <div className="mb-4 sm:mb-6">
              <span className="text-blue-700 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider">
                CYBER SHIELD FOR CORPORATES
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Legal Support & Awareness in Digital Cyber Crimes
            </h1>

            <p className="text-gray-600 mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
              Specializes in combating cyber fraud and providing robust
              protection against digital crimes. With consultancy and expert
              solutions, we safeguard businesses and corporates from online
              threats, ensuring a secure digital environment.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 sm:w-6 h-5 sm:h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-sm sm:text-base md:text-lg">
                  We offer data security and cyber services for companies &
                  businesses.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 sm:w-6 h-5 sm:h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-sm sm:text-base md:text-lg">
                  Get the best consult from cyber expert advisors working in the
                  legal sector for corporates.
                </span>
              </div>
            </div>
          </div>

          {/* 🔸 Right Side (Logo + Text) */}
          <div className="relative col-span-12 lg:col-span-5">
            <div className="bg-white/90 dark:bg-gray-900 rounded-2xl shadow-lg flex flex-col items-center overflow-hidden backdrop-blur-sm">
              
              {/* Logo Image */}
              <div className="flex justify-center items-center w-full p-4 sm:p-6 bg-gray-50 dark:bg-gray-800">
                <Image
                  src="/images/Sadaiv_logo.png"
                  alt="Cybersecurity"
                  width={400}
                  height={400}
                  className="object-contain max-h-56 sm:max-h-72 md:max-h-80 lg:max-h-[400px] w-auto"
                  priority
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center items-center text-center gap-3 sm:gap-4 p-4 sm:p-6 w-full">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
                  Sadaiv Yuva Foundation
                </h2>

                <Link
                  href="https://www.sadaivyuvafoundation.com"
                  className="text-red-600 dark:text-red-400 font-semibold underline hover:text-red-700 dark:hover:text-red-300 transition text-sm sm:text-base"
                  target="_blank"
                >
                  www.sadaivyuvafoundation.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
