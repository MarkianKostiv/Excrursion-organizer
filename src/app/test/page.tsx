import { v4 as uuidv4 } from "uuid";

export default function TestPage() {
  const createTestObj = (() => {
    let idNumber = uuidv4();
    return (name: string, game: string, hairColor: string) => {
      const testObj = {
        name: `${name}`,
        game: `${game}`,
        hairColor: `${hairColor}`,
        id: idNumber,
      };
      return testObj;
    };
  })();

  const geralt = createTestObj("Geralt", "The Witcher", "white");
  const lara = createTestObj("Lara", "Tomb Raider", "black");
  const cj = createTestObj("Carl", "gta", "black");
  console.log(geralt);
  console.log(lara);
  console.log(cj);
  return (
    <>
      <h1>This page for test integration new features</h1>
    </>
  );
}
