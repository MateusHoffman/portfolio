import { cleanURL } from "@/app/util/format";
import { recommendationData } from "@/data/local/RecommendationData";
import React from "react";

interface IProps {
  modal?: boolean;
}

export default function ListRecommendations({modal = false}: IProps) {
  return (
    <>
      {recommendationData.recommendations.map((recommendation, index) => (
        <div key={recommendation.id}>
          {index !== 0 && (
            <div className="h-px w-full bg-[#8C8C8C] bg-opacity-20" />
          )}
          <div className="py-5 flex flex-row">
            <div className="flex flex-col pr-3 rounded-full">
              <img
                className="w-12 aspect-square rounded-full"
                src={recommendation.imgProfile}
                alt="Imagem profile"
              />
            </div>
            <div className="w-full">
              <div className="flex flex-col">
                <span className="text-[#000006] text-base font-semibold leading-5 line-clamp-1">
                  {recommendation.name}
                </span>
                <span className="text-[#000006] text-base font-normal leading-5 line-clamp-1">
                  {recommendation.description}
                </span>
                <a
                  href={recommendation.link}
                  className="text-[#0a66c2] text-base font-normal leading-5 line-clamp-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cleanURL(recommendation.link)}
                </a>
              </div>
              <div className="pt-3">
                <span
                  className={`text-base text-[#000000e6] leading-5 font-normal ${
                    modal ? "" : "line-clamp-5"
                  }`}
                  style={{ whiteSpace: "pre-line" }}
                >
                  {recommendation.message}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
