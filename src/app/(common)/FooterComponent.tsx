export const FooterComponent = () => {
  return (
    <footer className='flex flex-col items-center justify-center p-10 text-center'>
      <h1 className='m-4'>Розробник: Костів Маркіян.</h1>
      <p className=''>Національний Університет Львівська Політехніка</p>
      <p className=''>Інститут гуманітраних та Соціальних Наук</p>
      <p className=''>Кафедра: ІМКС</p>
      <p className='m-4'>
        Проєкт розроблено в рамках Бакалаврської роботи:{" "}
        <span>
          &#34;Музеї та авіація. Потенціал аерокосмічних музеїв науки та техніки
          в Україні&#34;
        </span>{" "}
        <span>
          &#34;Museums and Aviation. The potential of aerospace museums of
          science and technology in Ukraine.&#34;
        </span>
      </p>
    </footer>
  );
};
