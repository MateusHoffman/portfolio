import Link from "next/link";
import React from "react";
import { isMobile } from "react-device-detect";

export default function Resume() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-800">
      {isMobile && (
        <Link href="/">
          {/* Estilize o conteúdo dentro do Link */}
          <div className="absolute h-10 w-10 p-1 pr-2 bg-primary-400 z-50 rounded-full flex justify-center items-center top-4 left-4">
            <img src="/arrow.png" alt="Arrow" />
          </div>
        </Link>
      )}
      <embed
        src="/mateus_hoffman_curriculo.pdf"
        type="application/pdf"
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}
