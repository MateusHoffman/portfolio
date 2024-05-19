import React from "react";

export default function Banner() {
  return (
    <div className="w-full rounded-xl">
      {/* eslint-disable @next/next/no-img-element */}
      <img
        className="w-full md:rounded-t-xl"
        src="https://media.licdn.com/dms/image/D4D16AQHFJ8NjquWAxw/profile-displaybackgroundimage-shrink_350_1400/0/1667320641684?e=1721260800&v=beta&t=pf1t7cn-97Y17PsLCwsnRs_OGPcP5Tuy4EoaR3JX3pA"
        alt="Imagem de fundo do perfil"
      />
    </div>
  );
}
