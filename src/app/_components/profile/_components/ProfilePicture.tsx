import useWindowSize from "@/hook/useWindowSize";
import React from "react";
import ActionButtons from "./ActionButtons";

export default function ProfilePicture() {
  const windowSize = useWindowSize();
  return (
    <div className="flex justify-between">
      {/* eslint-disable @next/next/no-img-element */}
      <div
        className="bg-white md:w-[21%] w-[36%] md:h-[21%] h-[36%] aspect-square rounded-full relative"
        style={{ marginTop: windowSize.width <= 768 ? "-25%" : "-18%" }}
      >
        <img
          className="w-full h-full rounded-full p-1"
          src="https://media.licdn.com/dms/image/C4D03AQFz4U-QOZT7nQ/profile-displayphoto-shrink_200_200/0/1662759513105?e=1721260800&v=beta&t=zL2kHEAVJSa7sTVYjSqoEqoOyijzQkK9dnd1bofwRhg"
          alt="Imagem de perfil"
        />
      </div>
      <div className="hidden md:flex md:w-2/5 justify-end">
        <ActionButtons />
      </div>
    </div>
  );
}
