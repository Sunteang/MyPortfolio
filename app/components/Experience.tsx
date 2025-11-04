"use client";

import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Experience() {
  const experiences = profile.experiences;
  const education = profile.education;

  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-20 bg-white text-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-700">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-teal-600"
              >
                <div className="absolute w-4 h-4 bg-teal-600 rounded-full -left-[9px] top-1"></div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                  <span>🏢 {exp.company}</span>
                  <span>📅 {exp.period}</span>
                </div>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
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
            Education
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-teal-600"
              >
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 bg-teal-600 rounded-full -left-[9px] top-1"></div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {edu.degree}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                  <span>🎓 {edu.institution}</span>
                  <span>📅 {edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
