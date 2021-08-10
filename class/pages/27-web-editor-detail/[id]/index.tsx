import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import DOMPurify from "dompurify";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
export const Colum = styled.span`
  color: #c61313;
`;
export const Wrapper = styled.div`
  width: 500px;

  font-size: 27px;
`;
export const Contents = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid black;
  border-radius: 10%;
  padding-left: 20px;
`;

export default function WebEditorDetialPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id }, // 라우터로 불러 오기 위함
  });
  if (typeof window === "undefined") return <></>;
  return (
    <>
      <Wrapper>
        <div>웹 에디터 게시물 페이지 입니다</div>
        <br />
        작성자:<Colum>{data?.fetchBoard.writer}</Colum>
        <br />
        <br />
        제목:<Colum>{data?.fetchBoard.title}</Colum>
        <br />
        <br />
        내용
        <br />
        <Contents
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents),
          }}
        ></Contents>
      </Wrapper>
    </>
  );
}
