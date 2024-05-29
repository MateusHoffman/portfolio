import React from "react";
import Modal from "@/components/modal/Modal";
import { aboutData } from "@/data/local/AboutData";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ModalAbout(props: IProps) {
  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen} title="Sobre">
      <div>
        <p className="text-black text-opacity-90 text-sm leading-5 font-normal">
          {aboutData.mainText}
        </p>
      </div>
    </Modal>
  );
}
