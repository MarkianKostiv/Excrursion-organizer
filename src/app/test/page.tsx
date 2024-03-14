"use client";
import pdfMake from "pdfmake/build/pdfmake";
import vfsFonts from "pdfmake/build/vfs_fonts";

export default function TestPage() {
  const documentDescription =
    "Цей документ створений за допомогою програми Екскурсійний органайзер.";
  const linkToOrganizer = "link";

  const createPDF = () => {
    const { vfs } = vfsFonts.pdfMake;
    pdfMake.vfs = vfs;

    const docDefinition: any = {
      content: [
        {
          text: documentDescription,
          fontSize: 20,
          alignment: "center",
          margin: [0, 0, 0, 20],
        },
        { text: linkToOrganizer, fontSize: 20 },
      ],
    };

    pdfMake.createPdf(docDefinition).download("document.pdf");
  };

  return (
    <>
      <h1>{documentDescription}</h1>
      <h2>{linkToOrganizer}</h2>
      <p>працює</p>
      <button onClick={createPDF}> Завантажити документ</button>
    </>
  );
}
