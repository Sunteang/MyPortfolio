"use client";

import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { ServiceIcon, IconName } from "./ServiceIcon";

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-20 bg-teal-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        What Do I Offer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {profile.services.map((s, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center text-teal-600 text-4xl mb-4">
              <ServiceIcon name={s.icon as IconName} />
            </div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
