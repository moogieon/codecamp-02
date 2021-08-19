import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
// import { useForm } from "react-hook-form";
import * as Sentry from "@sentry/nextjs";
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
export default function SafetyPage() {
  // const {handleSubmit,formState} =useForm()
  // disabled={formState.isSubmitting}
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [input, setInput] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeInput = (key) => (event) => {
    setInput((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: { ...input },
        },
      });
      throw new Error("깅제로 ㅇ[러 발생 시키기!!");
      console.log(result);
      setIsSubmitting(false);
    } catch (error) {
      Sentry.captureEvent(error);
      alert(error.messagse);
    }
  };

  return (
    <>
      <div>
        작성자:
        <input type="text" onChange={onChangeInput("writer")} />
      </div>
      <div>
        비밀번호:
        <input type="text" onChange={onChangeInput("password")} />
      </div>
      <div>
        제목:
        <input type="text" onChange={onChangeInput("title")} />
      </div>
      <div>
        내용:
        <input type="text" onChange={onChangeInput("contents")} />
      </div>
      <button disabled={isSubmitting} onClick={onClickSubmit}>
        등록하기
      </button>
    </>
  );
}
