import Link from "next/link";
export const HeaderComponent = () => {
  return (
    <header className='flex items-center justify-center p-4 text-center'>
      {" "}
      <div className='flex justify-start w-full'>
        <Link href='/'>
          <button className='bg-[#dda13a] hover:bg-[#fa9c4e]'>Додому</button>
        </Link>
      </div>
    </header>
  );
};
