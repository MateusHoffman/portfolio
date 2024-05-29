import Modal from "@/components/modal/Modal";
import copy from "copy-to-clipboard";
import Image from "next/image";
import React, { useState } from "react";
import { socialMediaData } from "../../../../../public/SocialMediaData";
import { informationData } from "@/data/local/InformationData";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ModalFollow(props: IProps) {
  const [copied, setCopied] = useState("");

  const handleClickValue = (value: string) => {
    copy(value);
    setCopied(value);
    setTimeout(() => {
      setCopied("");
    }, 2000); // Reset 'copied' state after 2 seconds
  };

  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen} title="Seguir">
      {/* eslint-disable @next/next/no-img-element */}
      <div className="flex flex-col gap-4">
        <h1 className="text-[#000000e6] font-normal text-xl">Mídias Sociais</h1>
        {socialMediaData.socialMedia.map((socialMedia) => (
          <div key={socialMedia.name} className="flex gap-5">
            <div className="w-6">
              <Image
                src={socialMedia.logo}
                alt="Logo"
                width={50}
                height={50}
                placeholder="blur"
                blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'%3E%3Crect width='100%25' height='100%25' fill='%23a9a9a9'/%3E%3C/svg%3E"
              />
            </div>
            <div>
              <p className="text-[#000000e6] font-semibold text-base">
                {socialMedia.name}
              </p>
              <a
                href={socialMedia.link}
                className="text-[#0a66c2] font-semibold text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialMedia.showLink}
              </a>
            </div>
          </div>
        ))}
        <h1 className="text-[#000000e6] font-normal text-xl">Informações</h1>
        {informationData.information.map((information) => (
          <div key={information.name} className="flex gap-5">
            <div className="w-6">
              <Image
                src={information.icon}
                alt="Icon"
                width={50}
                height={50}
                placeholder="blur"
                blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'%3E%3Crect width='100%25' height='100%25' fill='%23a9a9a9'/%3E%3C/svg%3E"
              />
            </div>
            <div>
              <p className="text-[#000000e6] font-semibold text-base">
                {information.name}
              </p>
              <p
                className="text-[#0a66c2] font-semibold text-sm cursor-pointer"
                onClick={() => handleClickValue(information.value)}
              >
                {copied === information.value ? "Copiado!" : information.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
