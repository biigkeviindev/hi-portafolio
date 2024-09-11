import { projects } from "@/constants/projects";
import { BsGithub } from "react-icons/bs";
import { CgVercel } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { GiThumbDown } from "react-icons/gi";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="mt-16 container flex  mx-auto pb-20 lg:max-w-[1024px] md:max-w-2xl"
    >
      <div className="px-3 md:px-0">
        <h2 className="text-[30px] flex items-center gap-4 font-bold">
          <FaCode />
          Proyectos
        </h2>
        <div className="mt-20 flex flex-col gap-14">
          {projects.map((entry, key) => (
            <Item key={key} item={entry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Item = ({ item }: any) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 min-h-[200px] ">
      <div className="md:w-1/2 bg-slate-800 rounded-md">
        <img src={item.imagen} className="rounded-md" alt="" />
      </div>
      <div className="flex flex-col justify-center md:w-1/2">
        <h3 className="text-xl font-bold text-white">{item.titulo}</h3>
        <div className="gap-4 flex">
          {item.herramientas.map((entry: any, key: number) => (
            <span key={key} className="text-[12px] md:text-sm text-[#c7c7c7]">
              {entry}
            </span>
          ))}
        </div>
        <p className="mt-5">{item.descripcion}</p>
        <div className="flex mt-5 gap-4">
          {/* <span className="flex gap-4 items-center bg-gray-700 py-2 px-3 border rounded-md">
            <BsGithub />
            Code
          </span>
          <span className="flex gap-4 items-center bg-gray-700 py-2 px-3 border rounded-md">
            <CgVercel />
            Preview
          </span> */}
        </div>
      </div>
    </div>
  );
};
