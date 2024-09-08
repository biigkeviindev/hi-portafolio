import React from "react";
import { BiLogoLinkedin, BiSolidContact } from "react-icons/bi";
import { IoIosCodeWorking } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
import { RiReactjsFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="section container flex items-center justify-center mx-auto lg:max-w-[1024px] md:max-w-2xl">
      <div className="flex-col ">
        <div className="flex items-center gap-4">
          <img
            src="shortcut.jpg"
            className="rounded-full w-20 shadow-sm shadow-white"
            alt=""
          />
          <span className="bg-[#1f2937] font-semibold flex items-center gap-4 border-2 text-[14px] px-8 py-1 rounded-full">
            <IoIosCodeWorking size={24} />
            Disponible para trabajar
          </span>
          <span className="bg-[#1f2937] font-semibold flex items-center gap-4 border-2 text-[14px] px-8 py-1 rounded-full">
            <RiReactjsFill size={24} />
            FullStack
          </span>
          <span className="bg-[#1f2937] font-semibold  flex items-center gap-4 border-2 text-[14px] px-8 py-1 rounded-full">
            <LuBrainCircuit size={24} />
            IA lover
          </span>
        </div>
        <div className="mt-10">
          <h1 className="text-5xl font-bold text-white">Hey, soy kevin</h1>
          <p className="text-xl mt-7">
            +10 años de experiencia. Ingeniero de Software y Apasionado por el
            desarrollo de soluciones digitales en Valencia, España.
            Especializado en el desarrollo de aplicaciones web únicas.
          </p>
          <div className="flex gap-7 mt-10">
            <button className="rounded-full border-2 border-[#f1f2f3]">
              <BiSolidContact />
              Contáctame
            </button>
            <button className="rounded-full border-2 border-[#f1f2f3]">
              <BiLogoLinkedin />
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
