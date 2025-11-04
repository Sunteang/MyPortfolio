"use client";

import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Image with Decorative Rings */}
        <div className="relative flex justify-center md:justify-start">
          {/* Animated Dotted Rings (Subtle UI Enhancement) */}
          <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-teal-300 opacity-20 animate-pulse"></div>
          <div className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full border border-teal-400 opacity-30 animate-pulse delay-700"></div>

          <motion.img
            src={profile.images.image}
            alt={profile.name}
            className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-white shadow-xl object-cover z-10 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Role Badge */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none md:bottom-4 md:-right-4 bg-teal-600 text-white px-4 py-2 rounded-lg shadow-md z-20 text-center">
            <p className="font-semibold text-sm">{profile.role}</p>
            <p className="text-xs opacity-90">{profile.projects} Projects</p>
          </div>
        </div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Me
          </h2>

          <p className="text-gray-600 leading-relaxed">{profile.about}</p>

          {/* Stats in Clean Cards */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-teal-600">
                {profile.experience}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Years Experience
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-teal-600">
                {profile.projects}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Projects Done
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
