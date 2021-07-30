import { useState } from "react";
import { ChangeEvent, useRef } from "react";
import { checkValidationFile } from "../../../commons/libraries/validations";
import Uploads01UI from "./Uploads01.presenter";
import { IUploads01Props } from "./Uploads01.types";

export default function Uploads01(props: IUploads01Props) {
  const [fileUrl, setFileUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  function onClickUpload() {
    fileRef.current?.click();
  }

  function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!checkValidationFile(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setFileUrl(data.target?.result as string); //! 이 주소는 어디서 >??
    };
  }

  return (
    <Uploads01UI
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      onClickUpload={onClickUpload}
      fileUrl={fileUrl}
    />
  );
}
