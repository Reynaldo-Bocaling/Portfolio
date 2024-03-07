import certificate1 from "@public/images/certificate_img/certificate1.png";
import certificate2 from "@public/images/certificate_img/certificate2.png";

import education from "@public/images/projects_img/interntrack.jpg";
import interntrack from "@public/images/projects_img/interntrack.jpg";
import headphone from "@public/images/projects_img/headphone.jpg";

import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaPhp,
  FaAngular,
  FaGithub,
} from "react-icons/fa";
import { DiJavascript, DiJqueryLogo } from "react-icons/di";
import {
  SiTypescript,
  SiPrisma,
  SiTailwindcss,
  SiMui,
  SiMongodb,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoGmail } from "react-icons/bi";
import { HiMiniUser } from "react-icons/hi2";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";

import react from "@public/images/skills_img/react.png";
import angular from "@public/images/skills_img/angular.png";
import tailwind from "@public/images/skills_img/tailwindcss.png";
import bootstrap from "@public/images/skills_img/bootstrap.png";
import html from "@public/images/skills_img/html.png";
import css from "@public/images/skills_img/css.png";
import js from "@public/images/skills_img/js.png";

export const Skills = [
  {
    icon: FaHtml5,
    color: "hover:text-orange-500",
  },
  {
    icon: FaCss3,
    color: "hover:text-blue-500",
  },
  {
    icon: DiJavascript,
    color: "hover:text-yellow-500",
  },
  {
    icon: SiTypescript,
    color: "hover:text-blue-500",
  },
  {
    icon: FaReact,
    color: "hover:text-blue-400",
  },
  {
    icon: FaAngular,
    color: "hover:text-red-600",
  },
  {
    icon: DiJqueryLogo,
    color: "hover:text-blue-400",
  },
  {
    icon: FaBootstrap,
    color: "hover:text-purple-600",
  },
  {
    icon: SiTailwindcss,
    color: "hover:text-cyan-400",
  },
  {
    icon: SiMui,
    color: "hover:text-blue-500",
  },
  {
    icon: FaNodeJs,
    color: "hover:text-green-400",
  },
  {
    icon: FaPhp,
    color: "hover:text-indigo-600",
  },
  {
    icon: SiPrisma,
    color: "hover:text-green-500",
  },
  {
    icon: GrMysql,
    color: "hover:text-blue-500",
  },
  {
    icon: SiMongodb,
    color: "hover:text-green-400",
  },
  {
    icon: FaGithub,
    color: "hover:text-purple-600",
  },
];

export const navLinks = [
  {
    label: "Home",
    path: "#",
  },
  {
    label: "About",
    path: "#about",
  },
  {
    label: "Skill",
    path: "#skill",
  },
  {
    label: "Project",
    path: "#project",
  },
  {
    label: "Certificate",
    path: "#certificate",
  },
  {
    label: "Contact",
    path: "#contact",
  },
];

export const resumeData = [
  {
    title: "Name",
    text: "Reynaldo F. Bocaling Jr",
    icon: HiMiniUser,
  },
  {
    title: "Phone",
    text: "63+ 9489946337",
    icon: FaPhoneAlt,
  },
  {
    title: "Email",
    text: "reynaldobocaling@gmail.com",
    icon: RiSendPlaneFill,
  },
];

export const projects = [
  {
    id: 1,
    name: "interntrack",
    type: "dynamic",
    date: "2023",
    description: "project description",
    image: interntrack,
    tech: [
      "ReactJs",
      "Zustand",
      "Tailwindcss",
      "MUI",
      "NodeJs",
      "Express",
      "Prisma",
      "Mysql",
      "Typescript",
    ],
  },
  {
    id: 2,
    name: "education",
    type: "static",
    date: "2023",
    description: "project description",
    image: education,
    tech: ["Angular js", "Tailwindcss", "Typescript"],
  },
  {
    id: 3,
    name: "headphone",
    type: "static",
    date: "2022",
    description: "project description",
    image: headphone,
    tech: ["Html", "Css", "Javascript", "Jquery"],
  },
];

export const projectTab = ["All", "Static", "Dynamic"];

export const skillModel = [
  {
    icon: html,
    style: "top-1/2 -left-7  p-4 md:w-[30px] md:h-[30px]",
    size: "w-[25px] h-[25px] md:w-[30px] md:h-[30px]",
  },
  {
    icon: angular,
    size: "w-[15px] h-[15px] md:w-[20px] md:h-[20px]",
    style: "top-0 left-20 p-2 md:top-4",
  },
  {
    icon: bootstrap,
    size: "w-[15px] h-[15px] md:w-[20px] md:h-[20px]",
    style: "top-8 md:top-12 right-10 p-2",
  },
  {
    icon: tailwind,
    style: "bottom-1/4 -right-3 p-3",
    size: "w-[25px] h-[25px] md:w-[30px] md:h-[30px]",
  },
];

export const certModel = [
  {
    icon: html,
    positionY: "top-1",
    positionX: "-left-2",
    size: "w-[90px]",
    padding: "p-4",
    rotate: "rotate-[-30deg]",
  },
  {
    icon: css,
    positionY: "-top-7",
    positionX: "left-14 md:left-24",
    size: "w-[50px]",
    padding: "p-2",
    rotate: "rotate-[30deg]",
  },
  {
    icon: js,
    positionY: "top-5 md:top-12",
    positionX: "right-7 md:right-10",
    size: "w-[60px]",
    padding: "p-2",
    rotate: "rotate-[30deg]",
  },
  {
    icon: bootstrap,
    positionY: "bottom-1/3",
    positionX: "left-3",
    size: "w-[80px]",
    padding: "p-3",
    rotate: "rotate-[30deg]",
  },
  {
    icon: tailwind,
    positionY: "bottom-0 md:bottom-5",
    positionX: "-right-2",
    size: "w-[70px]",
    padding: "p-3",
    rotate: "rotate-[30deg]",
  },
];

export const certificates = [certificate1, certificate2];

export const socialInfo = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    url: "https://www.facebook.com",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    url: "https://www.facebook.com",
  },
  {
    icon: BiLogoGmail,
    label: "Gmail",
    url: "https://www.facebook.com",
  },
  {
    icon: FaGithub,
    label: "Github",
    url: "https://www.facebook.com",
  },
];
export const personalInfo = [
  {
    title: "Name",
    text: "Tabuating, San Leonardo Nueva Ecija",
    icon: MdLocationPin,
  },
  {
    title: "Email",
    text: "reynaldobocaling@gmail.com",
    icon: RiSendPlaneFill,
  },
  {
    title: "Phone",
    text: "63+ 9489946337",
    icon: FaPhoneAlt,
  },
];

export const aboutFloatText = [
  {
    label: "Frontend",
    position: "top-10 md:top-20 left-1",
  },
  {
    label: "Freelancer",
    position: "top-[40%] md:top-1/3 left-9 md:-left-24",
  },
  {
    label: "Exploring MERN Stack",
    position: "top-36 md:top-40 -right-0 md:-right-12",
  },
  {
    label: "Design Thinking",
    position: "bottom-2 md:bottom-10 left-2 md:-left-7",
  },
  {
    label: "React Dev",
    position: "bottom-1 -right-14",
  },
];
