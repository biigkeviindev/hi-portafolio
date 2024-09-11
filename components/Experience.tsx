import { experiencieProfile } from "@/constants/experience";
import React, { useState } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const Experience = () => {
  const [seeMore, setSeeMore] = useState(3);

  return (
    <div
      id="experience"
      className="sectionno container flex  mx-auto lg:max-w-[1024px] md:max-w-2xl pt-16 md:pt-0"
    >
      <div className="px-3 md:px-0">
        <h2 className="text-[30px] flex items-center gap-4 font-bold">
          <MdWork />
          Experiencia laboral
        </h2>
        <div className="mt-20">
          {experiencieProfile.map(
            (entry: any, index: number) =>
              index < seeMore && <Item key={index} item={entry} />
          )}
        </div>
        <div className="flex justify-center py-7 pt-11">
          {experiencieProfile.length !== seeMore ? (
            <FaArrowAltCircleDown
              size={50}
              color="#1FFF5E "
              className="cursor-pointer"
              onClick={() => setSeeMore(experiencieProfile.length)}
            />
          ) : (
            <FaArrowAltCircleUp
              size={50}
              color="#1FFF5E"
              className="cursor-pointer"
              onClick={() => setSeeMore(3)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Item = ({ item }: any) => {
  return (
    <div className="flex flex-col md:flex-row relative pt-4  pb-3 border-l-2 border-[#f1f2f3] min-h-[8rem] ">
      <div className="px-6 md:w-1/2">
        <p className="text-xl text-[#1FFF5E]">{item.cargo}</p>
        <p className="text-xl">{item.empresa}</p>
        <span className="text-sm text-[#ffffffcc]">{item.rango_fechas}</span>
      </div>
      <div className="px-6 md:w-1/2">
        <p className="text-[14px] md:text-lg">{item.descripcion}</p>
      </div>
      <div className="absolute w-4 h-4 rounded-full -left-2 bg-[#1FFF5E]"></div>
    </div>
  );
};
export default Experience;
