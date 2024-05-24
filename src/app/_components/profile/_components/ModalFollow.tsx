import Modal from "@/components/modal/Modal";
import { informationData } from "@/data/local/InformationData";
import { socialMediaData } from "@/data/local/SocialMediaData";
import copy from "copy-to-clipboard";
import React, { useState } from "react";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ModalFollow(props: IProps) {
  const [copied, setCopied] = useState('');

  const handleClickValue = (value: string) => {
    copy(value);
    setCopied(value);
    setTimeout(() => {
      setCopied('');
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
              <img src={socialMedia.logo} alt="Logo" />
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
              <img src={information.icon} alt="Icon" />
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