"use client";

import React, { useEffect, useState } from "react";
import Logo from "@public/logo/logo.png";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { menuVariant, mobileLinkVariant, containerVariants } from "./Animate";
import { navLinks } from "@constant";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 25);
    });
  }, []);

  const socialMedia = [FaFacebookF, FaInstagram, FaGithub];
  return (
    <motion.div
      initial={{ y: -25 }}
      animate={{ y: -5 }}
      transition={{ duration: 0.5 }}
      id="navbar"
      className={`${
        scroll && "blur_effect"
      } fixed w-full top-0 left-0 z-50 shadow-md2`}
    >
      <div className="flexBetween max-w-[1124px] mx-auto py-3 px-6">
        <Image src={Logo} alt="Logo" width={50} />
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, path }, index) => {
            return (
              <li key={index}>
                <a
                  href={path}
                  className="capitalize text-sm text-white tracking-wide opacity-[0.6] hover:opacity-[1] transition-all"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setToggleMenu(true)}
          className="flexCenter h-[40px] w-[40px] bg-white rounded-full shadow-lg md:hidden"
        >
          <HiMenuAlt4 size={25} />
        </button>

        <div className="hidden md:flex items-center gap-4 ">
          {socialMedia.map((Item, index) => (
            <div key={index} className="contentSocialMedia">
              <Item size={20} />
            </div>
          ))}
        </div>

        {/* mobile navbar */}
        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              variants={menuVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 left-0 w-full h-screen bg-[#2c2e31] origin-top md:hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flexBetween mt-2 py-3 px-6"
              >
                <Image src={Logo} alt="Logo" width={30} />

                <button
                  onClick={() => setToggleMenu(false)}
                  className="flexCenter h-[40px] w-[40px] bg-white rounded-full"
                >
                  <HiX size={22} />
                </button>
              </motion.div>

              <motion.ul
                variants={containerVariants}
                initial="initial"
                animate="open"
                className="mt-10 flex flex-col items-start gap-9 p-10"
              >
                {navLinks.map(({ label, path }, index) => {
                  return (
                    <li className="overflow-hidden" key={index}>
                      <motion.div variants={mobileLinkVariant}>
                        <a
                          href={path}
                          onClick={() => setToggleMenu(false)}
                          className="capitalize text-xl font-light text-white tracking-wider opacity-[0.6] hover:opacity-[1]"
                        >
                          {label}
                        </a>
                      </motion.div>
                    </li>
                  );
                })}
              </motion.ul>

              <div className="flexCenter mt-20 gap-7 w-full">
                {socialMedia.map((Item, index) => (
                  <div key={index} className="contentSocialMedia">
                    <Item size={20} />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;
