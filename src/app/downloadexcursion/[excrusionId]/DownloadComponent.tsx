"use client";
import pdfMake from "pdfmake/build/pdfmake";
import vfsFonts from "pdfmake/build/vfs_fonts";
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

export const DownloadComponent = (props: DownloadData) => {
  const { data } = props;
  console.log(data);
  const documentName = data?.tittle;
  const documentDescription =
    "Цей документ створений за допомогою програми Екскурсійний органайзер.";
  const linkToOrganizer = "Click to visit ";
  const createPDF = () => {
    const { vfs } = vfsFonts.pdfMake;
    pdfMake.vfs = vfs;

    const docDefinition: any = {
      content: [
        {
          text: documentDescription,
          fontSize: 20,
          alignment: "center",
          margin: [0, 0, 0, 0],
        },
        {
          text: linkToOrganizer,
          fontSize: 20,
          alignment: "center",
          color: "blue",
          link: "https://excrursion-organizer.vercel.app/",
        },
        {
          text: `"${data?.tittle}"`,
          fontSize: 24,
          alignment: "center",
          margin: [10, 10, 10, 10],
        },
        { text: `Автор: ${data?.author}` },
        { text: `Мета: ${data?.goal}` },
        { text: `Вид: ${data?.kind}` },
        { text: `Тема: ${data?.topic}` },
        { text: `Час: ${data?.time}` },
        { text: `Об'єкти для огляду: ${data?.artifacts}` },
        { text: `Матеріали: ${data?.references}` },
      ],
    };

    pdfMake.createPdf(docDefinition).download(`${documentName}_excursion.pdf`);
  };

  return (
    <>
      <h3 className='m-4'>Завантажте Вашу екскурсію у форматі pdf </h3>
      <button
        className='bg-[#44ce52] hover:bg-[#3b9f45]'
        onClick={createPDF}
      >
        {" "}
        Завантажити документ
      </button>
    </>
  );
};
