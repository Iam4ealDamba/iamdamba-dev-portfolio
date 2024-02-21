"use client";

// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";

import Link from "next/link";
import { getProject } from "@/services/database";
import { IProject } from "@/utils/interfaces";
import Loading from "@/app/loading";
import Layout from "@/layout";

// ||||||||||||||||||||||||||||| single Component ||||||||||||||||||||||||||||||||||||

const ProjectDetail = () => {
  // Hooks
  const [loading, setLoading] = useState<boolean>(true);
  const [project, setProject] = useState<IProject | undefined>();
  const router = useParams<{ id: string; title: string }>();

  // Fuunctions
  const FetchProject = () => {
    const list = getProject(Number(router.id));
    setProject(list);
    setLoading(false);
  };

  // Effects
  useEffect(() => {
    FetchProject();
  }, []);

  // Return
  if (loading) return <Loading />;
  if (!project) return notFound();
  return (
    <Layout>
      <motion.main
        className="single-project transition-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section
          aria-label="banner"
          className="w-full bg-tw_secondary text-tw_primary pt-40 pb-10 text-center uppercase space-y-10 px-10"
        >
          <h1 className="text-5xl font-black max_sm:text-xl">
            {project.title}
          </h1>
        </section>
        <section
          className="image-banner relative w-full h-[600px] bg-color_white max_md:h-[400px]"
          style={{
            background: `url(${project.img}) no-repeat fixed center`,
            backgroundSize: "cover",
            opacity: 0.5,
          }}
        >
          <div className="filter absolute top-0 left-0 w-full h-full bg-color_black opacity-40"></div>
        </section>
        <section className="content bg-tw_bg">
          <div className="top flex py-14">
            <div className="buttons mx-auto space-x-10 max_md:flex max_md:flex-col max_md:space-x-0 max_md:space-y-10">
              <a
                href={project.link}
                target={"_blank"}
                className="w-[250px] py-4 bg-tw_primary rounded-lg text-tw_text_dark font-black inline-block text-center"
              >
                Voir le site
              </a>
              <Link
                href={"/portfolio"}
                className="w-[250px] py-4 rounded-lg text-tw_primary border-4 border-tw_primary font-black inline-block text-center"
              >
                Retour en arrière
              </Link>
            </div>
          </div>
          <div className="bottom flex space-x-40 max-w-[1200px] items-center mx-auto px-10 py-20 lg:items-baseline max_xl_2:flex-col max_xl_2:items-center max_xl_2:space-x-0 max_xl_2:space-y-20">
            <div className="left space-y-10 lg:min-w-[350px] max_xl_2:text-center max_xl_2:max-w-[700px]">
              <h2 className="text-2xl font-black text-tw_primary uppercase">
                Detail Mission
              </h2>
              <ul className="space-y-6">
                <li className="grid grid-cols-3">
                  <p className="text-xl">Client :</p>
                  <p className="col-span-2 text-tw_accent max_xl_2:text-start">
                    {project.client}
                  </p>
                </li>
                <li className="grid grid-cols-3">
                  <p className="text-xl">Role :</p>
                  <p className="col-span-2 text-tw_accent max_xl_2:text-start">
                    {project.role}
                  </p>
                </li>
                <li className="grid grid-cols-3">
                  <p className="text-xl">Stack :</p>
                  <p className="col-span-2 text-tw_accent max_xl_2:text-start">
                    {project.stack}
                  </p>
                </li>
                <li className="grid grid-cols-3">
                  <p className="text-xl">Date :</p>
                  <p className="col-span-2 text-tw_accent max_xl_2:text-start">
                    {project.date}
                  </p>
                </li>
              </ul>
            </div>
            <div className="right grid text-end space-y-10 lg:min-w-[350px] max_xl_2:text-center max_xl_2:max-w-[700px]">
              <h2 className="text-2xl font-black text-tw_primary uppercase">
                Description
              </h2>
              <div className="text space-y-6">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
};

export default ProjectDetail;
