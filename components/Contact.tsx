import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GrContact } from "react-icons/gr";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const notify = (message: string) => toast.success(message);

  const onSubmit = async (content: any) => {
    setLoading(true);
    const sendMessage = await axios.post("/api/save-message", content);
    if (sendMessage.status == 200) {
      notify(sendMessage.data.msg);
      reset();
    }
    setLoading(false);
  };
  return (
    <div
      id="contacto"
      className="sectionno px-3 md:px-0 container flex flex-col md:flex-row  mx-auto lg:max-w-[1024px] md:max-w-2xl"
    >
      <div className="w-full md:w-1/2">
        <h4 className="text-2xl font-bold">¿Hablamos?</h4>
        <p className="mb-5">Tu idea, sea la que sea, me interesa.</p>

        <div className="mb-6">
          <h5 className="font-bold mb-3">Datos de contacto</h5>
          <p className="text-[14px]">
            <b>Teléfono de contacto:</b> +34 654 47 05 78 Teléfono para empresas
          </p>
          <p className="text-[14px]">
            <b>Agencias:</b> +34 654 470 578{" "}
          </p>
          <p className="text-[14px]">
            <b>Email:</b>hi.kevindev@gmail.com
          </p>
        </div>

        <div className="mb-6">
          <h5 className="font-bold mb-3">Horarios</h5>
          <p className="text-[14px]">Online: 24/7</p>
          <p className="text-[14px]">
            Atención al cliente: Lunes a Viernes de 09:00 a 19:00
          </p>
        </div>

        <div className="mb-6">
          <h5 className="font-bold mb-3">Dirección</h5>
          <p className="text-[14px]">Online: 24/7</p>
          <p className="text-[14px]">C/ San Roque 52, Soneja, Castellon.</p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="* Nombre"
            className="w-full px-4 py-2 text-black rounded-md"
            {...register("customer")}
          />
          <input
            type="email"
            placeholder="* Email"
            className="w-full px-4 py-2 text-black rounded-md"
            {...register("email")}
          />
          <input
            type="number"
            placeholder="* Teléfono"
            className="w-full px-4 py-2 text-black rounded-md"
            {...register("phone")}
          />
          <textarea
            placeholder="* Escribe consulta"
            className="w-full px-4 py-2 h-40 text-black rounded-md"
            {...register("message")}
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="mt-5 font-bold w-fit bg-[#1FFF5E ] text-black rounded-md"
          >
            <GrContact />
            Enviar formulario
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
