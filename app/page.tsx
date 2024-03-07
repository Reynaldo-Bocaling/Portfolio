import About from "@components/About";
import Certificate from "@components/Certificate";
import Contact from "@components/Contact";
import FloatingContent from "@components/FloatingContent";
import Hero from "@components/Hero";
import Project from "@components/Project";
import Skill from "@components/Skill";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Project />
      <FloatingContent />
      <Certificate />
      <Contact />
    </>
  );
};

export default page;
