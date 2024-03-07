"use client";

import React from "react";
import react from "@public/images/skills_img/react.png";
import tailwind from "@public/images/skills_img/tailwindcss.png";
import bootstrap from "@public/images/skills_img/bootstrap.png";
import angular from "@public/images/skills_img/angular.png";
import jquery from "@public/images/skills_img/jquery.png";
import js from "@public/images/skills_img/js.png";
import { motion } from "framer-motion";
import Image from "next/image";

const FloatingContent = () => {
  return (
    <div id="floatContent" className="w-full bg-[#2e2e2e]">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-[700px] bg-white rounded-lg mx-auto py-10 px-8 flex flex-col md:flex-row md:justify-between md:items-end"
      >
        <div className="flex flex-col gap-4  max-w-[450px]">
          <p className=" text-sm font-medium flex flex-col gap-3 text-[#6636ea]">
            Ready to Collaborate on{" "}
            <span className="text-2xl md:text-3xl font-semibold text-[#131212]">
              our Next Project?
            </span>
          </p>
          <small className="max-[200px] text-gray-700 tracking-wide">
            Excited to collaborate on your next project! Let's turn your ideas
            into reality. Reach out and let's create something amazing together!
          </small>
        </div>
        <button className="bg-[#6636ea] text-white text-sm py-3 px-7 rounded-full shadow-xl shadow-[#dfddf9] mt-5">
          Contact Me
        </button>

        {/* float image */}
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ x: [10, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -left-20 top-1 flex items-center justify-center p-2 bg-white rounded-full"
        >
          <Image src={react} alt="" className="w-[45px]" />
        </motion.div>
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -left-2 md:-left-5 border bottom-2 flex items-center justify-center p-2 bg-white  shadow-lg rounded-full"
        >
          <Image src={angular} alt="" className="w-[25px]" />
        </motion.div>
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-8 -top-2 md:-top-16 flex items-center justify-center p-2 bg-white  shadow-lg rounded-full"
        >
          <Image src={bootstrap} alt="" className="w-[25px]" />
        </motion.div>
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -right-16 bottom-12 flex items-center justify-center p-2 bg-white  shadow-lg rounded-full"
        >
          <Image src={jquery} alt="" className="w-[35px]" />
        </motion.div>
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ x: [15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute right-3 -top-5 flex items-center justify-center p-2 bg-white  shadow-lg rounded-full"
        >
          <Image src={js} alt="" className="w-[25px]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FloatingContent;
