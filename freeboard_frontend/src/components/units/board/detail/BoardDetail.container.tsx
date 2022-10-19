import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import { useEffect } from "react";

export default function BoardDetail() {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    console.log("🙆‍♀️ 콘솔에 쿼리 찍힘!");
  }, [router.isReady]);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router?.query?._id },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  function onClickLike() {
    likeBoard({
      variables: { boardId: router?.query?._id },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router?.query?._id } },
      ],
    });
  }

  function onClickDislike() {
    dislikeBoard({
      variables: { boardId: router.query._id },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query._id } },
      ],
    });
  }

  async function onClickDelete() {
    try {
      await deleteBoard({ variables: { boardId: router.query._id } });
      alert("삭제 완료");
      router.push("/boards");
    } catch (error) {
      alert("오류");
    }
    console.log(data);
  }
  function onClickEdit() {
    router.push(`/boards/detail/${router.query._id}/edit`);
  }

  function onClickMove() {
    router.push("/boards");
  }

  // ts 에서만 가능한 number js에서는 ?

  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMove={onClickMove}
      onClickEdit={onClickEdit}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      // onClickChange={onClickChange}
    />
  );
}
