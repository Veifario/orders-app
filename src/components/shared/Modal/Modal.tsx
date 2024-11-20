import { Dispatch, ReactNode, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void | Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ children, isOpen, setIsOpen }: IModalProps) => {
  if (isOpen)
    return createPortal(
      <div
        className={twMerge(
          "fixed left-0 top-0 z-50 h-full w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,.5)]",
          isOpen ? "flex" : "hidden",
        )}
        onClick={() => setIsOpen(false)}
      >
        <div onClick={(event) => event.stopPropagation()}>{children}</div>
      </div>,
      document.getElementById("modal-root")!,
    );
};

export default Modal;
