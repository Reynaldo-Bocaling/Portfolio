"use client";

import React from "react";
import { socialInfo, personalInfo } from "@constant";
import { Input, Button, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="w-full py-14 bg-[#2e2e2e]">
      <div className="max-w-[1124px] mx-auto px-5 flex flex-col gap-8">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-15, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-2 mb-5"
        >
          <small className="text-[#7443f9] font-semibold tracking-wide">
            Get In Touch
          </small>
          <span className="text-2xl font-bold text-white">Contact Me</span>
        </motion.div>

        <div className="bg-white rounded-lg py-8 px-7 flex flex-col md:flex-row gap-12 md:gap-5 overflow-x-hidden">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-50, 0], opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <p className="text-2xl font-bold mb-3">Just Say Hi</p>
            <p className="text-sm text-gray-600">
              Hello there! Excited to connect with you. Whether you have a
              project in mind or just want to say hello, feel free to drop me a
              message. Let's turn your ideas into reality!
            </p>

            <div className="flex flex-col items-start gap-7 mt-5">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-5">
                  <item.icon size={18} />
                  <span className="text-sm font-semibold">{item.text}</span>
                </div>
              ))}
              <div className=" flex items-center gap-3 pl-1">
                {socialInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#2e2e2e] shadow-lg text-white w-[35px] h-[35px] rounded-full flex items-center justify-center"
                  >
                    <item.icon />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [50, 0], opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 "
          >
            <p className="text-2xl font-bold mb-3 ">Get In Touch</p>
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-2">
                <Input type="email" size="sm" label="Email" />
                <Input type="email" size="sm" label="Email" />
                <Input type="email" size="sm" label="Email" />
                <Input type="email" size="sm" label="Email" />
              </div>
              <Textarea label="Message" size="lg" className="" />
            </div>
            <Button color="primary" className="mt-4">
              Send
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;