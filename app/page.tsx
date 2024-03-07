import About from "@components/About";
import Certificate from "@components/Certificate";
import Contact from "@components/Contact";
import FloatingContent from "@components/FloatingContent";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import Project from "@components/Project";
import Skill from "@components/Skill";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <FloatingContent />
      <Certificate />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
