import { DownloadData } from "@/app/mytupes/DownloadData";
export const DocumentView = (props: DownloadData) => {
  const { data } = props;
  const spanStyles = "font-bold text-lg";
  return (
    <div className='w-full p-16'>
      <div className='w-full p-4 bg-[#979191] border-[#fff] border-2'>
        <div className='w-full bg-[#fff] text-[#000] pl-4 pr-4 pb-6 text-center'>
          <h1 className='flex flex-col pt-6 font-semibold text-xl '>
            Цей документ створений за допомогою програми{" "}
            <span>Екскурсійний органайзер.</span>
          </h1>
          <a
            className='text-[#5286e0] font-medium text-lg'
            href='https://excrursion-organizer.vercel.app/'
          >
            Відвідати Органайзер
          </a>
          <h2 className=' font-semibold text-3xl'>"{data?.tittle}"</h2>
          <ul className='text-left ml-5 mt-7 font-medium text-base'>
            <li>
              <p>
                {" "}
                <span className={spanStyles}>Автор:</span> {data?.author}
              </p>
            </li>
            <li>
              <p>
                <span className={spanStyles}>Мета:</span> {data?.goal}
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className={spanStyles}>Вид:</span> {data?.kind}
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className={spanStyles}>Тема:</span> {data?.topic}
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className={spanStyles}>Час проведення:</span> {data?.time}
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className={spanStyles}>Об'єкти для огляду:</span>{" "}
                {data?.artifacts}
              </p>
            </li>
            <li>
              <p>
                {" "}
                <span className={spanStyles}>Матеріали:</span>{" "}
                {data?.references}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
