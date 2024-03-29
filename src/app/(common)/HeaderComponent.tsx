import Link from "next/link";
import { HomeBtn } from "./HomeBtn";
import HomeIcon from "@mui/icons-material/Home";
export const HeaderComponent = () => {
  return (
    <header className='flex items-center justify-center p-4 text-center sticky top-0  z-20'>
      {" "}
      <div className='flex justify-start w-full'>
        <Link href='/'>
          <HomeBtn
            style='bg-[#dda13a] hover:bg-[#fa9c4e]'
            materialUiIcon={HomeIcon}
          />
        </Link>
      </div>
    </header>
  );
};
