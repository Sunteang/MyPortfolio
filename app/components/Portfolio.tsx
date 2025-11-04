"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/profile";

const projects = profile.portfolio;

export default function Portfolio() {
  const [visibleCount, setVisibleCount] = useState(4);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, projects.length));
  };

  const showLess = () => {
    setVisibleCount(4);
    window.scrollTo({
      top: document.getElementById("portfolio")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  const isAllVisible = visibleCount >= projects.length;

  return (
    <section id="portfolio" className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        My Portfolio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence>
          {projects.slice(0, visibleCount).map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-102 transition-all bg-gray-800 text-white"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-xs rounded-full text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More / Show Less Button */}
      {projects.length > 4 && (
        <div className="flex justify-center mt-12">
          {!isAllVisible ? (
            <button
              onClick={showMore}
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition-all"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={showLess}
              className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition-all"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </section>
  );
}
