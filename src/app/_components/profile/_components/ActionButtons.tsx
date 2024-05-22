import Modal from "@/components/modal/Modal";
import React, { useState } from "react";
import ModalFollow from "./ModalFollow";

export default function ActionButtons() {
  const [isOpenModalFollow, setIsOpenModalFollow] = useState(false);

  function handleFollow() {
    setIsOpenModalFollow(true);
    console.log("Abrir modal com vários informações importantes");
    // Currículo, GitHub, Email, Telefone...
  }

  function handleSendMessage() {
    console.log("Abrir modal com meios de contato");
  }

  return (
    <>
      <div className="flex gap-2">
        {/* Botão de Seguir */}
        <button
          onClick={handleFollow}
          className="w-24 px-4 bg-[#0a66c2] hover:bg-[#004182] rounded-3xl flex gap-1 items-center justify-center"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="12pt"
            height="12pt"
            viewBox="0 0 52.000000 52.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,52.000000) scale(0.100000,-0.100000)"
              fill="#fff"
              stroke="none"
            >
              <path
                d="M227 454 c-4 -4 -7 -40 -7 -80 l0 -73 -77 -3 -78 -3 0 -35 0 -35 77
-3 77 -3 3 -77 3 -77 35 0 35 0 3 77 3 77 77 3 77 3 0 35 0 35 -77 3 -77 3 -3
77 -3 77 -30 3 c-17 2 -34 0 -38 -4z"
              />
            </g>
          </svg>

          <span className="text-white text-base font-semibold h-full flex items-center">
            Seguir
          </span>
        </button>
        {/* Botão Enviar mensagem */}
        <button
          onClick={handleSendMessage}
          className="h-8 px-4 bg-white border-[1px] border-[#0a66c2] hover:border-[#004182] rounded-3xl flex gap-1 items-center justify-center"
        >
          <span className="text-[#0a66c2] hover:text-[#004182] text-base font-semibold h-full flex items-center">
            Enviar mensagem
          </span>
        </button>
      </div>
      <ModalFollow
        isOpen={isOpenModalFollow}
        setIsOpen={setIsOpenModalFollow}
      />
    </>
  );
}
