"use client";
import pdfMake from "pdfmake/build/pdfmake";
import vfsFonts from "pdfmake/build/vfs_fonts";
import { DownloadData } from "@/app/mytupes/DownloadData";
import { DocDefinitionTypes } from "@/app/mytupes/DocDefinitionTypes";

export const DownloadComponent = (props: DownloadData) => {
  const { data } = props;

  const createPDF = () => {
    const documentName = data?.tittle;
    const documentDescription =
      "Цей документ створений за допомогою програми Екскурсійний органайзер.";
    const linkToOrganizer = "Відвідати органайзер";
    const { vfs } = vfsFonts.pdfMake;
    pdfMake.vfs = vfs;

    const docDefinition: DocDefinitionTypes = {
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
          style: "header",
        },
        {
          text: [
            {
              text: "Автор: ",
              bold: true,
              fontSize: 16,
              margin: [20, 0, 0, 0],
            },
            {
              text: `${data?.author}`,
              alignment: "justify",
              margin: [20, 0, 0, 0],
            },
          ],
        },
        {
          text: [
            { text: "Мета: ", bold: true, fontSize: 16, margin: [20, 0, 0, 0] },
            {
              text: `${data?.goal}`,
              alignment: "justify",
              margin: [20, 0, 0, 0],
            },
          ],
        },
        {
          text: [
            { text: "Вид: ", bold: true, fontSize: 16, margin: [20, 0, 0, 0] },
            { text: `${data?.kind}`, alignment: "justify" },
          ],
        },
        {
          text: [
            { text: "Тема: ", bold: true, fontSize: 16, margin: [20, 0, 0, 0] },
            { text: `${data?.topic}`, alignment: "justify" },
          ],
        },
        {
          text: [
            { text: "Час: ", bold: true, fontSize: 16, margin: [20, 0, 0, 0] },
            { text: `${data?.time}`, alignment: "justify" },
          ],
        },
        {
          text: [
            {
              text: "Об'єкти для огляду: ",
              bold: true,
              fontSize: 16,
              margin: [20, 0, 0, 0],
            },
            { text: `${data?.artifacts}`, alignment: "justify" },
          ],
        },
        {
          text: [
            {
              text: "Матеріали: ",
              bold: true,
              fontSize: 16,
              margin: [20, 0, 0, 0],
            },
            { text: `${data?.references}`, alignment: "justify" },
          ],
        },
      ],
    };

    pdfMake.createPdf(docDefinition).download(`${documentName}_excursion.pdf`);
  };

  return (
    <>
      <h3 className='m-4 text-center'>
        Завантажте Вашу екскурсію у форматі pdf{" "}
      </h3>
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
