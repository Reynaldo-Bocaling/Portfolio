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
      <div className="flexColBetween max-container md:flex-row px-7  gap-5 md:px-10 lg:px-14">
        <div className="flexColStart max-w-[440px] gap-7 mb-5">
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
            <p className=" text-[2.1rem] md:text-[2.7rem] text-white font-bold tracking-wide leading-[3.2rem] first-letter:ml-[4rem]">
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
            className="btn-violet mx-auto md:mx-0 py-3 px-9 rounded-full shadow-lg shadow-[#3d3d3d] mt-3 md:mt-5"
          >
            <a href="#contact">Contact Me</a>
          </motion.button>
        </div>

        <div className="relative mt-4 md:mt-10 lg:mt-14">
          <motion.div
            initial={{ rotate: "-90deg" }}
            animate={{ rotate: "-15deg" }}
            transition={{ duration: 7, type: "spring" }}
            className="animae h-[320px] w-[320px] absolute -left-5 -top-3 bg-bslue-400 rounded-full border border-gray-500 border-dashed md:h-[450px] md:w-[450px]"
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
            src="/images/home.png"
            alt="Home img"
            className="relative z-30"
            loading="lazy"
            width={400}
            height={400}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
