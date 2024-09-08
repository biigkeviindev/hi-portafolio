import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center pt-5  ">
      <div className="bg-[#1f2937e6] w-fit px-14 rounded-full  shadow-sm">
        <nav className="flex justify-center text-[#E5E7EB] gap-8 py-3 ">
          <span className="cursor-pointer hover:text-[#f1f2f3]">
            Experiencia
          </span>
          <span className="cursor-pointer hover:text-[#f1f2f3]">Proyectos</span>
          <span className="cursor-pointer hover:text-[#f1f2f3]">Sobre mí</span>
          <span className="cursor-pointer hover:text-[#f1f2f3]">Contacto</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
