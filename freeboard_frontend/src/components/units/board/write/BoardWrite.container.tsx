import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
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
  const [inputs, setInputs] = useState(INPUT_INIT); //! inputInit가 뭐였지 ?
  const [active, setActive] = useState(false);
  const [inputs_error, setInput_Error] = useState(INPUT_INIT);

  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD); // mutation(고정) post (이름) //
  // $BoradInput (이름) : CreateBoardInput(API 고정)
  // createBoard(API 고정)
  const [isOpen, setIsOpen] = useState(false);
  function onOK() {
    setIsOpen(false);
  }
  function onCancel() {
    setIsOpen(false);
  }

  function onChangeInputs(event: any) {
    const newInput = {
      writer: inputs.writer,
      password: inputs.password,
      title: inputs.title,
      contents: inputs.contents,
      [event.target.name]: event.target.value,
    };
    setInputs(newInput, { youtubeUrl: inputs.youtubeUrl });
    console.log(event.target);
    if (Object.values(newInput).every((data) => data !== "")) {
      //! values 나 key 말고 다 가저오면 ? //! 이거 설명 다시 한번
      setActive(true);
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

  // ------------------------------------------------------------------------
  async function ChangeRegist() {
    setInput_Error({
      writer: inputs.writer ? "" : "작성자를 입력해주세요",
      password: inputs.password ? "" : "비밀번호를 입력해주세요.",
      title: inputs.title ? "" : "제목을 입력해주세요.",
      contents: inputs.contents ? "" : "내용을 입력해주세요.",
      youtubeUrl: "",
    });

    const isEvery = Object.values(inputs)
      .filter((data) => data === "youtubeUrl")
      .every((data) => data);
    if (isEvery) {
      try {
        const result = await createBoard({
          variables: {
            // 변수이름은 마음 대로 ex) aaa:seller
            createBoardInput: {
              ...inputs,
              boardAddress: { zipcode, address, addressDetail },
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
        alert(error.message);
      }
    }
  }

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
            },
          },
        });
        Modal.confirm({
          okText: "예",
          cancelText: "안돼요!",
          content: "게시물이 수정되었습니다.",
          onOk: () => router.push(`detail/${result.data.createBoard._id}`),
        });
      } catch (error) {
        alert(error.message);
      }
    }
  }
  function onClickCancel() {
    router.push("/boards/");
  }

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
    />
  );
}
