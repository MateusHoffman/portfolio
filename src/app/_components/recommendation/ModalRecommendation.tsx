import React from "react";
import Modal from "@/components/modal/Modal";
import ListRecommendations from "./_components/ListRecommendations";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ModalRecommendation({
  isOpen,
  setIsOpen,
}: IProps) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Recomendações">
      <ListRecommendations modal={true} />
    </Modal>
  );
}
