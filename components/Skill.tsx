"use client";

import React, { useState } from "react";
import { Skills } from "@constant";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div id="skill" className="py-20 w-full">
      <div className="max-w-[700px] mx-auto flex flex-col items-center justify-center px-12">
        <motion.span
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold text-white"
        >
          Skills & Experience
        </motion.span>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4   justify-center items-center gap-[4rem] w-full mt-14 text-white ">
            {Skills.map((Item, index) => (
              <motion.div
                key={index}
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: [-15, 0], opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Item.icon
                  size={40}
                  className={`cursor-pointer ${Item.color} transition-all`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
