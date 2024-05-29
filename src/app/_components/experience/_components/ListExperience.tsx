import React from "react";

interface IProps {
  modal?: boolean;
  handleSeeMore: () => void;
}

export default function ListExperience({
  handleSeeMore,
  modal = false,
}: IProps) {
  return (
    <div>
      {/* 1º Experiência */}
      <div className="py-3 flex flex-row">
        <div className="flex flex-col pr-3">
          <img
            className="w-12 aspect-square"
            src="https://media.licdn.com/dms/image/D4E0BAQGDIMF0chtozQ/company-logo_100_100/0/1691426534167?e=1724284800&v=beta&t=-TI6N0Wd9-4i2LEjWokI0QFkXmZ_v5DMbq-rStkXLaY"
            alt="Logo empresa"
          />
        </div>
        <div className="w-full">
          <div className="flex flex-col">
            <span className="text-[#000006] text-base font-semibold leading-5">
              MUU Agrotech
            </span>
            <span className="text-[#000006] text-base font-normal leading-5">
              Tempo integral · 1 ano e 3 meses
            </span>
            <span className="text-[#00000099] text-base font-normal leading-5">
              São Paulo, São Paulo, Brasil · Remota
            </span>
          </div>
          <div className="pt-3">
            {/* Descrição 1º Cargo */}
            <div>
              <span className="relative block top-4 -left-9 h-2 w-2 rounded-full bg-[#0000004d]" />
              <div>
                <h1 className="text-base text-[#000000e6] leading-5 font-semibold">
                  Desenvolvedor de aplicativos móveis Pleno
                </h1>
                <span className="text-base text-[#00000099] leading-5 font-normal">
                  jul de 2023 - o momento · 11 meses
                </span>
              </div>
              <div className="py-3 relative">
                <span
                  className={`text-base text-[#000000e6] leading-5 font-normal ${
                    modal ? "" : "line-clamp-2"
                  }`}
                >
                  Eu desenvolvo aplicativos de celular que são visualmente
                  atraentes e altamente otimizados para proporcionar uma
                  experiência incrível aos usuários
                </span>
                {!modal && (
                  <button
                    className="absolute right-0 bottom-[0.65rem] pl-2 bg-white"
                    onClick={handleSeeMore}
                  >
                    <span className="text-black text-opacity-60 text-base leading-5 font-normal">
                      Ver mais ...
                    </span>
                  </button>
                )}
              </div>
            </div>
            {/* Descrição 2º Cargo */}
            <div>
              <span className="relative block top-4 -left-9 h-2 w-2 rounded-full bg-[#0000004d]" />
              <div>
                <h1 className="text-base text-[#000000e6] leading-5 font-semibold">
                  Desenvolvedor Full-Stack Júnior
                </h1>
                <span className="text-base text-[#00000099] leading-5 font-normal">
                  mar de 2023 - jun de 2023 · 4 meses
                </span>
              </div>
              <div className="py-3 relative">
                <span
                  className={`text-base text-[#000000e6] leading-5 font-normal ${
                    modal ? "" : "line-clamp-2"
                  }`}
                >
                  Desenvolvo sites e aplicativos responsivos e atraentes, além
                  de criar bancos de dados altamente organizados para garantir a
                  eficiência e a usabilidade
                </span>
                {!modal && (
                  <button
                    className="absolute right-0 bottom-[0.65rem] pl-2 bg-white"
                    onClick={handleSeeMore}
                  >
                    <span className="text-black text-opacity-60 text-base leading-5 font-normal">
                      Ver mais ...
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="h-px w-full bg-[#8C8C8C] bg-opacity-20" />
      {/* 2º Experiência */}
      <div className="py-3 flex flex-row">
        <div className="flex flex-col pr-3">
          <img
            className="w-12 aspect-square"
            src="https://media.licdn.com/dms/image/D4D0BAQFSEbmwaeNAUw/company-logo_100_100/0/1683928977056/liberoprofessionista_logo?e=1724284800&v=beta&t=B1k2uW3Cx-fYB5q15_7DFYLjnpNsWj8zV31BoHN9PVE"
            alt="Logo empresa"
          />
        </div>
        <div className="w-full">
          <div className="flex flex-col">
            <span className="text-[#000006] text-base font-semibold leading-5">
              Freelancer
            </span>
            <span className="text-[#000006] text-base font-normal leading-5">
              Freelancer · 2 ano e 10 meses
            </span>
            <span className="text-[#00000099] text-base font-normal leading-5">
              Brasil · Remota
            </span>
          </div>
          <div className="pt-3">
            {/* Descrição 1º Cargo */}
            <div>
              <span className="relative block top-4 -left-9 h-2 w-2 rounded-full bg-[#0000004d]" />
              <div>
                <h1 className="text-base text-[#000000e6] leading-5 font-semibold">
                  Desenvolvedor Web
                </h1>
                <span className="text-base text-[#00000099] leading-5 font-normal">
                  ago de 2021 - o momento · 2 anos e 10 meses
                </span>
              </div>
              <div className="py-3 relative">
                <span
                  className={`text-base text-[#000000e6] leading-5 font-normal ${
                    modal ? "" : "line-clamp-2"
                  }`}
                >
                  Realizei projetos para clientes atendendo cada necessidade e
                  elaborando um fluxo de desenvolvimento usando as melhores
                  tecnologias disponíveis no mercado e versionando todas
                  aplicações com o Git.
                </span>
                {!modal && (
                  <button
                    className="absolute right-0 bottom-[0.65rem] pl-2 bg-white"
                    onClick={handleSeeMore}
                  >
                    <span className="text-black text-opacity-60 text-base leading-5 font-normal">
                      Ver mais ...
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
