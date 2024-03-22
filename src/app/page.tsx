"use client";

// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { FC } from "react";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import Layout from "../layout";
import technos_img from "../../public/images/technos.jpg";
import service_img from "../../public/images/service-home.jpg";
import LinkButton from "@/components/buttons/LinkButton";
import HeroBanner from "@/components/items/HeroBanner";

// ||||||||||||||||||||||||||||| HomePage Component ||||||||||||||||||||||||||||||||||||

interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = ({}) => {
  // Return
  return (
    <Layout>
      <motion.div
        aria-label="home page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HeroBanner />
        <section id="presentation" className="presentation bg-tw_secondary">
          <div
            aria-label="content"
            className="content max-w-[1600px] mx-auto py-16 px-10 flex justify-between items-center max_xl_2:flex-col max_xl_2:space-y-24"
          >
            <div
              aria-label="image"
              className="img relative w-[500px] h-[300px] max_xl:max-w-[400px] max_xl:h-[240px] max_xl_2:max-w-[500px] max_xl_2:h-[300px] max_md:max-w-[310px] max_md:h-[190px]"
            >
              <div className="filter w-full h-full border-4 border-color_link rounded-xl max_sm:hidden"></div>
              <Image
                src={technos_img}
                alt="techno_img.png"
                className="technos-img sm:absolute top-6 left-10 w-full rounded-xl"
              />
            </div>
            <div
              aria-label="text"
              className="text max-w-[600px] flex flex-col space-y-10"
            >
              <div className="top flex flex-col space-y-6 max_xl_2:text-center">
                <p>
                  En tant que Développeur Full Stack, j’ai eu l’occasion de travailler
                  sur divers projets me donnant une bonne connaissance sur la
                  création de sites internet et de gestion de services web.
                </p> 
                <p>
                  Cette liste d&apos;outils récentes (Nextjs, Reactjs, Express
                  JS, MySQL, PostgreSQL, Spring Boot, etc..) est une combinaison parfaite d'outils
                  afin de réaliser une grande majorités des sites web modernes.
                </p>
                <p>
                  N’hesitez donc pas à me contacter pour soliciter mes services
                  ou pour toutes autres informations.
                </p>
              </div>
              <div className="bottom">
                <div className="buttons mx-auto md:space-x-10 flex max_xl_2:justify-center max_md:flex-col max_md:items-center w-full max_md:space-x-0 max_md:space-y-10">
                  <LinkButton
                    link="/contact"
                    text="Contactez Moi"
                    style="w-[250px] py-4"
                  />
                  <a
                    href="https://github.com/iam4ealdamba"
                    target="_blank"
                    className="w-[250px] py-4 rounded-lg text-tw_primary border-4 border-tw_primary font-black inline-block text-center"
                  >
                    Consultez mon Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <div
            aria-label="content"
            className="content max-w-[1600px] mx-auto py-16 px-10 flex justify-between items-center max_xl_2:flex-col max_xl_2:space-y-24"
          >
            <div
              aria-label="image"
              className="img relative w-[500px] h-[300px] lg:order-2 max_xl:max-w-[400px] max_xl:h-[240px] max_xl_2:order-1 max_xl_2:max-w-[500px] max_xl_2:h-[300px] max_md:max-w-[310px] max_md:h-[190px]"
            >
              <div className="filter w-full h-full border-4 border-color_link rounded-xl max_sm:hidden"></div>
              <Image
                src={service_img}
                alt="service-img.png"
                className="technos-img sm:absolute top-6 -left-10 w-full rounded-xl"
              />
            </div>
            <div
              aria-label="text"
              className="text max-w-[600px] flex flex-col space-y-10 order-1"
            >
              <div className="top flex flex-col space-y-6 max_xl_2:text-center">
                <p>
                  Les services que je peut vous offrir sont assez nombreux et
                  assureront du bon dérouler des projets que vous me confierez:
                </p>
                <ul className="space-y-3 max_xl_2:flex max_xl_2:flex-col max_xl_2:items-center">
                  <li className="flex gap-x-4 items-center max_xl_2:w-[300px]">
                    <FaCircle className="text-xs" /> Sites Sur Mesures
                  </li>
                  <li className="flex gap-x-4 items-center max_xl_2:w-[300px]">
                    <FaCircle className="text-xs" /> Site Vitrine
                  </li>
                  <li className="flex gap-x-4 items-center max_xl_2:w-[300px]">
                    <FaCircle className="text-xs" /> Site E-commerce
                  </li>
                  <li className="flex gap-x-4 items-center max_xl_2:w-[300px]">
                    <FaCircle className="text-xs" /> Application Mobile
                  </li>
                  <li className="flex gap-x-4 items-center max_xl_2:w-[300px]">
                    <FaCircle className="text-xs" /> Design Web
                  </li>
                  <li className="flex gap-x-4 items-center max_xl_2:w-[300px]">
                    <FaCircle className="text-xs" /> Maintenance Web,
                    Référencement
                  </li>
                </ul>
              </div>
              <div className="bottom">
                <div className="buttons mx-auto md:space-x-10 flex max_xl_2:justify-center max_md:flex-col max_md:items-center w-full max_md:space-x-0 max_md:space-y-10">
                  <Link
                    href="/services"
                    className="w-[250px] py-4 bg-tw_primary rounded-lg text-tw_text_dark font-black inline-block text-center"
                  >
                    Consultez les services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};
export default HomePage;
