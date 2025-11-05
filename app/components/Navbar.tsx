"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin } from "lucide-react";
import { profile } from "../data/profile";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    "home",
    "about",
    "experience",
    "skills",
    "portfolio",
    "contact",
  ];

  const handleScroll = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  useEffect(() => {
    const sections = navItems.map((id) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50"
    >
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        <h1 className="text-2xl font-bold text-teal-600">
          SEREY <span className="text-gray-800">SUNTEANG</span>
        </h1>

        <div className="hidden md:flex space-x-6 font-medium text-gray-700">
          {navItems.map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={`transition ${
                active === id
                  ? "text-teal-600 font-semibold cursor-pointer"
                  : "hover:text-teal-600 cursor-pointer"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={() => handleScroll("contact")}
            className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition cursor-pointer"
          >
            Hire Me
          </button>

          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} className="text-gray-700" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 text-2xl cursor-pointer"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-teal-50 overflow-hidden border-t border-gray-200"
          >
            <div className="flex flex-col items-center py-4 space-y-3">
              {navItems.map((id) => (
                <button
                  key={id}
                  onClick={() => handleScroll(id)}
                  className={`w-full text-center py-2 font-medium transition ${
                    active === id
                      ? "text-teal-600 font-semibold cursor-pointer"
                      : "text-gray-700 hover:text-teal-600 cursor-pointer"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
