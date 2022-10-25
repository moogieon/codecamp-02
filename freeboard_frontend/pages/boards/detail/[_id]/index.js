import { request } from "graphql-request";
import { useRouter } from "next/router";

import { Loader } from "semantic-ui-react";
import BoardDetail from "../../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../../src/components/units/board/detail/comments/list/BoardCommentList.container";
import BoardCommentsWrite from "../../../../src/components/units/board/detail/comments/write/BoardCommentsWrite.container";
import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.queries";
import { FETCH_BOARDS } from "../../../../src/components/units/board/list/BoardList.queries";
export default function DetailPage({ fetchBoard }) {
  // aaa 라도 [aaa] 를 넣으면  Router.push('/detail/1') 해도 1란 숫자를 aaa로 연다는  뜻

  const router = useRouter();

  if (router.isFallback) {
    return (
      <div>
        <Loader active inline="centered">
          로딩중...
        </Loader>
      </div>
    );
  }
  return (
    <>
      <BoardDetail fetchBoard={fetchBoard} />
      <BoardCommentsWrite />
      <BoardCommentList />
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await request(
    "https://backend08.codebootcamp.co.kr/graphql",
    FETCH_BOARDS
  );
  console.log("list", data);
  return {
    paths: data?.fetchBoards.map((item) => ({
      params: {
        _id: item._id.toString(),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const data = await request(
    "https://backend08.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    { boardId: context.params._id }
  );
  return { props: { fetchBoard: data.fetchBoard } };
};
