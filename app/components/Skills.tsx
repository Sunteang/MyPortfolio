"use client";

import { motion } from "framer-motion";
import { profile } from "../data/profile";

const programmingLanguages = profile.skills.programmingLanguages;
const librariesFrameworks = profile.skills.librariesFrameworks;
const tools = profile.skills.tools;

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-white text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-700">
          Programming Languages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programmingLanguages.map((skill, i) => (
            <div
              key={i}
              className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">
                  {skill.name}
                </span>
                <span className="text-sm text-teal-600 font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-700">
          Libraries / Frameworks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {librariesFrameworks.map((skill, i) => (
            <div
              key={i}
              className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">
                  {skill.name}
                </span>
                <span className="text-sm text-teal-600 font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-700">
          Tools & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((skill, i) => (
            <div
              key={i}
              className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">
                  {skill.name}
                </span>
                <span className="text-sm text-teal-600 font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
