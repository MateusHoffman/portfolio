"use client";

import { aboutData } from "@/data/local/AboutData";
import React, { useState } from "react";
import ModalAbout from "./ModalAbout";
import { boldWordsInText } from "@/app/util/format";

export default function About() {
  const [isOpenModalAbout, setIsOpenModalAbout] = useState(false);

  function handleSeeMore() {
    setIsOpenModalAbout(true);
  }

  const wordsToBold = [
    "desenvolvedor pleno",
    "Front-End mobile e web",
    "dois anos de experiência profissional",
    "soft skills",
    "JavaScript",
    "TypeScript",
    "Kotlin",
    "React",
    "Native",
    "Jetpack Compose",
    "responsividade",
    "testes",
    "desempenho",
  ];

  return (
    <>
      <section className="md:w-3/5 2xl:w-5/12 w-full border-[1px] border-[#8C8C8C] border-opacity-20 md:rounded-xl bg-white">
        <header className="px-4 pt-4 md:px-6 md:pt-6">
          <h1 className="text-black text-opacity-90 text-xl font-semibold leading-5">
            Sobre
          </h1>
        </header>
        <main className="px-4 md:px-6">
          <p
            className="py-3 text-black text-opacity-90 text-base leading-5 font-normal"
            dangerouslySetInnerHTML={{
              __html: boldWordsInText(aboutData.mainText, wordsToBold),
            }}
          />
        </main>
        <footer className="px-4 md:px-6 py-2 border-t-[1px] border-t-[#8C8C8C] border-opacity-20 hover:bg-[#8c8c8c1a]">
          <button onClick={handleSeeMore} className="w-full text-center">
            <span className="text-base text-[#000000BF] font-semibold">
              Ver mais...
            </span>
          </button>
        </footer>
      </section>
      <ModalAbout isOpen={isOpenModalAbout} setIsOpen={setIsOpenModalAbout} />
    </>
  );
}
