"use client";
import { UserObj } from "@/app/mytupes/UserObj";
import { useEffect, useState } from "react";
import { DownloadComponent } from "./DownloadComponent";
import Link from "next/link";
import { DocumentView } from "./DocumentView";
export default function DownloadPage(props: any) {
  const { params } = props;
  const { excrusionId } = params;
  const [dataObjExcursion, setDataObjExcursion] = useState<UserObj>();

  useEffect(() => {
    const getExcursionData = () => {
      const data: any = localStorage.getItem("Excursions");
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      const excursionObjData: UserObj = parsedData.find(
        (obj: UserObj) => obj.excursionData.id == excrusionId
      );
      console.log(excursionObjData);

      setDataObjExcursion(excursionObjData);
    };
    getExcursionData();
  }, []);

  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[#fff] text-center'>
          Сформуйте PDF файл, щоб зберегти локально екскурсію&#34;
          {dataObjExcursion?.excursionData.tittle}&#34;
        </h1>
        <p>Ось як буде виглядати ваш документ</p>
        <DocumentView data={dataObjExcursion?.excursionData} />
        <DownloadComponent data={dataObjExcursion?.excursionData} />
      </div>
    </>
  );
}
