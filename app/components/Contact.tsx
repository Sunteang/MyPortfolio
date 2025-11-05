"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Facebook,
} from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);

    // You can still send the form to Formspree if needed
    fetch("https://formspree.io/f/mjkpjera", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
        Get In Touch
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-lg mx-auto">
        I'm always interested in hearing about new opportunities, whether it's a
        full-time role, freelance project, or just a chat about technology.
        Don't hesitate to reach out!
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-gray-800">Get in Touch</h3>

          {/* Contact Cards */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <Mail className="text-teal-600" size={20} />
              </div>
              <span className="text-gray-700">{profile.contactEmail}</span>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <Phone className="text-teal-600" size={20} />
              </div>
              <span className="text-gray-700">{profile.phoneNumber}</span>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <MapPin className="text-teal-600" size={20} />
              </div>
              <span className="text-gray-700">{profile.location}</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
              aria-label="GitHub"
            >
              <Github size={18} className="text-gray-700" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-gray-700" />
            </a>
            <a
              href={profile.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
              aria-label="Facebook"
            >
              <Facebook size={18} className="text-gray-700" />
            </a>
            <a
              href={profile.socials.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
              aria-label="Pinterest"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[18px] h-[18px] text-gray-700"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 4.91 3.53 9.05 8.21 10.34-.11-.88-.21-2.24.04-3.21.23-.99 1.49-6.31 1.49-6.31s-.38-.76-.38-1.88c0-1.76 1.02-3.08 2.28-3.08 1.08 0 1.6.81 1.6 1.79 0 1.09-.69 2.72-1.04 4.23-.3 1.26.64 2.29 1.89 2.29 2.27 0 3.8-2.9 3.8-6.34 0-2.61-1.76-4.57-4.96-4.57-3.62 0-5.88 2.7-5.88 5.72 0 1.04.31 1.77.79 2.33.22.26.25.37.17.67-.06.22-.19.73-.25.94-.08.3-.32.41-.59.3-1.64-.67-2.4-2.47-2.4-4.49 0-3.34 2.82-7.34 8.4-7.34 4.49 0 7.44 3.26 7.44 6.76 0 4.61-2.56 8.06-6.34 8.06-1.27 0-2.46-.69-2.87-1.49l-.78 2.98c-.28 1.08-1.04 2.44-1.55 3.26C9.8 23.84 10.89 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
        >
          {sent && (
            <p className="text-green-600 font-medium mb-4">
              ✅ Message sent successfully!
            </p>
          )}
          <div className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-teal-600"
            />

            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-teal-600"
            />

            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-teal-600"
            />

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full h-32 resize-none focus:outline-none focus:border-teal-600"
            />

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition font-medium flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
