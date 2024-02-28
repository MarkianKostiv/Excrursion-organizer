"use client";
import { useState } from "react";
import { UserObj } from "@/app/mytupes/UserObj";

interface ExItem {
  data: UserObj[];
}

export const ExcursionItem = (props: ExItem) => {
  const { data } = props;
  const [openedItems, setOpenedItems] = useState<number[]>([]);

  const openingExcursionItem = (id: number, isButtonClick: boolean) => {
    setOpenedItems((prevItems) => {
      if (prevItems.includes(id) && isButtonClick) {
        return prevItems.filter((item) => item !== id);
      } else {
        return [...prevItems, id];
      }
    });
  };

  const isOpened = (id: number) => openedItems.includes(id);

  const handleClick = (e: React.MouseEvent, id: number) => {
    openingExcursionItem(id, e.target instanceof HTMLButtonElement);
  };

  const infoParagraphStyle: string =
    "max-w-full overflow-hidden whitespace-normal break-words shadow-md mb-3";
  return (
    <div className='text-[#000] w-full'>
      <ul>
        {data.map((excursion) => (
          <li
            role='button'
            key={excursion.excursionData.id}
            onClick={(e) => handleClick(e, excursion.excursionData.id)}
            className={
              isOpened(excursion.excursionData.id)
                ? "p-3 mt-3 bg-[#fff] rounded-xl"
                : " mt-3 bg-[#fff] cursor-pointer rounded-xl"
            }
          >
            <button
              className={
                isOpened(excursion.excursionData.id)
                  ? " p-0 w-10 h-10 text-[#000] bg-[#f46845] hover:bg-[#9b1e1e] hover:text-[#fff] mb-4"
                  : "hidden"
              }
              onClick={(e) => {
                e.stopPropagation();
                openingExcursionItem(excursion.excursionData.id, true);
              }}
            >
              X
            </button>
            <h3
              className={
                isOpened(excursion.excursionData.id)
                  ? "flex flex-col font-bold text-2xl shadow-md mb-3"
                  : "flex flex-col font-bold text-2xl shadow-md mb-3 pl-2"
              }
            >
              {" "}
              <span
                className={
                  isOpened(excursion.excursionData.id)
                    ? "font-semibold text-base"
                    : "hidden"
                }
              >
                Назва:
              </span>{" "}
              {excursion.excursionData.tittle}
            </h3>
          </li>
        ))}
        {data.map((excursion) => (
          <li
            key={excursion.excursionData.id}
            className={
              isOpened(excursion.excursionData.id)
                ? " fixed w-full h-full top-0 left-0 p-3 mt-3 bg-[#fff] rounded-xl z-20"
                : " hidden"
            }
          >
            <div className='flex items-center justify-end'>
              <button
                className={
                  isOpened(excursion.excursionData.id)
                    ? "p-0 w-10 h-10 text-[#000] bg-[#f46845] hover:bg-[#9b1e1e] hover:text-[#fff] mb-4"
                    : "hidden"
                }
                onClick={(e) => {
                  e.stopPropagation();
                  openingExcursionItem(excursion.excursionData.id, true);
                }}
              >
                X
              </button>
            </div>
            <h3
              className={
                isOpened(excursion.excursionData.id)
                  ? "flex flex-col font-bold text-2xl shadow-md mb-3"
                  : "flex flex-col font-bold text-2xl shadow-md mb-3 pl-2"
              }
            >
              {" "}
              <span
                className={
                  isOpened(excursion.excursionData.id)
                    ? "font-semibold text-base"
                    : "hidden"
                }
              >
                Назва:
              </span>{" "}
              {excursion.excursionData.tittle}
            </h3>
            <p
              className={
                isOpened(excursion.excursionData.id)
                  ? `${infoParagraphStyle}`
                  : "hidden"
              }
            >
              Автор: {excursion.excursionData.author}
            </p>
            <p
              className={
                isOpened(excursion.excursionData.id)
                  ? `${infoParagraphStyle}`
                  : "hidden"
              }
            >
              Вид: {excursion.excursionData.kind}
            </p>
            <p
              className={
                isOpened(excursion.excursionData.id)
                  ? `${infoParagraphStyle}`
                  : "hidden"
              }
            >
              Тема:{excursion.excursionData.topic}
            </p>
            <p
              className={
                isOpened(excursion.excursionData.id)
                  ? `${infoParagraphStyle}`
                  : "hidden"
              }
            >
              Мета : {excursion.excursionData.goal}
            </p>
            <p
              className={
                isOpened(excursion.excursionData.id)
                  ? `${infoParagraphStyle}`
                  : "hidden"
              }
            >
              Час на проведення : {excursion.excursionData.time}
            </p>
            <p
              className={
                isOpened(excursion.excursionData.id)
                  ? `${infoParagraphStyle}`
                  : "hidden"
              }
            >
              Об'єкти для розгляду : {excursion.excursionData.artifacts}
            </p>
            <p
              className={
                isOpened(excursion.excursionData.id)
                  ? `${infoParagraphStyle}`
                  : "hidden"
              }
            >
              Джерела : {excursion.excursionData.references}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
