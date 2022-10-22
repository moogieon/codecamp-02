import { request } from "graphql-request";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BoardDetail from "../../../../src/components/units/board/detail/BoardDetail.container";
import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.queries";

import BoardCommentList from "../../../../src/components/units/board/detail/comments/list/BoardCommentList.container";
import BoardCommentsWrite from "../../../../src/components/units/board/detail/comments/write/BoardCommentsWrite.container";
export default function DetailPage() {
  // aaa 라도 [aaa] 를 넣으면  Router.push('/detail/1') 해도 1란 숫자를 aaa로 연다는  뜻

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    console.log("🙆‍♀️ 콘솔에 쿼리 찍힘!");
  }, [router.isReady]);
  return (
    <>
      <BoardDetail />
      <BoardCommentsWrite />
      <BoardCommentList />
    </>
  );
}

export async function getServerSideProps(context) {
  const result = await request(
    "https://backend08.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    { boardId: context?.query?._id }
  );
  return {
    props: {
      fetchBoard: result,
    },
  };
}
