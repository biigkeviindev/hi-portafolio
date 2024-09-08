import React from "react";

const Footer = () => {
  return (
    <div className="mt-16 container flex  mx-auto pb-10 lg:max-w-[1024px] md:max-w-2xl justify-between">
      <p>
        © 2024 kevindev. <b>Casi todos los derechos reservados</b>
      </p>
      <nav className="flex gap-5 ">
        <span>Sobre mí</span>
        <span>Contacto</span>
      </nav>
    </div>
  );
};

export default Footer;
