import { MdOutlineAssignmentInd } from "react-icons/md";

export const Profile = () => {
  return (
    <div
      id="aboutme"
      className="mt-16 container flex  mx-auto pb-20 lg:max-w-[1024px] md:max-w-2xl"
    >
      <div className="px-3 md:px-0">
        <h2 className="text-[30px] flex items-center gap-4 font-bold">
          <MdOutlineAssignmentInd />
          Sobre mi
        </h2>
        <div className="mt-20 flex flex-col md:flex-row  gap-14">
          <div className="w-full md:w-1/2">
            <p className="mb-3">
              ¡Hola! Soy Kevin Rivera Ramírez, un apasionado desarrollador de
              front-end con más de 5 años de experiencia en la creación de
              interfaces web intuitivas y eficientes.
            </p>
            <p className="mb-3">
              A lo largo de mi carrera, he tenido la oportunidad de trabajar en
              diversos sectores como banca, e-commerce y medicina, donde he
              aplicado mi pasión por el código limpio y la mejora continua.
            </p>
            <p className="mb-3">
              Me encanta enfrentarme a nuevos desafíos y aprender cada día,
              siempre buscando soluciones innovadoras que hagan la vida más
              fácil para los usuarios. Ya sea trabajando en proyectos complejos
              para grandes empresas o como freelance, disfruto de la oportunidad
              de colaborar con equipos diversos y construir productos digitales
              que realmente marquen la diferencia.
            </p>
            <p className="mb-3">
              Si estás buscando a alguien que combine habilidad técnica con un
              enfoque creativo y comprometido, estaré encantado de ayudarte a
              llevar tus ideas al siguiente nivel.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="kevin.png"
              className="w-[310px] h-[300px] rounded-md shadow-sm -rotate-6 shadow-[#f1f2f3]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
