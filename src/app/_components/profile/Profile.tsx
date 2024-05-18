"use client";

import useWindowSize from "@/hook/useWindowSize";
import React from "react";

export default function Profile() {
  const windowSize = useWindowSize();

  function handleContactInformation() {
    console.log("Abrir modal com as informações de contato");
  }

  function handleMyProjectsOnGithub() {
    console.log("Redirecionar para o GitHub");
  }

  function handleFollow() {
    console.log("Abrir modal com vários informações importantes");
    // Currículo, GitHub, Email, Telefone...
  }

  function handleSendMessage() {
    console.log("Abrir modal com meios de contato");
  }

  return (
    <section className="md:w-3/5 2xl:w-5/12 w-full border-[1px] border-[#8C8C8C] border-opacity-20 md:rounded-xl min-h-44 bg-white">
      {/* eslint-disable @next/next/no-img-element */}
      {/* Banner */}
      <div className="w-full rounded-xl">
        <img
          className="w-full md:rounded-t-xl"
          src="https://media.licdn.com/dms/image/D4D16AQHFJ8NjquWAxw/profile-displaybackgroundimage-shrink_350_1400/0/1667320641684?e=1721260800&v=beta&t=pf1t7cn-97Y17PsLCwsnRs_OGPcP5Tuy4EoaR3JX3pA"
          alt="Imagem de fundo do perfil"
        />
      </div>
      {/* Informações do perfil */}
      <div className="p-6">
        {/* Imagem de perfil */}
        <div
          className="bg-white md:w-[21%] w-[35%] aspect-square rounded-full relative"
          style={{ marginTop: windowSize.width <= 768 ? "-25%" : "-18%" }}
        >
          <img
            className="w-full h-full rounded-full p-1"
            src="https://media.licdn.com/dms/image/C4D03AQFz4U-QOZT7nQ/profile-displayphoto-shrink_200_200/0/1662759513105?e=1721260800&v=beta&t=zL2kHEAVJSa7sTVYjSqoEqoOyijzQkK9dnd1bofwRhg"
            alt="Imagem de perfil"
          />
        </div>
        {/* Informações gerais */}
        <div className="w-full flex flex-row">
          {/* Informações pessoais */}
          <div className="w-full pt-4">
            {/* Nome */}
            <h1 className="text-xl font-semibold leading-5 text-black">
              Mateus Hoffman
            </h1>
            {/* Descrição */}
            <p className="text-md font-normal leading-5 pt-1 text-black">
              Desenvolvedor Mobile | React Native, TypeScript, Git, JavaScript
            </p>
            {/* Empresa e faculdade que eu fiz (para mobile) */}
            <p className="md:hidden text-sm font-normal leading-5 text-black text-opacity-60 pt-1">
              Muu Agrotech · Trybe
            </p>
            {/* Minha localização e informações de contato */}
            <div>
              {/* Minha localização */}
              <span className="text-sm font-normal leading-5 text-black text-opacity-60">
                Campinas, São Paulo, Brasil
              </span>
              <span className="text-sm font-normal leading-5 text-black text-opacity-60">
                {" "}
                ·{" "}
              </span>
              {/* Informações de contato */}
              <button onClick={handleContactInformation}>
                <span className="text-sm font-semibold leading-5 text-[#0a66c2] hover:underline">
                  Informações de contato
                </span>
              </button>
            </div>
            {/* Botão para acessar o GitHub */}
            <button
              onClick={handleMyProjectsOnGithub}
              className="flex items-center pt-1 gap-2 hover:underline text-[#0a66c2]"
            >
              <p className="text-sm font-semibold leading-5">
                Meus Projetos no GitHub
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="#0a66c2"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
              </svg>
            </button>
          </div>
          {/* Empresa e faculdade que eu fiz (para computador)*/}
          <div className="hidden md:block w-80 md:pt-4">
            <div className="flex flex-row h-8 gap-2 mb-2">
              <img
                src="https://media.licdn.com/dms/image/D4E0BAQGDIMF0chtozQ/company-logo_100_100/0/1691426534167?e=1724284800&v=beta&t=-TI6N0Wd9-4i2LEjWokI0QFkXmZ_v5DMbq-rStkXLaY"
                alt="Logo da empresa"
              />
              <span className="text-sm font-semibold leading-5 text-black cursor-pointer flex items-center hover:text-[#0a66c2] hover:underline">
                Muu Agrotech
              </span>
            </div>
            <div className="flex flex-row h-8 gap-2">
              <img
                src="https://media.licdn.com/dms/image/D4D0BAQHo1GZmhutd4A/company-logo_100_100/0/1664308284303/betrybe_logo?e=1724284800&v=beta&t=_CxpHL0ws0zDVt3Scyn9cxEIUlkUSpJOW8dnvb1wm9o"
                alt="Logo da empresa"
              />
              <span className="text-sm font-semibold leading-5 text-black cursor-pointer flex items-center hover:text-[#0a66c2] hover:underline">
                Trybe
              </span>
            </div>
          </div>
        </div>
        <div className="w-full pt-4 flex gap-2">
          {/* Botão de Seguir */}
          <button onClick={handleFollow}  className="w-24 px-4 bg-[#0a66c2] hover:bg-[#004182] rounded-3xl flex gap-1 items-center justify-center">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="12pt"
              height="12pt"
              viewBox="0 0 52.000000 52.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,52.000000) scale(0.100000,-0.100000)"
                fill="#fff"
                stroke="none"
              >
                <path
                  d="M227 454 c-4 -4 -7 -40 -7 -80 l0 -73 -77 -3 -78 -3 0 -35 0 -35 77
-3 77 -3 3 -77 3 -77 35 0 35 0 3 77 3 77 77 3 77 3 0 35 0 35 -77 3 -77 3 -3
77 -3 77 -30 3 c-17 2 -34 0 -38 -4z"
                />
              </g>
            </svg>

            <span className="text-white text-base font-semibold h-full flex items-center">
              Seguir
            </span>
          </button>
          {/* Botão Enviar mensagem */}
          <button
            onClick={handleSendMessage}
            className="h-8 px-4 bg-white border-[1px] border-[#0a66c2] hover:border-[#004182] rounded-3xl flex gap-1 items-center justify-center"
          >
            <span className="text-[#0a66c2] hover:text-[#004182] text-base font-semibold h-full flex items-center">
              Enviar mensagem
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
