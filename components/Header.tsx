import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center pt-5 fixed right-0 left-0 z-index-full">
      <div className="bg-[#1f2937] z-[9999] w-fit px-14 rounded-full  shadow-sm">
        <nav className="flex justify-center text-[#E5E7EB] gap-8 py-3 ">
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
      </div>
    </header>
  );
};

export default Header;
