"use client";

// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// ||||||||||||||||||||||||||||| 404 Component ||||||||||||||||||||||||||||||||||||

const Page404 = () => {
  // Hooks
  const router = useRouter();

  // Functions
  useEffect(() => {
    // Enter some content here.
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(router.push("/"));
      }, 3000);
    });
  }, []);

  // Return
  return (
    <main className="page-404 py-20 mx-auto">
      <section className="flex flex-col justify-center items-center space-y-8">
        <h1 className="font-black text-color_white text-4xl">
          404 Page not found.
        </h1>
        <p>Vous allez être redirigé dans quelques secondes...</p>
      </section>
    </main>
  );
};

export default Page404;
