"use client";
import React, {
  Dispatch,
  MouseEvent,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

function Modal({ isOpen, setIsOpen, children }: Props) {
  if (!isOpen) return null;

  function handleCancel() {
    setIsOpen(false);
  }

  function handleStop(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return (
    <div
      className="flex justify-center items-center fixed left-0 top-0 w-full h-full bg-[#000000ab] z-[9999] cursor-pointer"
      onClick={handleCancel}
    >
      <div
        className="flex justify-center items-center flex-col gap-4 p-4 sm:p-8 rounded-lg bg-[#fff] cursor-auto"
        onClick={handleStop}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
