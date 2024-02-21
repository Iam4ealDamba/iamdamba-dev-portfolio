// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import Image from "next/image";
import { useState, useEffect, FC } from "react";

// ||||||||||||||||||||||||||||| ServiceItem Component ||||||||||||||||||||||||||||||||||||

// Props
interface IServiceItemProps {
  img: string;
  title: string;
  contentList: string[];
  order: string;
}

const ServiceItem: FC<IServiceItemProps> = ({
  img,
  title,
  contentList,
  order,
}) => {
  // Return
  return (
    <div className="content max-w-[1400px] mx-auto pb-16 px-10 flex justify-between items-center max_xl_2:flex-col max_xl_2:space-y-24">
      <div
        className={`img relative ${
          order == "right" && "lg:order-2 max_xl_2:-order-none"
        } w-[500px] h-[300px] max_xl:max-w-[400px] max_xl:h-[240px] max_xl_2:max-w-[500px] max_xl_2:h-[300px] max_md:max-w-[310px] max_md:h-[190px]`}
      >
        <div className="filter w-full h-full border-4 border-color_link rounded-xl max_sm:hidden"></div>
        <img
          src={img}
          alt="service-img.jpg"
          className={`technos-img sm:absolute top-6 ${
            order == "right" ? "-left-10" : "left-10"
          } w-full rounded-xl`}
        />
      </div>
      <div className="text max-w-[600px] flex flex-col space-y-10">
        <div className="top flex flex-col space-y-6 max_sm:text-center">
          <h2 className="text-xl uppercase">{title}</h2>
        </div>
        <div className="bottom flex flex-col space-y-6 max_sm:text-center">
          {contentList.map((content, key) => (
            <p key={key}>{content}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceItem;
