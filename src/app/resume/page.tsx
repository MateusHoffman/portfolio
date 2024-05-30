import React from "react";
import { isMobile } from "react-device-detect";

export default function Resume() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-800">
      {isMobile ? (
        <iframe
          src="/mateus_hoffman_curriculo.pdf"
          title="Resume"
          className="absolute top-0 left-0 w-full h-full"
        />
      ) : (
        <embed
          src="/mateus_hoffman_curriculo.pdf"
          type="application/pdf"
          className="absolute top-0 left-0 w-full h-full"
        />
      )}
    </div>
  );
}
