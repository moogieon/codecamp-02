import { ChangeEvent, useState } from "react";
import firebase from "firebase/app";
export default function FireBasePage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  function onClickSubmit() {
    firebase.firestore().collection("blog").add({
      writer: writer,
      title: title,
      contents: contents,
    });
  }
  async function onClickFetch() {
    const result = await firebase.firestore().collection("blog").get();
    result.forEach((doc) => console.log(doc.data()));
  }
  return (
    <>
      작성자:
      <input onChange={onChangeWriter} />
      제목:
      <input onChange={onChangeTitle} />
      내용:
      <input onChange={onChangeContents} />
      <button
        onClick={onClickSubmit}
        style={{
          width: "500px",
          height: "50px",
          color: "violet",
          backgroundColor: "aliceblue",
          cursor: "pointer",
        }}
      >
        등록
      </button>
      <div
        style={{ width: "200px", height: "300px", border: "solid, 1px" }}
      ></div>
      <button
        onClick={onClickFetch}
        style={{
          width: "100px",
          height: "100px",
          color: "burlywood",
          backgroundColor: "black",
          cursor: "pointer",
        }}
      >
        불러오기
      </button>
    </>
  );
}
