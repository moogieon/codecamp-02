import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function BoardCommentList() {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    console.log("🙆‍♀️ 콘솔에 쿼리 찍힘!");
  }, [router.isReady]);
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query._id },
  });

  return <BoardCommentListUI data={data} />;
}
