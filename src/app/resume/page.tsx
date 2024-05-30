import React from "react";

export default function Resume() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-800">
      <embed
        src='/mateus_hoffman_curriculo.pdf'
        type="application/pdf"
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}
