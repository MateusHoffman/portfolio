"use client";

import { aboutData } from "@/data/local/AboutData";
import React from "react";

export default function About() {
  function handleSeeMore() {
    console.log("Abrir modal para ver o conteúdo completo da seção About");
  }

  return (
    <section className="md:w-3/5 2xl:w-5/12 md:p-6 p-4 w-full border-[1px] border-[#8C8C8C] border-opacity-20 md:rounded-xl bg-white">
      <h1 className="text-black text-opacity-90 text-xl font-semibold leading-5">
        Sobre
      </h1>
      <p className="py-3 text-black text-opacity-90 text-sm leading-5 font-normal">
        {aboutData.mainText}
      </p>
      <div className="w-full flex justify-end">
        <button onClick={handleSeeMore}>
          <span className="text-black text-opacity-60 text-sm leading-5 font-normal">
            Ver mais...
          </span>
        </button>
      </div>
    </section>
  );
}
