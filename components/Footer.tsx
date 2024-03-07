"use client";

import React from "react";
import Logo from "@public/logo/logo.png";
import { navLinks } from "@constant";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#2e2e2e] py-5">
      <div className="max-container w-full mx-auto  mb-3 ">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="flexCenter mb-9"
        >
          <Image src={Logo} alt="" className="w-[50px]" />
          <p className="text-xl font-bold text-white">eynaldo</p>
        </motion.div>

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="flexCenter gap-4 mt-2 "
        >
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="text-xs md:text-sm text-gray-400 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xs text-gray-500 text-center tracking-wide mt-10"
        >
          Copyright&copy;2024 All rights reserved.Made by <br />
          <span className="text-[#7443f9]">Reynaldo Bocaling jr</span>
          <p className="mt-4">Built with Next js, Tailwindcss, Typescript </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
