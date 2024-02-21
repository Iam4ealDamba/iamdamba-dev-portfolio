"use client";

// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { FC, useState } from "react";
import { motion } from "framer-motion";

import ServiceItem from "@/components/items/ServiceItem";
import Layout from "@/layout";

// ||||||||||||||||||||||||||||| Services Page Component ||||||||||||||||||||||||||||||||||||

interface IServicesPageProps {}

const ServicesPage: FC<IServicesPageProps> = ({}) => {
  // Hooks
  const [formSubmitted, setFormSubmitted] = useState({});
  const [contentArray] = useState({
    first: [
      "Un site sur-mesure est un site qui s&apos;adapte à vos besoins et à vos objectifs et non l&apos;inverse. C&apos;est un site entièrement personnalisé avec des fonctionnalités bien précises qui répondent à vos stratégies marketing et à votre communication.",
      "De cette façon, il sera plus facile de vous accompagner et de mener à bien votre projet de création de site web personnalisé. La création d&apos;un cahier des charges complet est faite afin que votre besoin soit au mieux compris.",
    ],
    second: [
      "Un site vitrine est un site qui, par définition, sert essentiellement à présenter une entreprise, une marque, ou une activité, sans générer de ventes directes",
      "Son principal objectif est donc d’informer les internautes sur l’activité de votre entreprise et de communiquer vos coordonnées pour permettre à ceux qui sont intéressés de vous contacter et d’en savoir plus en vue d&apos;acheter vos produits et services.",
    ],
    third: [
      "Le site E-Commerce est une plateforme qui vous servira à vendre vos produit physique ou digitalisées ou bien des services via internet.",
      "Cette plateforme à pour but de viser une plus au moins grande audience de client comme des professionnelles en B-to-B (Business To Business), entre des privées et le gouvernement en B to G (Business to Government), vers des employées en B to E (Business to Employee),  ou meme encore des particuliers en B-to-C (Business To Customer) ou C to C (Customer to Customer).",
    ],
    fourth: [
      "Une application mobile est un programme qui se télécharge sur un smartphone ou une tablette, de façon gratuite ou payante. Il s&apos;agit d&apos;un logiciel développé exclusivement pour une utilisation dédiée sur un support mobile.",
      "Ainsi, les applications sont conçues pour être accessibles partout, en tenant compte de contraintes ergonomiques (adaptabilité à la taille du Smartphone ou écran tactile).",
    ],
    fifth: [
      "Une application métier est une collection de composants offrant une fonctionnalité métier que vous pouvez utiliser en interne, en externe ou avec d&apos;autres applications métier.",
      "Elle consistant en plusieurs composants individuels reliés les uns aux autres souvent adapté en application de bureau.",
    ],
    sixth: [
      "La maintenance d’un site web consiste à mener un ensemble d’actions qui vont garder votre site en bonne santé et à jour, sur le plan technique mais aussi éditorial. En plus de la maintenance, un service à l&apos;aide au referencement (SEO) est aussi appliqué.",
      "il peut être défini comme une façon de positionner un site, une page web ou une application mobile dans les premiers résultats naturels des moteurs de recherche",
    ],
  });

  // Return
  return (
    <Layout>
      <motion.main
        aria-label="services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          aria-label="banner"
          className="w-full bg-tw_secondary text-color_link pt-40 pb-10 text-center uppercase space-y-10 px-10"
        >
          <h1 className="text-4xl font-black max_sm:text-xl">
            LES SERVICES
          </h1>
          <p className="max-w-[800px] mx-auto max_sm:hidden">
            Je peux réaliser tout ce dont votre projet à besoin, maquettes,
            workflows et développement sont maîtres mots de l&apos;agence.
          </p>
        </div>
        <section className="list bg-color_secondary py-20 space-y-20">
          <ServiceItem
            title={"Site sur mesure"}
            contentList={contentArray["first"]}
            img={"/images/service-1.jpg"}
            order="left"
          />
          <ServiceItem
            title={"Site Vitrine"}
            contentList={contentArray["second"]}
            img={"/images/service-2.jpg"}
            order="right"
          />
          <ServiceItem
            title={"Site E-Commerce"}
            contentList={contentArray["third"]}
            img={"/images/service-3.jpg"}
            order="left"
          />
          <ServiceItem
            title={"Application Mobile"}
            contentList={contentArray["fourth"]}
            img={"/images/service-4.jpg"}
            order="right"
          />
          <ServiceItem
            title={"Application Metier"}
            contentList={contentArray["fifth"]}
            img={"/images/service-5.jpg"}
            order="left"
          />
          <ServiceItem
            title={"Maintenance / Referencement"}
            contentList={contentArray["sixth"]}
            img={"/images/service-6.jpg"}
            order="right"
          />
        </section>
      </motion.main>
    </Layout>
  );
};
export default ServicesPage;
