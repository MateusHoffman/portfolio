import { profileData } from "@/data/local/ProfileData";
import React, { useState } from "react";
import ModalFollow from "./ModalFollow";

export default function GeneralInformation() {
  const [isOpenModalFollow, setIsOpenModalFollow] = useState(false);

  function handleContactInformation() {
    setIsOpenModalFollow(true);
  }

  return (
    <>
      <div className="w-full flex flex-row">
        <div className="w-full pt-4">
          {/* Nome */}
          <h1 className="text-xl font-semibold leading-5 text-black">
            {profileData.name}
          </h1>
          {/* Descrição */}
          <p className="text-md font-normal leading-5 pt-1 text-black">
            {profileData.description}
          </p>
          {/* Minha localização e informações de contato */}
          <div>
            {/* Minha localização */}
            <span className="text-base font-normal leading-5 text-black text-opacity-60">
              {profileData.city}, {profileData.state}, {profileData.country}
            </span>
            <span className="text-base font-normal leading-5 text-black text-opacity-60">
              {" "}
              ·{" "}
            </span>
            {/* Informações de contato */}
            <button onClick={handleContactInformation}>
              <span className="text-base font-semibold leading-5 text-[#0a66c2] hover:underline">
                Informações de contato
              </span>
            </button>
          </div>
        </div>
      </div>
      <ModalFollow
        isOpen={isOpenModalFollow}
        setIsOpen={setIsOpenModalFollow}
      />
    </>
  );
}
