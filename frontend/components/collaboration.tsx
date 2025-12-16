"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const ventures = [
  { id: 1, image: "/images/27.jpg", title: "IT Services", description: "Cutting-edge technology solutions" },
  { id: 2, image: "/images/28.jpg", title: "Cyber Security", description: "Advanced digital protection" },
  { id: 3, image: "/images/29.jpeg", title: "Skills Development", description: "Empowering human potential" },
  { id: 4, image: "/images/30.jpeg", title: "Organic Farming", description: "Sustainable agriculture solutions" },
  { id: 5, image: "/images/31.jpg", title: "Toy Industries", description: "Creative play experiences" },
  { id: 6, image: "/images/32.jpg", title: "Artificial Jewellery", description: "Elegant fashion accessories" },
  { id: 7, image: "/images/33.jpg", title: "Spices & Vegetables", description: "Premium natural products" },
  { id: 8, image: "/images/34.jpg", title: "Divine Industries", description: "Spiritual wellness products" },
  { id: 9, image: "/images/35.jpg", title: "Fashion & Clothing", description: "Trendsetting apparel solutions" },
  { id: 10, image: "/images/36.jpg", title: "Electronics", description: "Smart technology integration" },
];

export default function OngoingVentures() {
  return (
    <section className="relative overflow-hidden">
      {/* Enhanced Background with Animated Elements */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/it-consultancy-professionals.jpg" 
          alt="Professional Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-indigo-900/85" />
        
        {/* Animated Particles */}
        {/* <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div> */}
      </div>

      <div className="relative py-20 sm:py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-4 mb-8 group">
            <div className="flex gap-1 group-hover:scale-110 transition-transform duration-300">
              <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              <div className="w-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-200"></div>
            </div>
            
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-spin" style={{animationDuration: '3s'}} />
              <span className="text-cyan-400 text-sm sm:text-base font-bold tracking-widest uppercase bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-cyan-400/20">
                Ongoing Ventures
              </span>
              <Sparkles className="w-5 h-5 text-purple-400 animate-spin" style={{animationDuration: '3s', animationDirection: 'reverse'}} />
            </div>
            
            <div className="flex gap-1 group-hover:scale-110 transition-transform duration-300">
              <div className="w-2 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse delay-200"></div>
              <div className="w-4 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Building Tomorrow with{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
              Innovative Ventures
            </span>
          </h2>
          
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Pioneering excellence across multiple industries with cutting-edge solutions and unwavering commitment to innovation
          </p>
        </div>

        {/* Enhanced Swiper Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{
              prevEl: ".custom-swiper-button-prev",
              nextEl: ".custom-swiper-button-next",
            }}
            pagination={{
              el: ".custom-swiper-pagination",
              clickable: true,
              bulletClass: "inline-block w-3 h-3 mx-2 rounded-full bg-white/30 cursor-pointer transition-all duration-300 hover:bg-white/50",
              bulletActiveClass: "!bg-gradient-to-r !from-cyan-400 !to-blue-500 !w-8 !h-3 !rounded-full transform scale-110",
            }}
            autoplay={{ 
              delay: 3500, 
              disableOnInteraction: false, 
              pauseOnMouseEnter: true,
              reverseDirection: false
            }}
            speed={1000}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 25 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="ventures-swiper pb-16"
          >
            {ventures.map((venture, index) => (
              <SwiperSlide key={venture.id}>
                <div className="flex justify-center">
                  <div className="relative group cursor-pointer max-w-sm">
                    {/* Glowing Border Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-sm opacity-0 group-hover:opacity-75 transition-all duration-500"></div>
                    
                    {/* Main Card */}
                    <div className="relative rounded-3xl w-[280px] h-[380px] bg-gradient-to-br from-slate-800/90 to-slate-900/95 border-2 border-white/10 backdrop-blur-xl transition-all duration-700 hover:scale-105 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/25 group-hover:bg-gradient-to-br group-hover:from-slate-800/95 group-hover:to-slate-900/98">
                      
                      {/* Card Content */}
                      <div className="p-6 flex flex-col items-center text-center h-full justify-between">
                        {/* Image Container */}
                        <div className="w-52 h-52 rounded-2xl mb-1 overflow-hidden border-4 border-white group-hover:border-cyan-400/60 transition-all duration-500 shadow-lg">
                          <Image 
                            src={venture.image} 
                            alt={venture.title} 
                            width={208} 
                            height={208} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
                          />
                          
                          {/* Overlay on Hover */}
                        </div>
                        
                        {/* Text Content */}
                        <div className="space-y-5">
                          <h3 className="text-white font-bold text-xl uppercase tracking-wide bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-500">
                            {venture.title}
                          </h3>
                          
                          <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                            {venture.description}
                          </p>
                          
                         
                        </div>
                      </div>
                      
                      {/* Corner Accent */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Enhanced Navigation Buttons */}
          <button className="custom-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 backdrop-blur-xl rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/20 hover:border-cyan-400/60 shadow-lg hover:shadow-cyan-500/25 group" aria-label="Previous venture">
            <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          </button>
          
          <button className="custom-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/40 hover:to-purple-500/40 backdrop-blur-xl rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/20 hover:border-purple-400/60 shadow-lg hover:shadow-purple-500/25 group" aria-label="Next venture">
            <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Enhanced Pagination */}
          <div className="custom-swiper-pagination flex justify-center mt-8 gap-2" />
        </div>

        
      </div>
    </section>
  );
}