import { ReactNode, useRef } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  title: string
  children: ReactNode
}

export default function Modal(props: IProps) {
  const cancelButtonRef = useRef(null);

  function handleClose() {
    props.setIsOpen(false);
  }

  return (
    <Dialog
      open={props.isOpen}
      onClose={handleClose}
      className="relative z-50"
    >
      {/* eslint-disable @next/next/no-img-element */}
      <div className="fixed inset-0 flex justify-center items-center bg-[#00000080] transition-opacity duration-300">
        <DialogPanel className="w-[95%] max-h-[95%] md:w-3/5 2xl:w-5/12 bg-white rounded-xl flex flex-col">
          <header>
            <div className="flex justify-between items-center pr-4">
              <h1 className="py-4 px-6 font-semibold text-xl text-[#000000e6] w-full">
              {props.title}
              </h1>
              <button className="h-4 w-4" type="button" onClick={handleClose}>
                <img src="close.png" alt="Close" />
              </button>
            </div>
            <div className="h-px w-full bg-[#8c8c8c33]" />
          </header>
          <main className="p-4 max-h-[80%] overflow-y-auto scrollbar-none">
            {props.children}
          </main>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
