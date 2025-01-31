"use client";
import React from "react";
import { styles } from "../app/style";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full py-5 bg-primary text-white  bottom-0 z-10`}
    >
      <div className="w-full flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto">
        {/* Social Links */}
        <div className="flex flex-row sm:flex-row sm:items-center gap-4 sm:gap-6">
          <Link
            href="https://github.com/Muse-feta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
          >
            <FaGithub className="w-6 h-6 sm:w-5 sm:h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/muse-feta-3673b42a0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
          >
            <FaLinkedin className="w-6 h-6 sm:w-5 sm:h-5" />
          </Link>
          <a href="tel:+251985322632" className="hover:text-secondary">
            <FaPhone className="w-6 h-6 sm:w-5 sm:h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[14px] font-medium text-center mt-4 sm:mt-0">
          © {new Date().getFullYear()} Muse Portfolio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
