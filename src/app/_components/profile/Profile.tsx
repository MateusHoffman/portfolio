"use client";

import useWindowSize from "@/hook/useWindowSize";
import React from "react";
import Banner from "./_components/Banner";
import ProfilePicture from "./_components/ProfilePicture";
import ActionButtons from "./_components/ActionButtons";
import GeneralInformation from "./_components/GeneralInformation";

export default function Profile() {
  return (
    <section className="md:w-3/5 2xl:w-5/12 w-full border-[1px] border-[#8C8C8C] border-opacity-20 md:rounded-xl min-h-44 bg-white">
      <Banner />
      <div className="md:p-6 p-4">
        <ProfilePicture />
        <GeneralInformation />
        <div className="pt-4 md:hidden">
          <ActionButtons />
        </div>
      </div>
    </section>
  );
}
