"use client";

import React from "react";
import Modal from "@/components/modal/Modal";
import ListProjects from "./_components/ListProjects";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ModalProjects({
  isOpen,
  setIsOpen,
}: IProps) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Projetos">
      <ListProjects modal={true} />
    </Modal>
  );
} 