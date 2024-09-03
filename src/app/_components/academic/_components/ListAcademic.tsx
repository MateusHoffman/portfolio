import { boldWordsInText } from "@/app/util/format";
import { academicData } from "@/data/local/AcademicData";
import moment from "moment";
import React from "react";

interface IProps {
  modal?: boolean;
  handleSeeMore: () => void;
}

export default function ListAcademic({ handleSeeMore, modal = false }: IProps) {
  const highlights = [
    "UNIVESP",
    "algoritmos",
    "cálculo",
    "estatística",
    "programação orientada a objetos",
    "sistemas embarcados",
    "comunicação IoT",
    "bancos de dados",
    "soluções escaláveis e eficientes",
    "Ciências da Computação",
    "segurança da informação",
    "matemática computacional",
    "inteligência artificial",
    "computação em nuvem",
    "Soft skills",
    "Aprender a Aprender",
    "Front-end",
    "Back-end",
  ];

  return (
    <>
      {academicData.academics.map((academic, index) => (
        <div key={academic.id}>
          {index !== 0 && (
            <div className="h-px w-full bg-[#8C8C8C] bg-opacity-20" />
          )}
          <div className="py-3 flex flex-row">
            <div className="flex flex-col pr-3">
              <img
                className="w-12 aspect-square"
                src={academic.imgLogo}
                alt="Logo da instituição"
              />
            </div>
            <div className="w-full">
              <div className="flex flex-col">
                <span className="text-[#000006] text-base font-semibold leading-5">
                  {academic.institution}
                </span>
                <span className="text-[#000006] text-base font-normal leading-5">
                  {academic.graduationType} · {academic.course}
                </span>
                <span className="text-[#00000099] text-base font-normal leading-5">
                  {moment(academic.startDate, "DD/MM/YYYY").format(
                    "MMM [de] YYYY"
                  )}{" "}
                  -{" "}
                  {moment(academic.endDate, "DD/MM/YYYY").format(
                    "MMM [de] YYYY"
                  )}
                </span>
              </div>
              <div className="pt-3">
                <div>
                  <div className="py-3 relative">
                    <span
                      className={`text-base text-[#000000e6] leading-5 font-normal ${
                        modal ? "" : "line-clamp-2"
                      }`}
                      style={{ whiteSpace: "pre-line" }}
                      dangerouslySetInnerHTML={{
                        __html: boldWordsInText(
                          academic.description,
                          highlights
                        ),
                      }}
                    ></span>
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
      ))}
    </>
  );
}
