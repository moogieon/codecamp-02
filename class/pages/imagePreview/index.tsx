import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
const UPLOAD_FILE = gql`
  mutation uploadFile($aaa: Upload!) {
    uploadFile(file: $aaa) {
      url
    }
  }
`;
const CREAT_BOARD = gql`
  mutation createBoard($bbb: CreateBoardInput!) {
    createBoard(createBoardInput: $bbb) {
      _id
    }
  }
`;
export default function imagePreviewPage() {
  const InputIN = {
    writer: "",
    password: "",
    title: "",
    contents: "",
  };
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREAT_BOARD);

  const [input, setInput] = useState(InputIN);
  const [imgurl, setImgUrl] = useState("");
  const [file, setFile] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);
  async function onChangeFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file?.size) {
      alert("파일을 첨부 주세여");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("사이즈가 큽니다.(제한:5MB)");
      return;
    }
    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
      alert("잘못된 파일입니다.");
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImgUrl(data.target.result); // ? 뭐지 이게
      setFile(file);
    };
    // try {
    //   const result = await uploadFile({
    //     variables: {
    //       aaa: file,
    //     },
    //   });
    //   console.log(result.data.uploadFile.url);
    //   setImgUrl(result.data.uploadFile.url);
    // } catch (error) {
    //   alert(error.message);
    // }
  }

  function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
    const newInputs = {
      ...input,
      [event.target.name]: event.target.value,
    };
    setInput(newInputs);
  }
  async function onclickSubmit() {
    try {
      const resultFile = await Promise.all([
        uploadFile({ variables: { aaa: file } }),
        uploadFile({ variables: { aaa: file } }),
      ]);
      // const resultFile = await uploadFile({
      //   variables: {
      //     aaa: file,
      //   },
      // });

      const Image1 = resultFile[0].data.uploadFile.url;
      const image2 = resultFile[1].data.uploadFile.url;
      // console.log(resultFile.data.uploadFile.url);

      const result = await createBoard({
        variables: {
          bbb: {
            ...input,
            images: [Image1, image2],
          },
        },
      });
      console.log(result.data.createBoard._id);
    } catch (error) {
      alert(error.message);
    }
  }
  function onclickBox() {
    fileRef.current?.click();
  }
  return (
    <>
      작성자:
      <input name="writer" type="text" onChange={onChangeInput}></input>
      비번:
      <input name="password" type="password" onChange={onChangeInput}></input>
      제목:
      <input name="title" type="text" onChange={onChangeInput}></input>
      내용:
      <input name="contents" type="text" onChange={onChangeInput}></input>
      <img src={imgurl} style={{ width: "200px", height: "200px" }} />
      <br />
      <UploadOutlined onClick={onclickBox} style={{ fontSize: "50px" }} />
      <input
        ref={fileRef}
        type="file"
        onChange={onChangeFile}
        style={{ display: "none" }}
      />
      <button onClick={onclickSubmit}>등록</button>
    </>
  );
}
