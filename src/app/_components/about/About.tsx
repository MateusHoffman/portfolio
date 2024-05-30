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
    "Front-End",
    "mobile",
    "web",
    "dois anos",
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
      <section className="md:w-3/5 2xl:w-5/12 md:p-6 p-4 w-full border-[1px] border-[#8C8C8C] border-opacity-20 md:rounded-xl bg-white">
        <h1 className="text-black text-opacity-90 text-xl font-semibold leading-5">
          Sobre
        </h1>
        <p
          className="py-3 text-black text-opacity-90 text-base leading-5 font-normal"
          dangerouslySetInnerHTML={{ __html: boldWordsInText(aboutData.mainText, wordsToBold) }}
        />
        <div className="w-full flex justify-end">
          <button onClick={handleSeeMore}>
            <span className="text-black text-opacity-60 text-base leading-5 font-normal">
              Ver mais...
            </span>
          </button>
        </div>
      </section>
      <ModalAbout isOpen={isOpenModalAbout} setIsOpen={setIsOpenModalAbout} />
    </>
  );
}
