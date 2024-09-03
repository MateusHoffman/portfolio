"use client";

import React, { useState } from "react";
import ModalAcademic from "./ModalAcademic";
import ListAcademic from "./_components/ListAcademic";

export default function Academic() {
  const [isOpenModalAcademic, setIsOpenModalAcademic] = useState(false);

  function handleSeeMore() {
    setIsOpenModalAcademic(true);
  }

  return (
    <>
      <section className="md:w-3/5 2xl:w-5/12 w-full border-[1px] border-[#8C8C8C] border-opacity-20 md:rounded-xl bg-white">
        {/* eslint-disable @next/next/no-img-element */}
        <header className="px-4 pt-4 md:px-6 md:pt-6">
          <h1 className="text-black text-opacity-90 text-xl font-semibold leading-5">
            Formação acadêmica
          </h1>
        </header>
        <main className="px-4 md:px-6">
          <ListAcademic handleSeeMore={handleSeeMore} />
        </main>

        <footer className="px-4 md:px-6 py-2 border-t-[1px] border-t-[#8C8C8C] border-opacity-20 hover:bg-[#8c8c8c1a]">
          <button onClick={handleSeeMore} className="w-full text-center">
            <span className="text-base text-[#000000BF] font-semibold">
              Ver mais...
            </span>
          </button>
        </footer>
      </section>
      <ModalAcademic
        isOpen={isOpenModalAcademic}
        setIsOpen={setIsOpenModalAcademic}
        handleSeeMore={handleSeeMore}
      />
    </>
  );
}
