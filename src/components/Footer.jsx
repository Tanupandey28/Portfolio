import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-violet-900 text-white py-14 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 text-center">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row sm:gap-10 gap-6 items-center justify-center">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-2xl text-purple-400" />
            <a
              href="mailto:tanupandey984@gmail.com"
              className="text-purple-300 hover:text-white transition duration-300"
            >
              tanupandey984@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-2xl text-purple-400" />
            <a
              href="tel:+918103740035"
              className="text-purple-300 hover:text-white transition duration-300"
            >
              +91 8103740035
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/tanu-pandey-a0b206192/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-purple-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Tanupandey28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-purple-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/tanupandey28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-purple-400 transition duration-300"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-purple-700 opacity-30" />

        {/* Footer Text */}
        <p className="text-sm text-purple-300">
          &copy; 2025 Tanu Pandey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;