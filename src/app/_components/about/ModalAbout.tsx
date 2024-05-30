import React from "react";
import Modal from "@/components/modal/Modal";
import { aboutData } from "@/data/local/AboutData";
import { formatTextWithLineBreaks } from "@/app/util/format";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ModalAbout(props: IProps) {
  // const wordsToBold = [
  //   "Front-End",
  //   "mobile",
  //   "web",
  //   "dois anos",
  //   "soft skills",
  //   "JavaScript",
  //   "TypeScript",
  //   "Kotlin",
  //   "React",
  //   "Native",
  //   "Jetpack Compose",
  //   "responsividade",
  //   "testes",
  //   "desempenho",
  // ];

  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen} title="Sobre">
      <div>
        {formatTextWithLineBreaks(aboutData.mainText + aboutData.completeText)}
      </div>
    </Modal>
  );
}
