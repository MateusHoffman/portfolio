"use client";

import React, { useState } from "react";
import ModalRecommendation from "./ModalRecommendation";
import ListRecommendations from "./_components/ListRecommendations";

export default function Recommendation() {
  const [isOpenModalRecommendation, setIsOpenModalRecommendation] =
    useState(false);

  function handleSeeMore() {
    setIsOpenModalRecommendation(true);
  }

  return (
    <>
      <section className="md:w-3/5 2xl:w-5/12 w-full border-[1px] border-[#8C8C8C] border-opacity-20 md:rounded-xl bg-white">
        <header className="px-4 pt-4 md:px-6 md:pt-6">
          <h1 className="text-black text-opacity-90 text-xl font-semibold leading-5">
            Recomendações
          </h1>
        </header>
        <main className="px-4 md:px-6">
          <ListRecommendations />
        </main>
        <footer className="px-4 md:px-6 py-2 border-t-[1px] border-t-[#8C8C8C] border-opacity-20 hover:bg-[#8c8c8c1a]">
          <button onClick={handleSeeMore} className="w-full text-center">
            <span className="text-base text-[#000000BF] font-semibold">
              Ver mais...
            </span>
          </button>
        </footer>
      </section>
      <ModalRecommendation
        isOpen={isOpenModalRecommendation}
        setIsOpen={setIsOpenModalRecommendation}
      />
    </>
  );
}
