"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { motion } from "framer-motion";
import { EffectCards } from "swiper/modules";
import { certModel, certificates } from "@constant";
import Image from "next/image";

const Certificate = () => {
  return (
    <div id="certificate" className=" py-20 bg-[#2e2e2e]">
      <div className="relative max-w-[600px] mx-auto">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="flexColCenter gap-2 mb-7"
        >
          <small className="text-[#7443f9] font-semibold tracking-wide">
            My Achievement
          </small>
          <span className="text-2xl font-bold text-white">
            Our Certificates
          </span>
        </motion.div>
        <div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {certificates.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={item}
                    loading="lazy"
                    alt="_"
                    className="object-fill"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          {certModel.map((item, index) => (
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: [15, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              key={index}
              className={`absolute  ${item.positionX} ${item.positionY} `}
            >
              <Image
                src={item.icon}
                alt="_"
                className={` ${item.size} ${item.rotate} ${item.padding}`}
              />
            </motion.div>
          ))}
        </div>

        <div className="slide_text slideTextAnimation">
          Swipe left or right to explore more!
        </div>
      </div>
    </div>
  );
};

export default Certificate;
