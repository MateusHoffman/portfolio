import useWindowSize from "@/hook/useWindowSize";
import React from "react";
import ActionButtons from "./ActionButtons";
import { profileData } from "@/data/local/ProfileData";

export default function ProfilePicture() {
  const windowSize = useWindowSize();
  return (
    <div className="flex justify-between">
      {/* eslint-disable @next/next/no-img-element */}
      <div
        className="bg-white md:w-[21%] w-[32%] md:h-[21%] h-[36%] aspect-square rounded-full relative"
        style={{ marginTop: windowSize.width <= 768 ? "-25%" : "-18%" }}
      >
        <img
          className="w-full h-full rounded-full p-1"
          src={profileData.picture}
          alt="Imagem de perfil"
        />
      </div>
      <div className="hidden md:flex justify-end">
        <ActionButtons />
      </div>
    </div>
  );
}
