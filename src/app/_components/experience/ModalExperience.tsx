import React from "react";
import Modal from "@/components/modal/Modal";
import ListExperience from "./_components/ListExperience";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleSeeMore: () => void;
}

export default function ModalExperience({
  isOpen,
  setIsOpen,
  handleSeeMore,
}: IProps) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Experiência">
      <ListExperience handleSeeMore={handleSeeMore} modal />
    </Modal>
  );
}
