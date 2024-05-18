"use client";

import React from "react";

export default function Experience() {
  function handleSeeMore() {
    console.log("Abrir modal para ver o conteúdo completo da seção Experience");
  }

  return (
    <section className="md:w-3/5 2xl:w-5/12 md:p-6 p-4 w-full border-[1px] border-[#8C8C8C] border-opacity-20 md:rounded-xl bg-white">
      {/* eslint-disable @next/next/no-img-element */}
      {/* Título de seção */}
      <h1 className="text-black text-opacity-90 text-xl font-semibold leading-5">
        Experiência
      </h1>
      {/* Lista de experiências */}
      <div>
        {/* 1º Experiência */}
        <div className="py-3 flex flex-row">
          <div className="w-14 flex flex-col">
            <img
              className="w-12 h-12"
              src="https://media.licdn.com/dms/image/D4E0BAQGDIMF0chtozQ/company-logo_100_100/0/1691426534167?e=1724284800&v=beta&t=-TI6N0Wd9-4i2LEjWokI0QFkXmZ_v5DMbq-rStkXLaY"
              alt="Logo empresa"
            />
          </div>
          <div className="">
            <div className="flex flex-col">
              <span className="text-[#000006] text-base font-semibold leading-5">MUU Agrotech</span>
              <span className="text-[#000006] text-sm font-normal leading-5">Tempo integral · 1 a 3m</span>
              <span className="text-[#00000099] text-sm font-normal leading-5">São Paulo, São Paulo, Brasil · Remota</span>
            </div>
          </div>
        </div>
      </div>
      {/* Botão "Ver mais..." */}
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
