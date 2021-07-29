import { UlploadInPut, UploadImage, UploadButton } from "./Uploads01.style";
import { IUploads01UIProps } from "./Uploads01.types";

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage
          src={`https://storage.googleapis.com/${props.fileUrl}`}
          onClick={props.onClickUpload}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload} />
      )}

      <UlploadInPut
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
