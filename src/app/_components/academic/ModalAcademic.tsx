import React from "react";
import Modal from "@/components/modal/Modal";
import ListAcademic from "./_components/ListAcademic";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleSeeMore: () => void;
}

export default function ModalAcademic({
  isOpen,
  setIsOpen,
  handleSeeMore,
}: IProps) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Experiência">
      <ListAcademic handleSeeMore={handleSeeMore} modal />
    </Modal>
  );
}
