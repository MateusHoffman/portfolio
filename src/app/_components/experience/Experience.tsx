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
      <section className="md:w-3/5 2xl:w-5/12 w-full border-[1px] border-[#8C8C8C] border-opacity-20 md:rounded-xl bg-white">
        {/* eslint-disable @next/next/no-img-element */}
        <header className="px-4 pt-4 md:px-6 md:pt-6">
          <h1 className="text-black text-opacity-90 text-xl font-semibold leading-5">
            Experiência
          </h1>
        </header>
        <main className="px-4 md:px-6">
          <ListExperience handleSeeMore={handleSeeMore} />
        </main>

        <footer className="px-4 md:px-6 py-2 border-t-[1px] border-t-[#8C8C8C] border-opacity-20 hover:bg-[#8c8c8c1a]">
          <button onClick={handleSeeMore} className="w-full text-center">
            <span className="text-base text-[#000000BF] font-semibold">
              Ver tudo...
            </span>
          </button>
        </footer>
      </section>
      <ModalExperience
        isOpen={isOpenModalExperience}
        setIsOpen={setIsOpenModalExperience}
        handleSeeMore={handleSeeMore}
      />
    </>
  );
}
