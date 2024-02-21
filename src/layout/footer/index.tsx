// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

// ||||||||||||||||||||||||||||| Footer Component ||||||||||||||||||||||||||||||||||||

const Footer = () => {
  // Values
  const [scrollVal, setScrollVal] = useState(0);

  // Functions
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollVal(position);
  };
  const handlePushTopBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Return
  return (
    <footer>
      <div className="top bg-tw_secondary flex flex-col justify-center items-center py-10 px-10 space-y-10 text-center">
        <h2 className="text-2xl max_sm:text-xl text-color_link font-black uppercase">
          Rester connecté(e) à mes réseaux
        </h2>
        <div className="list flex space-x-8 items-center ">
          <div className="item">
            <a
              href="https://www.linkedin.com/in/jordi-ngwebo-damba-0228b0148"
              target={"_blank"}
              className="text-4xl"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="item">
            <a
              href="https://github.com/IamDamba"
              target={"_blank"}
              className="text-4xl"
            >
              <FaGithub />
            </a>
          </div>
          <div className="item">
            <a
              href="https://www.malt.fr/profile/jordingwebodamba"
              target={"_blank"}
              className=""
            >
              <Image
                src="/images/malt.svg"
                alt="malt.svg"
                width={38}
                height={38}
                className=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bottom flex flex-col justify-center items-center py-10 text-center px-8">
        <p className="uppercase text-sm font-bold">
          Copyright © 2022 IAMDAMBA. All Rights Reserved
        </p>
        <div
          className={`button fixed bottom-[4vh] right-20  px-3 py-3 cursor-pointer transition-all duration-200 text-tw_text_dark ${
            scrollVal > 150
              ? "sm:visible sm:bg-tw_primary"
              : "invisible bg-transparent"
          }`}
          onClick={handlePushTopBtn}
        >
          <FaArrowUp
            className={`text-color_white ${
              scrollVal > 150 ? "visible delay-100 ease-in-out" : "invisible"
            } max_sm:hidden`}
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
