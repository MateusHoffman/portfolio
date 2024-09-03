import React from "react";
import Modal from "@/components/modal/Modal";
import { aboutData } from "@/data/local/AboutData";
import { boldWordsInText, formatTextWithLineBreaks } from "@/app/util/format";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ModalAbout(props: IProps) {
  const wordsToBold = [
    "desenvolvedor pleno",
    "Front-End mobile e web",
    "dois anos de experiência profissional",
    "soft skills",
    "JavaScript",
    "TypeScript",
    "Kotlin",
    "React",
    "Native",
    "Jetpack Compose",
    "responsividade",
    "testes",
    "desempenho",
  ];

  const formattedText = boldWordsInText(
    aboutData.mainText + aboutData.completeText,
    wordsToBold
  );

  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen} title="Sobre">
      {/* <p
        dangerouslySetInnerHTML={{
          __html: formattedText,
        }}
      /> */}
      <p
        dangerouslySetInnerHTML={{
          __html: boldWordsInText(
            aboutData.mainText + aboutData.completeText,
            wordsToBold
          ),
        }}
      />
      {/* <div>
        {formatTextWithLineBreaks(aboutData.mainText + aboutData.completeText)}
      </div> */}
    </Modal>
  );
}
