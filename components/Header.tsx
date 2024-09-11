import React from "react";
import { PiPhone } from "react-icons/pi";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  return (
    <header className="flex justify-center w-full md:pt-5 md:fixed md:right-0 md:left-0 z-index-full">
      <div className="bg-[#1f2937] z-[9999] w-full md:w-fit md:px-14 md:rounded-full  shadow-sm">
        <nav className="hidden md:flex justify-center text-[#E5E7EB] gap-8 py-3 ">
          <a href="#experience" className="cursor-pointer hover:text-[#f1f2f3]">
            Experiencia
          </a>
          <a href="#projects" className="cursor-pointer hover:text-[#f1f2f3]">
            Proyectos
          </a>

          <a href="#contacto" className="cursor-pointer hover:text-[#f1f2f3]">
            Contacto
          </a>
          <a id="#aboutme" className="cursor-pointer hover:text-[#f1f2f3]">
            Sobre mí
          </a>
        </nav>
        {/* Mobile */}
        <div className="fixed w-full md:hidden h-16 flex items-center justify-between  px-3 bg-[#1f2937] text-white">
          <div>
            <img className="w-[140px]" src="logo.png" alt="Logo Web" />
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/34654470578"
              target="_blank"
              className="flex gap-2 bg-[#1FFF5E] text-black rounded-md px-4 py-1"
            >
              <PiPhone size={24} />
              Contactar
            </a>
            {/* <TiThMenu className="cursor-pointer" size={30} color="#ffffff" /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
