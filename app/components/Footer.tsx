"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Send,
  ArrowUp,
  Github,
} from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="bg-teal-900 text-white pt-12 pb-6 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <div className="text-3xl font-bold text-teal-300 mb-4">
            <span className="text-gray-200">SEREY</span> SUNTEANG
          </div>
          <p className="text-gray-300 mb-6">
            I've been working as web developer for the past two years, and have
            experience in multiple frameworks.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold text-teal-300 mb-4">
            Contact Details
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Phone className="text-teal-300 flex-shrink-0" size={18} />
              <span>{profile.phoneNumber}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-teal-300 flex-shrink-0" size={18} />
              <span>{profile.contactEmail}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-teal-300 flex-shrink-0" size={18} />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-teal-300 mb-4">
            Quick Links
          </h3>
          <div className="mt-4 flex space-x-4">
            <a
              href={profile.socials.facebook}
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href={profile.socials.instagram}
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.socials.pinterest}
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Pinterest"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[20px] h-[20px]"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 4.91 3.53 9.05 8.21 10.34-.11-.88-.21-2.24.04-3.21.23-.99 1.49-6.31 1.49-6.31s-.38-.76-.38-1.88c0-1.76 1.02-3.08 2.28-3.08 1.08 0 1.6.81 1.6 1.79 0 1.09-.69 2.72-1.04 4.23-.3 1.26.64 2.29 1.89 2.29 2.27 0 3.8-2.9 3.8-6.34 0-2.61-1.76-4.57-4.96-4.57-3.62 0-5.88 2.7-5.88 5.72 0 1.04.31 1.77.79 2.33.22.26.25.37.17.67-.06.22-.19.73-.25.94-.08.3-.32.41-.59.3-1.64-.67-2.4-2.47-2.4-4.49 0-3.34 2.82-7.34 8.4-7.34 4.49 0 7.44 3.26 7.44 6.76 0 4.61-2.56 8.06-6.34 8.06-1.27 0-2.46-.69-2.87-1.49l-.78 2.98c-.28 1.08-1.04 2.44-1.55 3.26C9.8 23.84 10.89 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-teal-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2024 All Right Reserved. Designed by SEREY Sunteang
      </div>

      {showBackToTop && (
        <button
          className="fixed bottom-4 right-4 bg-teal-600 hover:bg-teal-700 p-3 rounded-full text-white shadow-lg transition-colors z-50 cursor-pointer"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </motion.footer>
  );
}
