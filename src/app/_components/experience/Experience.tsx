"use client";

import React, { useState } from "react";
import ModalExperience from "./ModalExperience";
import ListExperience from "./_components/ListExperience";

export default function Experience() {
  const [isOpenModalExperience, setIsOpenModalExperience] = useState(false);

  function handleSeeMore() {
    setIsOpenModalExperience(true);
  }

  return (
    <>
      <section className="md:w-3/5 2xl:w-5/12 md:p-6 p-4 w-full border-[1px] border-[#8C8C8C] border-opacity-20 md:rounded-xl bg-white">
        {/* eslint-disable @next/next/no-img-element */}
        {/* Título de seção */}
        <h1 className="text-black text-opacity-90 text-xl font-semibold leading-5">
          Experiência
        </h1>
        {/* Lista de experiências */}
        <ListExperience handleSeeMore={handleSeeMore} />
        {/* Botão "Ver mais..." */}
        <div className="w-full flex justify-end">
          <button onClick={handleSeeMore}>
            <span className="text-black text-opacity-60 text-base leading-5 font-normal">
              Ver mais...
            </span>
          </button>
        </div>
      </section>
      <ModalExperience
        isOpen={isOpenModalExperience}
        setIsOpen={setIsOpenModalExperience}
        handleSeeMore={handleSeeMore}
      />
    </>
  );
}
