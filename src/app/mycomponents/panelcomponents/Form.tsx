"use client";
import { useState } from "react";
import { UserObj } from "@/app/mytupes/UserObj";
import { v4 as uuidv4 } from "uuid";

export const Form = () => {
  const [kind, setKind] = useState("");
  const [author, setAuthor] = useState("");
  const [tittle, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [goal, setGoal] = useState("");
  const [time, setTime] = useState("");
  const [artifacts, setArtifacts] = useState("");
  const [references, setReferences] = useState("");
  const [dataArray, setDataArray] = useState<UserObj[]>([]);

  const clearInputFields = () => {
    setAuthor("");
    setKind("");
    setTitle("");
    setTopic("");
    setGoal("");
    setReferences("");
    setTime("");
    setArtifacts("");
  };

  const saveUserDataObj = () => {
    const isLocalStorageData = localStorage.getItem("Excursions");
    const event = new CustomEvent("userDataChanged");
    const userDataObj: UserObj = {
      excursionData: {
        id: "",
        author,
        tittle,
        kind: "",
        topic: "",
        goal: "",
        time: "",
        artifacts: "",
        references: "",
      },
    };

    const userObjDataRecording = () => {
      userDataObj.excursionData.id = uuidv4();
      userDataObj.excursionData.author = author.valueOf();
      userDataObj.excursionData.tittle = tittle.valueOf();
      userDataObj.excursionData.kind = kind.valueOf();
      userDataObj.excursionData.topic = topic.valueOf();
      userDataObj.excursionData.goal = goal.valueOf();
      userDataObj.excursionData.time = time.valueOf();
      userDataObj.excursionData.artifacts = artifacts.valueOf();
      userDataObj.excursionData.references = references.valueOf();
    };

    if (isLocalStorageData) {
      userObjDataRecording();
      const localData = JSON.parse(isLocalStorageData);
      setDataArray((localData) => [userDataObj, ...localData]);
      const saveData = JSON.stringify([userDataObj, ...localData]);
      localStorage.setItem("Excursions", saveData);
      window.dispatchEvent(event);
    } else {
      userObjDataRecording();

      setDataArray((prevData) => [userDataObj, ...prevData]);

      const saveData = JSON.stringify([userDataObj, ...dataArray]);
      localStorage.setItem("Excursions", saveData);
      window.dispatchEvent(event);
    }
    clearInputFields();
  };

  const inputStyle = "w-72 sm:w-80 h-12 mb-1 p-3 rounded-xl text-xl ";

  return (
    <div className='flex items-center justify-center flex-col'>
      <h3 className='text-[#000] text-center font-bold text-2xl ml-2 mr-2'>
        Панель Створення
      </h3>
      <ul>
        <li>
          {" "}
          <input
            className={inputStyle}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type='text'
            placeholder='Автор'
          />
        </li>
        <li>
          {" "}
          <input
            className={inputStyle}
            value={tittle}
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            placeholder='Назва'
          />
        </li>
        <li>
          {" "}
          <input
            className={inputStyle}
            value={kind}
            onChange={(e) => setKind(e.target.value)}
            type='text'
            placeholder='Вид екскурсії'
          />
        </li>
        <li>
          <input
            className={inputStyle}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            type='text'
            placeholder='Тема екскурсії'
          />
        </li>
        <li>
          <input
            className={inputStyle}
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            type='text'
            placeholder='Мета екскурсії'
          />
        </li>
        <li>
          <input
            className={inputStyle}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type='text'
            placeholder='час екскурсії'
          />
        </li>
        <li>
          <input
            className={inputStyle}
            value={artifacts}
            onChange={(e) => setArtifacts(e.target.value)}
            type='text'
            placeholder='предмети для огляду'
          />
        </li>
        <li>
          <input
            className={inputStyle}
            value={references}
            onChange={(e) => setReferences(e.target.value)}
            type='text'
            placeholder='Посилання на матеріали'
          />
        </li>
      </ul>
      <div className='flex items-center justify-between w-full'>
        <button
          className='text-[#000] bg-[#f46845] hover:bg-[#e6a9a9] mt-3 mb-3 p-2 pl-3 pr-3 rounded-full outline outline-black'
          onClick={clearInputFields}
        >
          Скасувати
        </button>
        <button
          className='text-[#000] bg-[#1ABF43] hover:bg-[#b2f6c0] mt-3 mb-3 p-2 pl-3 pr-3 rounded-full outline outline-black'
          onClick={saveUserDataObj}
        >
          Зберегти
        </button>
      </div>
    </div>
  );
};
