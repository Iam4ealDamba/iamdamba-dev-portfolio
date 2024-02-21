// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import Image from "next/image";
import Link from "next/link";

import hero_img from "../../../public/images/hero-banner.jpg";
import mouse_wheel_img from "../../../public/images/mouse-scroll-wheel.svg";

// ||||||||||||||||||||||||||||| HeroBanner Component ||||||||||||||||||||||||||||||||||||

const HeroBanner = () => {
  // Return
  return (
    <section aria-label="hero banner" className="relative w-full h-[100vh]">
      <div
        aria-label="hero banner image"
        className="absolute top-0 left-0 w-full h-full"
      >
        <div
          aria-label="hero banner filter"
          className="absolute z-[1] top-0 left-0 w-full h-full bg-tw_bg/75"
        ></div>
        <Image
          src={hero_img}
          alt="hero_img.jpg"
          fill
          className="w-full h-full object-cover object-top contrast-125 saturate-50 hue-rotate-15 brightness-90"
        />
      </div>
      <div className="absolute z-[2] w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="max_sm:translate-y-12">
          <h1 className="px-10 text-7xl text-center max-w-[1400px] uppercase mx-auto text-tw_primary max_lg:text-6xl max_md:text-5xl max_sm:text-3xl">
            N’attendez plus,
            <br /> votre Futur Projet web sera entre de bonnes mains
          </h1>
          <div className="input flex py-14">
            <div className="buttons mx-auto space-x-10 max_sm:flex max_sm:flex-col max_sm:space-x-0 max_sm:space-y-10">
              <Link
                href="/portfolio"
                className="w-[250px] py-4 bg-tw_primary rounded-lg text-tw_text_dark font-black inline-block text-center"
              >
                Découvrez mes projets
              </Link>
              <Link
                href="/contact"
                className="w-[250px] py-4 rounded-lg text-tw_primary border-4 border-tw_primary font-black inline-block text-center"
              >
                Contactez Moi
              </Link>
            </div>
          </div>
          <div className="mouse-wheel w-full flex">
            <a href="#presentation" className="inline-block mx-auto">
              <Image src={mouse_wheel_img} alt="mouse-wheel.svg" width={56} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroBanner;
