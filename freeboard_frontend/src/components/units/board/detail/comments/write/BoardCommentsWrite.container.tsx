import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { BOARD_COMMENT } from "./BoardCommentsWrite.queries";
import BoardDetailUI from "./BoardCommentsWrite.presenter";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
export const INPUT_COMMENT = {
  writer: "",
  password: "",
  contents: "",
  rating: 0,
};

export default function BoardCommentsWrite() {
  const router = useRouter();
  console.log(router);
  // console.log(router.query.aaa ) //질문 ,
  const [inputs_comment, setInputs_Comment] = useState(INPUT_COMMENT);

  const [createBoardComment] = useMutation(BOARD_COMMENT);

  function onChangeInputs(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputs_Comment({
      ...inputs_comment,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name);
  }
  // console.log(data);
  function onChangeStar(value: number) {
    setInputs_Comment({ ...inputs_comment, rating: value });
  }
  async function onClickSubmit() {
    try {
      await createBoardComment({
        variables: {
          boardId: router.query._id,
          createBoardCommentInput: { ...inputs_comment },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query._id },
          },
        ],
      });
      alert("등록 완료");
    } catch (error) {}

    // console.log(data);

    // function onClickChange() {}
    // router.push(`/board/detail/${result.data?.createBoard._id}`);
  }

  // ts 에서만 가능한 number js에서는 ?

  return (
    <BoardDetailUI
      inputs_comment={inputs_comment}
      onChangeStar={onChangeStar}
      onClickSubmit={onClickSubmit}
      onChangeInputs={onChangeInputs}

      // onClickChange={onClickChange}
    />
  );
}
