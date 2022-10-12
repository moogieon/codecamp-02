import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { Modal } from "antd";

export const INPUT_INIT = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  youtubeUrl: "",
};

interface IProps {
  isEdit?: boolean;
}

export default function BoardWrite(props: IProps) {
  const router = useRouter();
  const [inputs, setInputs] = useState(INPUT_INIT);
  const [active, setActive] = useState(false);
  const [inputs_error, setInput_Error] = useState(INPUT_INIT);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  const [isOpen, setIsOpen] = useState(false);
  function onOK() {
    setIsOpen(false);
  }
  function onCancel() {
    setIsOpen(false);
  }
  // -----------게시물 작성----------------------------
  function onChangeInputs(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newInput = {
      writer: inputs.writer,
      password: inputs.password,
      title: inputs.title,
      contents: inputs.contents, //! ...inputs 하면 유투브 등록 안하면 등록이 안됨
      youtubeUrl: inputs.youtubeUrl,
      [event.target.name]: event.target.value,
    };
    setInputs(newInput);
    console.log(event.target);
    if (Object.values(newInput).every((data) => data !== "")) {
      setActive(true); //! 다시 이해하기
    }
    setInput_Error({ ...inputs_error, [event.target.name]: "" });
    //   setActive(Object.values(newInput).every(data=>data))  <- 이미 트루라서 트루 값 안에 넣어 줌
  }

  // 주소 보내기------------------------------------------------------------------------
  const [addressDetail, setAddressDetail] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [openpost, setOpenPost] = useState(false);
  function onComplete(data: any) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setOpenPost(false);
  }
  function onChangeAddressDetail(event: any) {
    setAddressDetail(event.target.value);
  }

  function onClickPost() {
    setOpenPost(true);
  }

  // --------------------------등록하기 버튼----------------------------------------------
  async function ChangeRegist() {
    setInput_Error({
      writer: inputs.writer ? "" : "작성자를 입력해주세요",
      password: inputs.password ? "" : "비밀번호를 입력해주세요.",
      title: inputs.title ? "" : "제목을 입력해주세요.",
      contents: inputs.contents ? "" : "내용을 입력해주세요.",
      youtubeUrl: "",
    });

    const isEvery = Object.values(inputs) //! 이게 뭐였지...?
      .filter((data) => data === "youtubeUrl")
      .every((data) => data);
    if (!isEvery) return;

    try {
      // 이미지 업로드
      const uploadFiles = files
        .filter((data) => data)
        .map((data) => uploadFile({ variables: { file: data } }));
      const results = await Promise.all(uploadFiles);
      const images = results.map((data) => data.data.uploadFile.url); //! ???

      // 게시물 업로드
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
            boardAddress: { zipcode, address, addressDetail },
            images: images,
          },
        },
      });
      console.log(result.data);
      Modal.confirm({
        okText: "예",
        cancelText: "안돼요!",
        content: "게시물이 성공적으로 등록되었습니다.",
        onOk: () => router.push(`detail/${result.data.createBoard._id}`),
      });
    } catch (error) {
      alert("오류");
    }
  }

  // ----------------수정하기-------------------------
  async function onClickEdit() {
    setInput_Error({
      writer: inputs.writer ? "" : "작성자를 입력해주세요.",
      password: inputs.password ? "" : "비밀번호를 입력해주세요.",
      title: inputs.title ? "" : "제목을 입력해주세요.",
      contents: inputs.contents ? "" : "내용을 입력해주세요.",
      youtubeUrl: "",
    });
    if (Object.values(inputs).every((data) => data)) {
      try {
        const result = await updateBoard({
          variables: {
            boardId: router.query._id,
            password: inputs.password,
            updateBoardInput: {
              title: inputs.title,
              contents: inputs.contents,
              youtubeUrl: inputs.youtubeUrl,
              boardAddress: { zipcode, address, addressDetail },
            },
          },
        });
        Modal.confirm({
          okText: "예",
          cancelText: "안돼요!",
          content: "게시물이 수정되었습니다.",
          onOk: () =>
            router.push(`/boards/detail/${result.data.updateBoard._id}`),
        });
      } catch (error) {
        alert("오류"); // ssssssss
      }
    }
  }
  function onClickCancel() {
    router.push("/boards/");
  }
  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }
  // function onChangeFiles(fileUrl: string, index: number) {
  //   const newFileUrls = [...files];
  //   newFileUrls[index] = fileUrl;
  //   setFiles(newFileUrls);
  // }
  //! 스트링에서 file 로 타입이 왜 바뀌었지 ?

  return (
    <BoardWriteUI
      onChangeInputs={onChangeInputs}
      ChangeRegist={ChangeRegist}
      inputs_error={inputs_error}
      isEdit={props.isEdit}
      active={active}
      onClickEdit={onClickEdit}
      openpost={openpost}
      address={address}
      zipcode={zipcode}
      onChangeAddressDetail={onChangeAddressDetail}
      onComplete={onComplete}
      onClickCancel={onClickCancel}
      isOpen={isOpen}
      onCancel={onCancel}
      onOK={onOK}
      onClickPost={onClickPost}
      onChangeFiles={onChangeFiles}
    />
  );
}
