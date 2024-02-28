"use client";
import { useState, useEffect } from "react";
import { UserObj } from "@/app/mytupes/UserObj";
import { ExcursionItem } from "./ExcursionItem";

export const UserExcursionsList = () => {
  const [userExcursionData, setUserExcursionData] = useState<UserObj[]>([]);

  const [noExcursions, setNoExcursions] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("Excursions");

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setUserExcursionData(parsedData);
      setNoExcursions(false);
    } else {
      setNoExcursions(true);
    }
  }, []);

  // Слухайте подію про зміну даних
  useEffect(() => {
    const handleUserDataChange = () => {
      const savedData = localStorage.getItem("Excursions");
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setUserExcursionData(parsedData);
        setNoExcursions(false);
      } else {
        setUserExcursionData([]);
        setNoExcursions(true);
      }
    };

    window.addEventListener("userDataChanged", handleUserDataChange);

    return () => {
      window.removeEventListener("userDataChanged", handleUserDataChange);
    };
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
    setUserExcursionData([]);
    setNoExcursions(true);
    const allDataWasDeletedEvent = new CustomEvent("userDataDeleted");
    window.dispatchEvent(allDataWasDeletedEvent);
  };

  return (
    <div className='w-full'>
      <h3 className='text-center font-bold text-2xl m-5'>Мої Екскурсії</h3>
      {noExcursions ? (
        <div className='card mt-2'>
          <div className='bg flex items-center justify-center'>
            <p className='flex flex-col text-center bg-[#fff] shadow p-4 rounded-md text-[#000] font-normal text-lg'>
              У вас поки не має екскурсій, ви можете створити свої екскурсії{" "}
              <span className='bg-[#57273E] text-center text-[#fff] p-2 font-medium text-lg rounded-lg m-2'>
                Використовуйте Створити Нову Екскурсію
              </span>
            </p>
          </div>
          <div className='blob'></div>
        </div>
      ) : (
        <div>
          <div>
            <button
              className='hover:bg-[#ff0000] p-2 glow-on-hover m-4 border-2 border-solid border-white'
              onClick={clearLocalStorage}
            >
              Видалити Мої Екскурсії
            </button>
          </div>

          <ExcursionItem data={userExcursionData} />
        </div>
      )}
    </div>
  );
};
