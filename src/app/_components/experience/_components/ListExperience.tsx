import {
  boldWordsInText,
  formatDate,
  formatDateRange,
  formatTxtLocation,
} from "@/app/util/format";
import { experienceData } from "@/data/local/ExperienceData";
import React from "react";

interface IProps {
  modal?: boolean;
  handleSeeMore: () => void;
}

export default function ListExperience({
  handleSeeMore,
  modal = false,
}: IProps) {
  const highlights = [
    "integrei uma câmera",
    "inteligência artificial",
    "Implementei um mapa",
    "rotas otimizadas",
    '"offline first"',
    " sincronizando automaticamente os dados",
    "componentes genéricos",
    "arquitetura limpa ",
    "design pattern",
    "tipagem",
    "estabilidade",
    "consistência",
    "Singleton",
    "evitar conflitos",
    "decorators",
    " testes unitários",
    "Git",
    "TypeScript",
    "React Native,",
    "Jest",
    "projetos responsivos",
    "desempenho",
    "Figma",
    "websites responsivos",
    "React.js,",
    "Implementei APIs RESTful",
    "desenvolvi algoritmos eficientes para processamento de dados",
  ];

  return (
    <>
      {experienceData.experiences.map((experience, index) => (
        <div key={experience.id}>
          {index !== 0 && (
            <div className="h-px w-full bg-[#8C8C8C] bg-opacity-20" />
          )}
          <div className="py-3 flex flex-row">
            <div className="flex flex-col pr-3">
              <img
                className="w-12 aspect-square"
                src={experience.imgLogo}
                alt="Logo empresa"
              />
            </div>
            <div className="w-full">
              <div className="flex flex-col">
                <span className="text-[#000006] text-base font-semibold leading-5">
                  {experience.company}
                </span>
                <span className="text-[#000006] text-base font-normal leading-5">
                  {experience.jobType} ·{" "}
                  {formatDateRange(experience.startDate, experience.endDate)}
                </span>
                <span className="text-[#00000099] text-base font-normal leading-5">
                  {formatTxtLocation(experience)}
                </span>
              </div>
              <div className="pt-3">
                {experience.positionsInCompany.map((position) => (
                  <div key={position.id}>
                    <span className="relative block top-4 -left-9 h-2 w-2 rounded-full bg-[#0000004d]" />
                    <div>
                      <h1 className="text-base text-[#000000e6] leading-5 font-semibold">
                        {position.title}
                      </h1>
                      <span className="text-base text-[#00000099] leading-5 font-normal">
                        {formatDate(position.startDate)} -{" "}
                        {formatDate(position.endDate)} ·{" "}
                        {formatDateRange(position.startDate, position.endDate)}
                      </span>
                    </div>
                    <div className="py-3 relative">
                      <span
                        className={`text-base text-[#000000e6] leading-5 font-normal ${
                          modal ? "" : "line-clamp-2"
                        }`}
                        style={{ whiteSpace: "pre-line" }}
                        dangerouslySetInnerHTML={{
                          __html: boldWordsInText(
                            position.description,
                            highlights
                          ),
                        }}
                      >
                        {/* {formatBoldText(position.description, highlights)} */}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
