import { profileData } from "@/data/local/ProfileData";
import React from "react";

export default function Banner() {
  return (
    <div className="w-full rounded-xl">
      {/* eslint-disable @next/next/no-img-element */}
      <img
        className="w-full md:rounded-t-xl"
        src={profileData.banner}
        alt="Imagem de fundo do perfil"
      />
    </div>
  );
}
