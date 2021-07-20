import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";

export const INPUT_INIT = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};
export const INPUT_ADDRESS = {
  zipcode: "",
  address: "",
  addressDetail: "",
};
interface IProps {
  isEdit?: boolean;
}

export default function BoardWrite(props: IProps) {
  const router = useRouter();
  const [inputs, setInputs] = useState(INPUT_INIT); //! inputInit가 뭐였지 ?
  //   const[inputsErrors, setInputsErrors] = useState({
  //     iderror:'',
  //     pwerror:'',
  //     ttlerror:'',
  //     contentserror:''
  //   })
  const [inputaddress, setInPutAddress] = useState(INPUT_ADDRESS);
  const [youtubeUrl, setYoutubeUrl] = useState(" ");
  const [active, setActive] = useState(false);

  const [inputs_error, setInput_Error] = useState(INPUT_INIT);

  // const [iderror, setIderror] = useState('')
  // const [pwerror, setPwerror] = useState('')
  // const [ttlerror, setTtlerror] = useState('')
  // const [contentserror, setContetserror] = useState('')

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

  function onChangeInputs(event) {
    const newInput = {
      //! newInput에 담아서 사용 안해도 되는지
      ...inputs,

      [event.target.name]: event.target.value,
    };
    setInputs(newInput);
    console.log(event.target);
    if (Object.values(newInput).every((data) => data !== "")) {
      //! values 나 key 말고 다 가저오면 ? //! 이거 설명 다시 한번
      setActive(true);
    }
    setInput_Error({ ...inputs_error, [event.target.name]: "" });
    //   setActive(Object.values(newInput).every(data=>data))  <- 이미 트루라서 트루 값 안에 넣어 줌
  }

  function onChangeyoutube(event) {
    setYoutubeUrl(event.target.value);
    console.log(event.target);
  }
  // 주소 보내기------------------------------------------------------------------------

  const [address, setAddress] = useState("");
  const [zonecode, setZoneCode] = useState("");
  function onComplete(data: any) {
    setAddress(data.address);
    setZoneCode(data.zonecode);
    setOpenPost(false);
  }
  function onChangePost(INPUT_ADDRESS) {
    setInPutAddress(INPUT_ADDRESS.addressDetail);
  }
  const [openpost, setOpenPost] = useState(false);
  function onClickPost() {
    setOpenPost(true);
  }
  function onClickPostClose() {
    setOpenPost(false);
  }

  // ------------------------------------------------------------------------
  async function ChangeRegist() {
    setInput_Error({
      writer: inputs.writer ? "" : "작성자를 입력해주세요",
      password: inputs.password ? "" : "비밀번호를 입력해주세요.",
      title: inputs.title ? "" : "제목을 입력해주세요.",
      contents: inputs.contents ? "" : "내용을 입력해주세요.",
    });

    if (Object.values(inputs).every((data) => data)) {
      try {
        const result = await createBoard({
          variables: {
            // 변수이름은 마음 대로 ex) aaa:seller
            createBoardInput: {
              boardAddress: { ...inputaddress },
              ...inputs,

              youtubeUrl: youtubeUrl,
            },
          },
        });

        console.log(result.data);

        // router.push(`detail/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  }

  async function onClickEdit() {
    if (Object.values(inputs).every((data) => data)) {
      try {
        const result = await updateBoard({
          variables: {
            boardId: router.query._id,
            password: inputs.password,
            updateBoardInput: {
              title: inputs.title,
              contents: inputs.contents,
            },
          },
        });
        alert("등록 완료!");
        router.push(`/boards/detail/${result.data.updateBoard._id}`);
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
      onChangePost={onChangePost}
      openpost={openpost}
      onClickPostClose={onClickPostClose}
      address={address}
      zonecode={zonecode}
      onComplete={onComplete}
      onChangeyoutube={onChangeyoutube}
      onClickCancel={onClickCancel}
      isOpen={isOpen}
      onCancel={onCancel}
      onOK={onOK}
      onClickPost={onClickPost}
    />
  );
}
