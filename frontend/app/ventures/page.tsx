import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';

export default function PyazonLandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Takes 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {/* Services Menu */}
            <div className="bg-white shadow-sm">
              <div className="bg-blue-600 text-white px-5 py-3 text-sm font-medium">
                IT Consulting Planning
              </div>
              <div className="divide-y divide-gray-200 text-sm">
                <div className="px-5 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer border-l-4 border-transparent hover:border-blue-600 transition-all">
                  Managed IT Services
                </div>
                <div className="px-5 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer border-l-4 border-transparent hover:border-blue-600 transition-all">
                  Security & Compliance
                </div>
                <div className="px-5 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer border-l-4 border-transparent hover:border-blue-600 transition-all">
                  Data Backup & Recovery
                </div>
                <div className="px-5 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer border-l-4 border-transparent hover:border-blue-600 transition-all">
                  Web Development
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 shadow-lg relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-700 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-950 rounded-full opacity-30 transform -translate-x-10 translate-y-10"></div>
              
              <div className="relative px-6 py-8">
                {/* Database/Server Icon */}
                <div className="mb-4">
                  <svg className="w-14 h-14 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.59 21 12 21S20 19.21 20 17V7C20 4.79 16.42 3 12 3M18 17C18 17.5 15.87 19 12 19S6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16S16.39 15.55 18 14.77V17M18 12.45C16.7 13.4 14.42 14 12 14C9.58 14 7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11C14.39 11 16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5C15.87 5 18 6.5 18 7S15.87 9 12 9Z"/>
                  </svg>
                </div>

                <h3 className="text-white text-lg font-semibold mb-3">if need help!</h3>
                
                <div className="mb-4">
                  <div className="flex items-center text-white mb-1">
                    <Phone className="w-5 h-5 mr-2" />
                  </div>
                  <div className="text-white text-2xl font-bold">
                    557-3452-234
                  </div>
                </div>

                <p className="text-blue-200 text-xs mb-4">
                  or go to contact form:
                </p>

                <button className="bg-white text-blue-600 px-6 py-2.5 text-sm font-medium hover:bg-blue-50 transition-colors w-full flex items-center justify-between group">
                  <span>Let's start now</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area - Takes 9 columns */}
          <div className="lg:col-span-9 space-y-6">
            {/* Hero Section with Image */}
            <div className="bg-white shadow-sm">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=400&fit=crop" 
                  alt="Professional team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">UI/UX & Web Design</h1>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  Providing exceptional digital experiences, and delivering capacity incubating, data storage management that works in real-time and scale. A well designed and developed site that can meet with increasing demand for more accessibility in short setup, we are set with organizations on procurement practices and performance that assure and will do everything to the agreement with each client.
                </p>

                {/* Two Dark Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Stay in Control Card */}
                  <div className="bg-gray-900 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600 opacity-10 rounded-full transform translate-x-8 -translate-y-8"></div>
                    <div className="relative">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                        <h3 className="text-white font-semibold text-base">Stay in control</h3>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        We're creating room for self care today with scheduling options.
                      </p>
                    </div>
                  </div>

                  {/* Unlimited Support Card */}
                  <div className="bg-gray-900 p-6 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600 opacity-10 rounded-full transform -translate-x-10 translate-y-10"></div>
                    <div className="relative">
                      <div className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,1C8.14,1 5,4.14 5,8A7,7 0 0,0 12,15A7,7 0 0,0 19,8C19,4.14 15.86,1 12,1M12,3A5,5 0 0,1 17,8A5,5 0 0,1 12,13A5,5 0 0,1 7,8A5,5 0 0,1 12,3M12,10A1,1 0 0,1 13,11A1,1 0 0,1 12,12A1,1 0 0,1 11,11A1,1 0 0,1 12,10M13,16.9C15.5,17.5 17.5,19.5 18,22H17C16.5,20 15,18.4 13,17.7V16.9M11,16.9V17.7C9,18.4 7.5,20 7,22H6C6.5,19.5 8.5,17.5 11,16.9Z"/>
                        </svg>
                        <h3 className="text-white font-semibold text-base">Unlimited support</h3>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        New range coming in on a weekly basis veg section.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* We Serve the Best Work Section */}
            <div className="bg-white shadow-sm p-8">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:w-64 flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" 
                    alt="Team collaboration"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">We serve the best work</h2>
                  <ul className="space-y-2.5 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1 text-lg leading-none">•</span>
                      <span>A curated roadmap solution allows for the delivery of exclusive content and accelerated path available if you're looking for ROI in months</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1 text-lg leading-none">•</span>
                      <span>Subscription-based services can be risky. Find your experience level with our guides as a deadline cost or B2B</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Three Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                {/* Best Quality Support */}
                <div className="flex items-start gap-3">
                  <div className="bg-gray-900 p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Best quality support</h3>
                    <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>

                {/* Money Back Guarantee */}
                <div className="flex items-start gap-3">
                  <div className="bg-gray-900 p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Money back guarantee</h3>
                    <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>

                {/* Cheap Price Package */}
                <div className="flex items-start gap-3">
                  <div className="bg-gray-900 p-3 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Cheap price package</h3>
                    <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}