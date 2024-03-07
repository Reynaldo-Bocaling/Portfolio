"use client";

import React from "react";
import HandWaving from "@public/images/waving.png";
import HomeModel from "@public/images/home.png";
import { motion } from "framer-motion";
import { skillModel } from "@constant";
import Image from "next/image";
const Home = () => {
  const moveButton = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };
  return (
    <motion.div
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      id="home"
      className=" pt-[80px] md:pt-[100px] w-full overflow-hidden "
    >
      <div className="max-w-[1124px] mx-auto flex flex-col items-center justify-between md:flex-row px-7  gap-5">
        <div className="max-w-[440px] flex flex-col items-start gap-7 mb-5">
          <span className="homefloatText text-[#6636ea] font-bold md:text-lg">
            Do You Know Me?
          </span>
          <div className="relative flex items-start">
            <Image
              src={HandWaving}
              alt="hand waving icon"
              width={70}
              className="absolute -mt-3"
            />
            <p className=" text-[2.1rem] md:text-[2.7rem] text-white font-bold tracking-wider leading-[3.2rem] first-letter:ml-[4rem]">
              I'm Reynaldo Bocaling Jr.
            </p>
          </div>
          <p className="text-[#d9d8d8] text-sm tracking-wide text-center md:text-left">
            a passionate Frontend and MERN Stack Developer. With a keen eye for
            design and a love for coding, I bring ideas to life, creating
            seamless and visually appealing web experiences.
          </p>
          <motion.button
            variants={moveButton}
            animate="animation"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="mx-auto md:mx-0 bg-red-500 text-white text-sm py-2 px-7 rounded-full shadow-lg shadow-[#3d3d3d] mt-3 md:mt-5"
          >
            Contact Me
          </motion.button>
        </div>

        <div className="relative mt-4">
          <motion.div
            initial={{ rotate: "-90deg" }}
            animate={{ rotate: "-15deg" }}
            transition={{ duration: 7, type: "spring" }}
            className="animae h-[320px] w-[320px] absolute -left-5 -top-3 bg-bslue-400 rounded-full border border-gray-500 border-dashed md:h-[500px] md:w-[500px]"
          >
            <div className="relative w-full h-full rounded-full">
              {skillModel.map(({ icon, style, size }, index) => (
                <div
                  key={index}
                  className={`${style} absolute bg-white rounded-full`}
                >
                  <Image src={icon} alt="_" className={size} />
                </div>
              ))}
            </div>
          </motion.div>
          <Image
            src={HomeModel}
            alt="Home img"
            className="relative z-30 max-w-[280px] md:max-w-[450px]"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
