"use client";

import React from "react";
import AboutModel from "@public/images/about_pic.png";
import { aboutFloatText, resumeData } from "@constant";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full">
      <div className="relative max-w-[550px] mx-auto py-16 flex items-center flex-col gap-5 justify-center px-10 ">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-2 mb-7"
        >
          <small className="text-[#5b31cd] font-semibold tracking-wide">
            Who Am I?
          </small>
          <span className="text-3xl font-bold tracking-wide text-white">
            About Me
          </span>
        </motion.div>

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={AboutModel}
            alt="_"
            width={190}
            className="rounded-full"
            loading="lazy"
          />
        </motion.div>

        <motion.p
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[0.8rem] text-gray-300 leading-6 tracking-wide text-center"
        >
          Greetings! I'm Reynaldo Bocaling Jr, originally from Tabuating, San
          Leonardo, Nueva Ecija. Armed with a degree in Web System Technology,
        </motion.p>

        <motion.p
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[0.8rem] text-gray-300 leading-6 tracking-wide text-center"
        >
          I specialize in frontend development, with a keen passion for design.
          I thrive on exploring the MERN stack, particularly as a dedicated
          React developer.
        </motion.p>

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-5 mt-3"
        >
          {resumeData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-10 text-white text-sm"
            >
              <div className="flex items-center gap-3 ">
                <item.icon />
                {item.title}
              </div>
              {item.text}
            </div>
          ))}
        </motion.div>

        <motion.a
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          href="../public/images/cv.pdf"
          download="Resume"
          className="bg-[#6636ea] text-white text-sm py-[10px] px-7 rounded-full shadow-lg shadow-[#1a1b1d] mt-5"
        >
          Download Resume
        </motion.a>

        {aboutFloatText.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: [-7, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className={`hidden md:block absolute ${item.position} text-gray-200 bg-[rgba(250,250,250,0.1)] rounded-full py-[6px] px-7 text-xs tracking-wide`}
          >
            {item.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
