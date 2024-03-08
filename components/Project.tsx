"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { projects, projectTab } from "@constant";
import { motion } from "framer-motion";
import Image from "next/image";

const Project = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTab = (item: any) => {
    setActiveTab(item);
  };

  const projectFilter = projects.filter((item) =>
    activeTab === "All" ? item : item.type == activeTab.toLowerCase()
  );

  return (
    <div id="project" className="w-full py-16 bg-[#2e2e2e]">
      <div className="max-w-[1124px] mx-auto px-5 flex flex-col gap-8">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="flexColCenter gap-2 mb-3"
        >
          <small className="text-[#7443f9] font-semibold tracking-wide">
            My Work
          </small>
          <span className="text-2xl font-bold text-white">
            Awesome Projects
          </span>
        </motion.div>

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="flexCenter gap-7 mb-3"
        >
          {projectTab.map((item) => (
            <button
              key={item}
              onClick={() => handleTab(item)}
              className={`relative text-gray-300 tracking-wide ${
                activeTab === item &&
                " text-white after:absolute after:-bottom-1 after:h-[1.5px] after:left-0 after:w-full after:bg-white after:transition-all"
              }`}
            >
              {item}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-100, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Swiper
            spaceBetween={5}
            loop={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper flexCenter px-7"
            initialSlide={projectTab.indexOf(activeTab)}
          >
            {projectFilter.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=" bg-white2  mb-12">
                  <Image
                    src={item.image}
                    alt="_"
                    className="object-cover h-[300px] w-full rounded-lg"
                  />
                  <div className="flexBetween px-3 py-2">
                    <div className="flex flex-col gap-2">
                      <div className="max-w-full md:max-w-[170px] w-full">
                        <span className="capitalize text-white font-semibold tracking-wide">
                          {item.name}
                        </span>

                        <div className="mt-2 flex flex-wrap gap-x-2">
                          {item.tech.map((item, index) => (
                            <small
                              key={index}
                              className="text-[0.7rem] text-gray-300"
                            >
                              {item},
                            </small>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flexColStart gap-1">
                      <small className="text-gray-300 tracking-wide">
                        Date: {item.date}
                      </small>
                      <button className="text-sm text-blue-500">
                        Show Info
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
