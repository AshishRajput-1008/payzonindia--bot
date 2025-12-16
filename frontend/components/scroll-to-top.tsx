"use client"

import { useState, useEffect } from "react"
import { ChevronUp, MessageCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Fixed Icons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* WhatsApp Icon — Always Visible */}
        <a
          href="https://wa.me/919243837546" // ✅ Your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>

        {/* Scroll To Top — Visible only when scrolled */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        )}
      </div>
    </>
  )
}
