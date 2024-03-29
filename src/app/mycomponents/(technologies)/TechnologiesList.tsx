"use client";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
export const TechnologiesList = () => {
  const technologiesItemStyle =
    "text-xl font-semibold w-28 h-20 flex items-center justify-center rounded-md mt-2 duration-300";
  return (
    <div className='w-full text-center m-4'>
      <h3 className='m-4 font-semibold text-xl'>
        Список Технологій Використаних для створення проєкту:
      </h3>
      <ul className=' flex items-center justify-around flex-wrap mt-4'>
        <li className='cursor-pointer'>
          <HtmlIcon
            className={`${technologiesItemStyle} bg-[#dfd43fef] hover:bg-[#aea63a]`}
          />
        </li>
        <li className='cursor-pointer'>
          <CssIcon
            className={`${technologiesItemStyle} bg-[#378ca6] hover:bg-[#347891]`}
          />
        </li>
        <li className=''>
          <a
            className={`${technologiesItemStyle} bg-[#457eda] hover:bg-[#486abf]`}
            href='https://www.typescriptlang.org/'
          >
            TypeScript
          </a>
        </li>
        <li>
          {" "}
          <a
            className={`${technologiesItemStyle} bg-[#2d2c2c] hover:bg-[#5c5c5c]`}
            href='https://nextjs.org/'
          >
            NEXT.js
          </a>
        </li>
        <li>
          {" "}
          <a
            className={`${technologiesItemStyle} bg-[#ee3636] hover:bg-[#f95e5e]`}
            href='https://pdfmake.github.io/docs/0.1/'
          >
            pdfMake
          </a>
        </li>
        <li>
          {" "}
          <a
            className={`text-[#000]  ${technologiesItemStyle} bg-[#d0d0d0] hover:bg-[#9d9e9f]`}
            href='https://www.npmjs.com/package/uuid'
          >
            uuId
          </a>
        </li>
        <li className=''>
          {" "}
          <a
            className={`${technologiesItemStyle} bg-[#588eec] hover:bg-[#497bd2]`}
            href='https://tailwindcss.com/'
          >
            Tailwind CSS
          </a>
        </li>
        <li>
          <a
            className={`${technologiesItemStyle} bg-[#525ee7] hover:bg-[#3c44a0]`}
            href='https://mui.com/'
          >
            MUI
          </a>
        </li>
      </ul>
    </div>
  );
};
