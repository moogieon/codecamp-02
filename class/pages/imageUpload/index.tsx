import { ChangeEvent, useRef, useState } from "react";
import { LikeOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { gql, useMutation } from "@apollo/client";

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
const InputIN = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};

export default function imageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imgUrl, setImgUrl] = useState([]);
  const [input, setInput] = useState(InputIN);
  const [createBoard] = useMutation(CREAT_BOARD);

  const fileRef = useRef<HTMLInputElement>(null);

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file?.size) {
      alert("파일이 없습니다.");
      return;
    }
    if (file?.size > 5 * 1024 * 1024) {
      alert("파일 사이즈가 너무 큽니다(제한:5MB)");
      return;
    }
    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
      alert("png 또는 jpeg 파일만 전송 가능합니다.");
      return;
    }
    try {
      const result = await uploadFile({
        variables: {
          aaa: file,
        },
      });
      console.log(result.data.uploadFile.url);
      setImgUrl(result.data.uploadFile.url);
    } catch (error) {
      alert(error.message);
    }
  }
  function onclickBox() {
    fileRef.current?.click();
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
      const result = await createBoard({
        variables: {
          bbb: {
            ...input,
            images: [imgUrl],
          },
        },
      });
      console.log(result.data.createBoard._id);
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <>
      <div>
        {fileurl.map(
          <img
            style={{ width: "200px", height: "200px", backgroundSize: "100%" }}
            src={`https://storage.googleapis.com/${imgUrl}`}
          />
        )}
      </div>
      <button onClick={onclickSubmit}>등록</button>
      작성자: <input name="writer" type="text" onChange={onChangeInput}></input>
      비번:
      <input name="password" type="password" onChange={onChangeInput}></input>
      제목:<input name="title" type="text" onChange={onChangeInput}></input>
      내용:<input name="contents" type="text" onChange={onChangeInput}></input>
      <Tooltip title="파일 업로드 1">
        <LikeOutlined onClick={onclickBox} style={{ fontSize: "50px" }} />
      </Tooltip>
      <Tooltip title="파일 업로드 2">
        <LikeOutlined onClick={onclickBox} style={{ fontSize: "50px" }} />
      </Tooltip>
      <Tooltip title="파일 업로드 3">
        <LikeOutlined onClick={onclickBox} style={{ fontSize: "50px" }} />
      </Tooltip>
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        multiple
      />
    </>
  );
}
