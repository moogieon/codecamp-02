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

  const [active, setActive] = useState(false);

  // const [iderror, setIderror] = useState('')
  // const [pwerror, setPwerror] = useState('')
  // const [ttlerror, setTtlerror] = useState('')
  // const [contentserror, setContetserror] = useState('')

  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD); // mutation(고정) post (이름) //
  // $BoradInput (이름) : CreateBoardInput(API 고정)
  // createBoard(API 고정)

  function onChangeInputs(event) {
    const newInput = {
      //! newInput에 담아서 사용 안해도 되는지
      ...inputs,
      [event.target.name]: event.target.value, //! 이게 왜 이렇게 나오는건지 질문!
    };
    setInputs(newInput);
    console.log(event.target);
    if (Object.values(newInput).every((data) => data !== "")) {
      //! values 나 key 말고 다 가저오면 ? //! 이거 설명 다시 한번
      setActive(true);

      // if(inputsErrors[event.target.name as keyof typeof INPUT_INIT ]) {  //!!
      //     setInputsErrors({...inputsErrors, [event.target.name]: ""})
      //     }
    }
    //   setActive(Object.values(newInput).every(data=>data))  <- 이미 트루라서 트루 값 안에 넣어 줌
  }

  async function ChangeRegist() {
    // setInputsErrors({writer: inputs.writer?"":"작성자를 입력해주세요",
    //                 password: inputs.password ? "" : "비밀번호를 입력해주세요.",
    //                 title: inputs.title ? "" : "제목을 입력해주세요.",
    //                 contents: inputs.contents ? "" : "내용을 입력해주세요."
    //     })
    if (Object.values(inputs).every((data) => data)) {
      try {
        const result = await createBoard({
          variables: {
            // 변수이름은 마음 대로 ex) aaa:seller
            createBoardInput: { ...inputs },
          },
        });
        console.log(result.data.createBoard._id);
        alert("등록 완료");
        router.push(`detail/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  }

  // (이름) useMutation 함수 이름

  async function onClickEdit() {
    //! 왜 함수에 담는가

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

  return (
    <BoardWriteUI
      onChangeInputs={onChangeInputs}
      ChangeRegist={ChangeRegist}
      // inputsErrors={inputsErrors}
      isEdit={props.isEdit}
      // error1={iderror}
      // error2={pwerror}
      // error3={ttlerror}
      // error4={contentserror}
      active={active}
      onClickEdit={onClickEdit}
    />
  );
}
