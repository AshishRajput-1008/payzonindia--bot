import React from "react";
import { Building2, Calendar, Image } from "lucide-react";

const DigitalMarketingUI: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/2.jpg"
          alt="Business People Silhouette"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-blue-800/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-red-500 font-bold text-sm uppercase tracking-wider mb-2 sm:mb-4">
            DIGITAL MARKETING SERVICES
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
            DROP-SHIPPING, ADVANCE LEAD
            <br />
            CAMPAIGN, PROFESSIONAL SEO SERVICES
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side - Service Icons */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-6 sm:space-y-10">
            {[
              { icon: <Building2 className="w-8 h-8 text-blue-500" />, text: "Influencer Marketing" },
              { icon: <Calendar className="w-8 h-8 text-blue-500" />, text: "Hire a Celebrity" },
              { icon: <Image className="w-8 h-8 text-blue-500" />, text: "PR Services (Corporate)" },
            ].map((service, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
                <span className="text-white text-lg sm:text-xl font-medium">
                  {service.text}
                </span>
              </div>
            ))}
          </div>

          {/* Right Side - White + Black Boxes */}
          <div className="lg:col-span-9 flex flex-col lg:flex-row gap-6 lg:gap-0">
            {/* White Box */}
            <div className="bg-white p-6 sm:p-10 flex-1 shadow-xl">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-1">
                Business
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-6">
                Branding
              </h3>

              <div className="mb-6 sm:mb-8 text-sm sm:text-base">
                <span className="text-gray-600">Currently </span>
                <span className="font-bold text-gray-900">TRENDING </span>
                <span className="text-gray-600">Services</span>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Professional SEO/GMB",
                  "Brand Promotion",
                  "APP Promotion",
                  "DLT Registration",
                  "Meta Verified Services",
                ].map((service, idx) => (
                  <li key={idx} className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-xs sm:text-sm font-medium">{service}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-yellow-100 rounded-lg p-2 sm:p-3 text-center">
                <span className="text-yellow-800 text-xs sm:text-sm">
                  Plan billed monthly/packages wise
                </span>
              </div>
            </div>

            {/* Black Box */}
            <div className="bg-black p-6 sm:p-10 flex-1 flex flex-col justify-center">
              <p className="text-red-500 font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
                SALES & REVENUE SERVICES
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6 sm:mb-8">
                Expert Working On Drop-Shipping & Paid AD Campaign
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10">
                Allowing entrepreneurs to focus on marketing and sales. Paired
                with a paid ad campaign, it can significantly increase
                visibility and drive targeted traffic to your store, boosting
                sales and growth.
              </p>

              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-8 rounded-lg transition-colors duration-300 uppercase text-xs sm:text-sm tracking-wide">
                MONTHLY BUSINESS BOOSTER PACKAGES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingUI;
