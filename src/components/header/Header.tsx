import React from "react";

export default function Header() {
  return (
    <header className="bg-white md:px-0 px-6 border-b-[1px] border-b-[#8C8C8C] border-opacity-20 h-12 w-full flex items-center justify-center">
      {/* eslint-disable @next/next/no-img-element */}
      <div className="md:w-3/5 2xl:w-5/12 w-full">
      <img className="h-9" src="logo_hoffman.png" alt="Logo Hoffman" />
      </div>
    </header>
  );
}
