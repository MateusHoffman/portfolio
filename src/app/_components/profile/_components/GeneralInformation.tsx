import React from "react";

export default function GeneralInformation() {
  function handleContactInformation() {
    console.log("Abrir modal com as informações de contato");
  }

  function handleMyProjectsOnGithub() {
    console.log("Redirecionar para o GitHub");
  }

  return (
    <div className="w-full flex flex-row">
      <div className="w-full pt-4">
        {/* Nome */}
        <h1 className="text-xl font-semibold leading-5 text-black">
          Mateus Hoffman
        </h1>
        {/* Descrição */}
        <p className="text-md font-normal leading-5 pt-1 text-black">
          Desenvolvedor Mobile | React Native, TypeScript, Git, JavaScript
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
      </div>
    </div>
  );
}
