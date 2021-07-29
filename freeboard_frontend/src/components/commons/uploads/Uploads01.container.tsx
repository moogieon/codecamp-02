import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import Uploads01UI from "./Uploads01.presenter";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { IUploads01Props } from "./Uploads01.types";

export default function Uploads01(props: IUploads01Props) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imgurl, setImgUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  function onClickUpload() {
    fileRef.current?.click();
  }

  function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file?.size) {
      Modal.error({ content: "파일이 없습니다." });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      Modal.error({ content: "파일이 너무 큽니다.(제한: 5MB)" });
      return;
    }
    if (!file.type.includes("png") && file.type.includes("jpg")) {
      Modal.error({ content: "지원하지 않는 확장자 입니다.(png, jpeg)" });
      return;
    }

    try {
      const result = uploadFile({ variables: { file } });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  return (
    <Uploads01UI
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      onClickUpload={onClickUpload}
    />
  );
}
