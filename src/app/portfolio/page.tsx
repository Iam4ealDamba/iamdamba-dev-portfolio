"use client";

// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import database, { getProjects } from "@/services/database";

import PortfolioItems from "@/components/items/PortfolioItems";
import { IProject } from "@/utils/interfaces";
import Loading from "../loading";
import Layout from "@/layout";

// ||||||||||||||||||||||||||||| Portfolio Page Component ||||||||||||||||||||||||||||||||||||

const PortfolioPage = () => {
  // Hooks
  const [loading, setLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<IProject[]>([]);

  // Functions
  const FetchProjects = () => {
    const list = getProjects();
    setProjects(list);
    setLoading(false);
  };

  // Functions
  useEffect(() => {
    FetchProjects();
  }, []);

  // Return
  if (loading) return <Loading />;
  return (
    <Layout>
      <motion.main
        aria-label="portfolio page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section
          aria-label="banner"
          className="w-full bg-tw_secondary text-color_link pt-40 pb-10 text-center uppercase space-y-10 px-10"
        >
          <h1 className="text-5xl font-black max_sm:text-xl">Portfolio</h1>
          <p className="max-w-[800px] mx-auto max_sm:hidden">
            Cette page est la synthèses de tout le travail que j’ai eu à faire
            jusqu’a aujourd’hui. Vous ici autant des projets orientés front et
            back.
          </p>
        </section>
        <section className="list bg-color_secondary py-20 space-y-20">
          <PortfolioItems list={projects} />
        </section>
      </motion.main>
    </Layout>
  );
};

export default PortfolioPage;
