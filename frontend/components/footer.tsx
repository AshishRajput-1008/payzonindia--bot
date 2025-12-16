import {
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  Twitter,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // External website links - these will open in new tabs
  const externalLinks = [
    { name: "payzonindia.com", url: "https://www.payzonindia.com" },
    { name: "payzonapi.com", url: "https://www.payzonapi.com" },
    { name: "payzonmarketing.com", url: "https://www.payzonmarketing.com" },
    { name: "payzonshoppy.com", url: "https://www.payzonshoppy.com" },
    { name: "payzonitservices.com", url: "https://www.payzonitservices.com" },
    { name: "sadaivsatya.com", url: "https://www.sadaivsatya.com" },
    { name: "sadaivyuvafoundation.com", url: "https://www.sadaivyuvafoundation.com" },
  ];

  return (
    <footer
      className="text-white py-16 px-8"
      style={{
        backgroundImage: "url(/images/bg-footer1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-4 sm:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            {/* Logo centered */}
            <div className="flex flex-col items-center">
              <img
                src="/images/logo.png"
                alt="Payzon Logo"
                className="h-12 w-12 sm:h-32 sm:w-32 mb-3"
              />
              {/* Company Name centered below logo */}
              <h3 className="font-bold text-lg sm:text-xl text-center">
                PAYZON INDIA PVT LTD
              </h3>
              {/* Description */}
              <p className="text-gray-300 mt-4 mb-6 leading-relaxed text-sm sm:text-base">
                We have extensive experience providing industry-specific IT
                solutions. Our team understands the unique challenges.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-5 justify-center">
              <a
                href="https://www.facebook.com/PAYZONINDIA/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCSjsk1O7zYurXPDl2o3RuIA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/company/payzonindiabhopal/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/thepayzonindia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 transition-colors duration-300" />
              </a>
              <a
                href="https://x.com/payzonindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-sky-400 transition-colors duration-300" />
              </a>
            </div>
            
            {/* Internal Navigation Links */}
            <div className="flex space-x-6 justify-center mt-6">
              <Link
                href="/about"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Profile
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Online Versatility - External Links */}
          <div>
            <h3 className="font-bold text-xl mb-6">Online Versatility</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {externalLinks.map((site, i) => (
                <li key={i}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center"
                  >
                    {site.name}
                
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Collaboration */}
          <div>
            <h3 className="font-bold text-xl mb-6">Business Collaboration</h3>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/Sadaiv MEDIA 1.png"
                alt="Sadaiv Media"
                className="w-full h-20 object-contain bg-white rounded-lg p-2"
              />
              <img
                src="/images/sadaivsatyalogo.jpeg"
                alt="Sadaiv Satya"
                className="w-full h-20 object-contain bg-white rounded-lg p-2"
              />
              <img
                src="/images/inffablesparklogo (1).png"
                alt="Inffable Spark"
                className="w-full h-20 object-contain bg-white rounded-lg p-2"
              />
              <img
                src="/images/SMART TAX !DEA.png"
                alt="Smart Tax Idea"
                className="w-full h-20 object-contain bg-white rounded-lg"
              />
            </div>
          </div>

          {/* Our Contacts */}
          <div>
            <h3 className="font-bold text-xl mb-6">Our Contacts</h3>
            <div className="space-y-5 text-sm sm:text-base">
              <div>
                <p className="text-gray-400 mb-1">Address :</p>
                <p className="text-white">
                  Sector B Plot 1, Patel Nagar, Raisen road , Bhopal (MP)
                </p>
                <p className="text-white">Pin: 462022</p>
              </div>
              
              <div>
                <p className="text-gray-400 mb-1">Email :</p>
                <a
                  href="mailto:info@payzonindia.com"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                >
                  info@payzonindia.com
                </a>
              </div>
              
              <div>
                <p className="text-gray-400 mb-1">Contact:</p>
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a
                    href="tel:+917554859540"
                    className="text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    +91 755 485 9540
                  </a>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a
                    href="tel:+917554923296"
                    className="text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    +91 755 492 3296
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <FaWhatsapp className="w-4 h-4 text-green-500" />
                  <a
                    href="https://wa.me/919243837546"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors duration-300"
                  >
                    +91 924 383 7546
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} PAYZON INDIA PVT LTD | All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Refund Policy
            </Link>
            <Link
              href="/cancellation-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}