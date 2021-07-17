import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  // console.log(router.query.aaa )
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardID: router.query.boardId },
  });
  // const { data: aaa } = useQuery(   //데이터 겹치면 안대서 이름을 바꿔서 사용
  //     FETCH_BOARD_COMMENTS,
  //     {variables: { boardID: router.query.boardId} }

  // )
  function onClickEdit() {
    router.push(`/detail/${router.query.boardId}/edit`);
  }
  return (
    <BoardDetailUI
      qqq={data}
      // aaa={aaa}
      onClickEdit={onClickEdit}
    />
  );
}
