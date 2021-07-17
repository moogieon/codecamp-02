import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

const inputInit = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};
interface IProps {
  isEdit?: boolean;
  data?: IQuery;
}
interface INewInputs {
  title?: string;
  contents?: string;
}

export default function BoardWrite(props: IProps) {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const [inputs, setInputs] = useState(inputInit);

  // const [writer, setWriter] = useState('')
  // const [passwrod, setPasword] = useState('')
  // const [title, setTitle] = useState('')
  // const [contents, setContents] = useState('')

  const [createBoard] = useMutation<IMutation, IMutationCreateBoardArgs>(
    CREATE_BOARD
  );
  const [updateBoard] = useMutation<IMutation, IMutationUpdateBoardArgs>(
    UPDATE_BOARD
  );

  function onChangeInputs(event: ChangeEvent<HTMLInputElement>) {
    const newInputs = {
      ...inputs,
      // writer: inputs.writer,
      // password:inputs.passwrod,
      // title:inputs.title,
      // contents:inputs.contents,
      [event.target.name]: event.target.value,
    };
    setInputs(newInputs);
    if (Object.values(newInputs).every((data) => data)) {
      setActive(true);
    }
    // if (newInputs.writer && newInputs.password && newInputs.title && newInputs.contents) {
    //     setActive(true)
    // }
  }

  // event.target.value //철수

  // function onChangeWriter(event) {
  //     setWriter(event.target.value)
  // setActive(event.target.value && passwrod && title  && contents  ? true : false)
  // setActive(event.target.value !== "" && passwrod !== "" && title !== "" && contents !== "" ? true : false)
  // false: 앞에 !를 붙히면  false가됨 예) !true(false)

  // }

  // function onChangePassword(event) {
  //     setPasword(event.target.value)
  // setActive(writer !== "" && event.target.value !== "" && title !== "" && contents !== "" ? true : false)
  // setPoint(writer !=="" && event.target.value !=="" && title !==""&& contents !=="" ?true:false)

  // }

  // function onChangeTitle(event) {
  //     setTitle(event.target.value)
  // setActive(writer !== "" && passwrod !== "" && event.target.value !== "" && contents !== "" ? true : false)
  // setPoint(writer !=="" && passwrod !=="" && event.target.value !==""&& contents !=="" ?true:false)

  // }

  // function onChangeContents(event) {
  //     setContents(event.target.value)
  // setActive(event.target.value !== "" && passwrod !== "" && title !== "" && writer !== "" ? true : false)
  // setPoint ( event.target.value !=="" && passwrod !=="" && title !==""&& writer!=="" ?true:false)

  // }

  async function onClickSubmit() {
    // console.log(name)
    // console.log(age)
    // console.log(school)

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
            // writer: writer,
            // password: passwrod,
            // title: title,
            // contents: contents,
          },
        },
      });

      //  왼쪽 객체들은 API 양식 그대로  오른쪽은 usestate('') 변수
      alert("등록 완료!!");
      router.push(`/detail/${result.data?.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickEdit() {
    const newInputs: INewInputs = {};
    if (inputs.title) newInputs.title = inputs.title;
    if (inputs.contents) newInputs.contents = inputs.contents;
    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          password: inputs.password,
          updateBoardInput: { ...newInputs },
        },
      });
      alert("등록 완료!!");
      router.push(`/detail/${result.data?.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  }

  // ----------------------------------------------------------------------------------------
  return (
    <BoardWriteUI
      // aaa={onChangeWriter}
      // bbb={onChangePassword}
      // ccc={onChangeTitle}
      // ddd={onChangeContents}
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      active={active}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      data={props.data}
    />
  );
}
