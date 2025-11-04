"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 pt-16 pb-10 bg-gradient-to-b from-teal-100 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-teal-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <motion.div
        className="md:w-1/2 text-center md:text-left space-y-6 z-10 mt-8 md:mt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Hey! I am <span className="text-teal-600">Web Developer</span>
        </h1>
        <p className="text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
          I am a Full-Stack Web Developer. My expertise is in creating &
          designing websites and have experience in multiple frameworks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
          <Link href="resume.pdf" target="_blank" download>
            <button className="px-6 py-2 bg-teal-600 text-white rounded-full shadow hover:bg-teal-700 transition font-medium">
              DOWNLOAD CV
            </button>
          </Link>

          <button
            onClick={() => handleScroll("about")}
            className="px-6 py-2 border-2 border-gray-800 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition font-medium"
          >
            LEARN MORE
          </button>
        </div>
      </motion.div>

      <motion.div
        className="md:w-1/2 flex justify-center mb-8 md:mb-0 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute w-[340px] h-[340px] md:w-[440px] md:h-[440px] rounded-full border-2 border-teal-300 opacity-30 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-2 border-teal-400 opacity-50 animate-pulse delay-1000"></div>

        <img
          src={profile.images.proPicture}
          alt="Serey Sunteang - Web Developer"
          className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-white shadow-xl object-cover z-10 relative"
        />
      </motion.div>
    </section>
  );
}
