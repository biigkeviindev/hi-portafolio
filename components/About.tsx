import React from "react";
import { BiLogoLinkedin, BiSolidContact } from "react-icons/bi";
import { IoIosCodeWorking } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
import { RiReactjsFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="section container flex items-center justify-center mx-auto lg:max-w-[1024px] md:max-w-2xl pt-20 md:pt-0">
      <div className="flex-col ">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            src="shortcut.jpg"
            className="rounded-full w-20 shadow-sm shadow-white"
            alt=""
          />
          <div className="flex gap-2">
            <span className="cursor-pointer shadow-sm shadow-white bg-[#1f2937] font-semibold flex items-center gap-2 md:gap-4 border-2 text-[12px] md:text-[14px] px-4 md:px-8 py-1 rounded-full">
              <IoIosCodeWorking size={24} />
              Disponible
            </span>
            <span className="cursor-pointer shadow-sm shadow-white bg-[#1f2937] font-semibold flex items-center gap-2 md:gap-4 border-2 text-[12px] md:text-[14px] px-4 md:px-8 py-1 rounded-full">
              <RiReactjsFill size={24} />
              FullStack
            </span>
            <span className="cursor-pointer shadow-sm shadow-white bg-[#1f2937] font-semibold  flex items-center gap-2 md:gap-4 border-2 text-[12px] md:text-[14px] px-4 md:px-8 py-1 rounded-full">
              <LuBrainCircuit size={24} />
              IA lover
            </span>
          </div>
        </div>
        <div className="mt-10 px-3">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Hey, soy Kevin programador web freelance
          </h1>
          <p className="text-sm md:text-xl mt-7">
            <b>Desarrollador FullStack</b> con más de 5 años de experiencia en
            la creación de interfaces web modernas y escalables. He trabajado en
            proyectos para grandes empresas y como freelance, utilizando
            tecnologías como <b> HTML, CSS, JavaScript y React</b> para
            optimizar la experiencia de usuario y el rendimiento de aplicaciones
            web.
          </p>
          <div className="flex justify-center md:justify-start gap-7 mt-10">
            <a
              href="https://wa.me/34654470578"
              target="_blank"
              className="hover:shadow-md transition hover:bg-[#1FFF5E ] hover:text-black hover:border-[#ffffff] shadow-slate-600 flex items-center px-5 gap-3 rounded-full border-2 border-[#f1f2f3]"
            >
              <BiSolidContact />
              Contáctame
            </a>
            <a
              href="https://www.linkedin.com/in/kevinriveradev/"
              target="_blank"
              className="hover:shadow-md transition hover:bg-[#1FFF5E ] hover:text-black flex items-center px-5 py-2 gap-3 rounded-full border-2 border-[#f1f2f3]"
            >
              <BiLogoLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
