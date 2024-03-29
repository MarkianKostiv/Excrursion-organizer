"use client";
import { useState } from "react";
import { Form } from "./panelcomponents/Form";
export const CreatingPanel = () => {
  const [opened, isOpened] = useState(false);
  const openingFunction = () => {
    isOpened(true);
  };
  const closingFunction = () => {
    isOpened(false);
  };

  const buttonClasses: string =
    "font-medium text-xl rounded-xl text-[#000] bg-[#A0C21F] hover:bg-[#85C828] active:bg-[#fff] duration-200 ease-in-out p-4 m-3";
  return (
    <div className='relative w-full flex items-center justify-center'>
      <button
        onClick={openingFunction}
        className={opened ? "hidden" : buttonClasses}
      >
        Створити Нову екскурсію
      </button>
      <div
        className={
          opened
            ? "rounded-2xl shadow-md flex flex-col bg-gradient-to-b from-[#1fe0d1] [#97cdcd] to-[#ccf5f5] text-[#000] fixed top-12 w-80 items-center z-20 sm:w-full"
            : "hidden"
        }
      >
        <div className='flex items-center justify-end w-full'>
          <button
            onClick={closingFunction}
            className='p-0 w-10 h-10 text-[#000] bg-[#f46845] hover:bg-[#9b1e1e] hover:text-[#fff] mt-3 mb-3 mr-3 rounded-full outline outline-black hover:outline-none button'
          >
            X
          </button>
        </div>
        <Form></Form>
      </div>
    </div>
  );
};
