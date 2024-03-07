"use client";

import React from "react";
import react from "@public/images/skills_img/react.png";
import bootstrap from "@public/images/skills_img/bootstrap.png";
import angular from "@public/images/skills_img/angular.png";
import jquery from "@public/images/skills_img/jquery.png";
import js from "@public/images/skills_img/js.png";
import { motion } from "framer-motion";
import Image from "next/image";

const FloatingContent = () => {
  const floatingIcon = [
    {
      icon: react,
      initial: { y: 0, opacity: 0 },
      whileInView: { x: [10, 0], opacity: 1 },
      transition: { duration: 1 },
      style: "flexCenter absolute -left-20 top-1 p-2 bg-white rounded-full",
    },
    {
      icon: angular,
      initial: { y: 0, opacity: 0 },
      whileInView: { y: [-15, 0], opacity: 1 },
      transition: { duration: 1 },
      style:
        "flexCenter absolute -left-2 md:-left-5 border bottom-2 p-2 bg-white  shadow-lg rounded-full",
    },
    {
      icon: bootstrap,
      initial: { y: 0, opacity: 0 },
      whileInView: { y: [-15, 0], opacity: 1 },
      transition: { duration: 1 },
      style:
        "flexCenter absolute left-8 -top-2 md:-top-16 p-2 bg-white  shadow-lg rounded-full",
    },
    {
      icon: jquery,
      initial: { y: 0, opacity: 0 },
      whileInView: { y: [15, 0], opacity: 1 },
      transition: { duration: 1 },
      style:
        "flexCenter absolute -right-16 bottom-12 p-2 bg-white  shadow-lg rounded-full",
    },
    {
      icon: js,
      initial: { y: 0, opacity: 0 },
      whileInView: { x: [15, 0], opacity: 1 },
      transition: { duration: 1 },
      style:
        "flexCenter absolute right-3 -top-5 p-2 bg-white  shadow-lg rounded-full",
    },
  ];

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
        <button className="btn-violet py-3 px-7 rounded-full shadow-xl shadow-[#dfddf9] mt-5">
          Contact Me
        </button>

        {/* float image */}
        {floatingIcon.map(
          ({ initial, whileInView, transition, style, icon }, index) => (
            <motion.div
              key={index}
              initial={initial}
              whileInView={whileInView}
              transition={transition}
              className={style}
            >
              <Image src={icon} alt="" className="w-[25px]" />
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default FloatingContent;
