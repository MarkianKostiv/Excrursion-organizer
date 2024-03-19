interface DownloadData {
  data?: {
    id: number;
    author: string;
    tittle: string;
    kind: string;
    topic: string;
    goal: string;
    references: string;
    time: string;
    artifacts: string;
  };
}
export const DocumentView = (props: DownloadData) => {
  const { data } = props;
  return (
    <div className='w-full p-4'>
      <div className='w-full p-4 bg-[#979191] border-[#fff] border-2'>
        <div className='w-full bg-[#fff] text-[#000] pl-4 pr-4 text-center'>
          <h1 className='flex flex-col pt-6'>
            Цей документ створений за допомогою програми{" "}
            <span>Екскурсійний органайзер.</span>
          </h1>
          <a
            className='text-[#5286e0]'
            href='https://excrursion-organizer.vercel.app/'
          >
            Відвідати Органайзер
          </a>
          <ul className='text-left'>
            <li>
              <p> Автор: {data?.author}</p>
            </li>
            <li>
              <p> Мета: {data?.goal}</p>
            </li>
            <li>
              <p> Вид: {data?.kind}</p>
            </li>
            <li>
              <p> Тема: {data?.topic}</p>
            </li>
            <li>
              <p> Час проведення: {data?.time}</p>
            </li>
            <li>
              <p> Об'єкти для огляду: {data?.artifacts}</p>
            </li>
            <li>
              <p> Матеріали: {data?.references}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
