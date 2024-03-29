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
          "Музеї та авіація. Потенціал аерокосмічних музеїв науки та техніки в
          Україні”
        </span>{" "}
        <span>
          "Museums and Aviation. The potential of aerospace museums of science
          and technology in Ukraine."
        </span>
      </p>
    </footer>
  );
};
