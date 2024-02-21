// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { IProject } from "@/utils/interfaces";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, FC } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ||||||||||||||||||||||||||||| PortfolioItems Component ||||||||||||||||||||||||||||||||||||

// Props
interface Props {
  list: IProject[];
}

const PortfolioItems: FC<Props> = ({ list }) => {
  // Hooks
  const [currentItem, setCurrentItem] = useState(0);

  const handlePrevSlide = () => {
    const can_prev = currentItem == 0;
    const prev = can_prev ? list.length - 1 : currentItem - 1;
    setCurrentItem(prev);
  };
  const handleNextSlide = () => {
    const can_next = currentItem < list.length - 1;
    const next = can_next ? currentItem + 1 : 0;
    setCurrentItem(next);
  };

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <div className="w-full lg:mx-auto max-w-[1300px] space-y-24 transition-all">
      <div className="top flex justify-center items-center space-x-10 text-2xl text-color_link">
        <div
          className="arrow bg-color_link px-2 py-2 text-color_black rounded-full cursor-pointer"
          onClick={handlePrevSlide}
        >
          <FaChevronLeft />
        </div>
        <div className="flex items-center gap-x-4 divide-x-2">
          <p className="text-tw_primary">{`${list[currentItem].id}`}</p>
          <p className="pl-4 text-tw_accent">{`${list.length}`}</p>
        </div>
        <div
          className="arrow bg-color_link px-2 py-2 text-color_black rounded-full cursor-pointer"
          onClick={handleNextSlide}
        >
          <FaChevronRight />
        </div>
      </div>
      <div className="bottom content max-w-[1600px] mx-auto py-16 px-10 flex justify-between items-center max_xl_2:flex-col max_xl_2:space-y-24">
        <motion.div
          className={`img relative w-[500px] h-[300px] max_xl:max-w-[400px] max_xl:h-[240px] max_xl_2:max-w-[500px] max_xl_2:h-[300px] max_md:max-w-[310px] max_md:h-[190px]`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="filter w-full h-full border-4 border-color_link rounded-xl max_sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
          <motion.img
            src={list[currentItem].img}
            alt="project-img"
            className={`technos-img sm:absolute top-6 left-10 w-full rounded-xl h-full object-fill`}
          />
        </motion.div>
        <div className="text max-w-[600px] flex flex-col lg:space-y-10">
          <div className="top flex flex-col space-y-6 max_xl_2:text-center">
            <h2 className="text-xl uppercase">{list[currentItem].title}</h2>
            <h2 className="text-xl uppercase">{list[currentItem].role}</h2>
            <h3 className="text-xl uppercase">{list[currentItem].date}</h3>
          </div>
          <div className="bottom flex pt-14">
            <div className="buttons mx-auto space-x-10 max_md:flex max_md:flex-col max_md:space-x-0 max_md:space-y-10">
              {list[currentItem].link && (
                <Link
                  href={list[currentItem].link}
                  className="w-[250px] py-4 bg-tw_primary rounded-lg text-tw_text_dark font-black inline-block text-center"
                >
                  Voir le site
                </Link>
              )}
              <Link
                href={`/portfolio/${list[currentItem].id}/${list[
                  currentItem
                ].title
                  .toLowerCase()
                  .trim()
                  .split(" ")
                  .join("-")}`}
                className="w-[250px] py-4 rounded-lg text-tw_primary border-4 border-tw_primary font-black inline-block text-center"
              >
                Plus de detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioItems;
