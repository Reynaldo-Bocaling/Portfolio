"use client";

import { Skills } from "@constant";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div id="skill" className="py-16 w-full">
      <div className="flexColCenter max-w-[700px] mx-auto px-12">
        <motion.span
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold text-white"
        >
          Skills & Tech Stacks
        </motion.span>
        <div>
          <div className="w-full mt-14 grid grid-cols-2 justify-center items-center gap-[4rem] md:grid-cols-4">
            {Skills.map((Item, index) => (
              <motion.div
                key={index}
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: [-15, 0], opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flexColCenter gap-3 text-white"
              >
                <Item.icon
                  size={Item.size}
                  className={`cursor-pointer ${Item.color} transition-all`}
                />
                <small className="text-xs text-gray-50">{Item.label}</small>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
