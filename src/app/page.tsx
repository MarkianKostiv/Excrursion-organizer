import Image from "next/image";
import { CreatingPanel } from "./mycomponents/CreatingPannel";
import { UserExcursionsList } from "./mycomponents/myexcursions/UserExcursionsList";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-3 sm:p-24'>
      <div>
        <div className='relative flex flex-col z-10 h-32 w-full '>
          <h1 className='text-[#FFF] font-extrabold text-3xl m-6 hidden'>
            Екскурсійний Органайзер
          </h1>
          <div className='loader mt-8 sm:m-0'>
            <span>Екскурсійний</span>
            <span>Екскурсійний</span>
          </div>
          <div className='loader mt-14 sm:mt-14'>
            <span>Органайзер</span>
            <span>Органайзер</span>
          </div>
        </div>
      </div>
      <div className=''>
        {/* <p className=' max-w-full overflow-hidden whitespace-normal break-words'>
          Тут ваш текст, який може виходити за межі контейнера.
        </p> fdj */}
      </div>
      <div className='w-full relative flex flex-col items-center justify-center'>
        <CreatingPanel />
        <UserExcursionsList />
      </div>
    </main>
  );
}
