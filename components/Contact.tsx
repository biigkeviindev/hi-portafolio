import React from "react";
import { GrContact } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="sectionno container flex  mx-auto lg:max-w-[1024px] md:max-w-2xl">
      <div className="w-1/2">
        <h4 className="text-2xl font-bold">¿Hablamos?</h4>
        <p className="mb-5">Tu idea, sea la que sea, me interesa.</p>

        <div className="mb-6">
          <h5 className="font-bold">Datos de contacto</h5>
          <p className="text-[14px]">
            Teléfono de contacto: +34 686 507 686 Teléfono para empresas
          </p>
          <p className="text-[14px]">Agencias: +34 654 470 578 </p>
          <p className="text-[14px]">Email: equipo.pixeldigital@gmail.com</p>
        </div>

        <div className="mb-6">
          <h5 className="font-bold">Horarios</h5>
          <p className="text-[14px]">Online: 24/7</p>
          <p className="text-[14px]">
            Atención al cliente: Lunes a Viernes de 09:00 a 19:00
          </p>
        </div>

        <div className="mb-6">
          <h5 className="font-bold">Dirección</h5>
          <p className="text-[14px]">Online: 24/7</p>
          <p className="text-[14px]">C/ San Roque 52, Soneja, Castellon.</p>
        </div>
      </div>
      <div className="w-1/2">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="* Nombre"
            className="w-full px-4 py-2"
          />
          <input
            type="text"
            placeholder="* Email"
            className="w-full px-4 py-2"
          />
          <input
            type="text"
            placeholder="* Teléfono"
            className="w-full px-4 py-2"
          />
          <textarea
            placeholder="* Escribe consulta"
            className="w-full px-4 py-2 h-40"
          ></textarea>
          <button className="mt-5 font-bold w-fit bg-[#facc15] text-black rounded-md">
            <GrContact />
            Enviar formulario
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
