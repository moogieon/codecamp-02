import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
const Column = styled.span`
  margin: 0px 50px;
  text-align: center;
`;
const Wrapper = styled.div`
  height: 500px;
  overflow: auto;
  border: 1px solid red;
`;
const Column2 = styled.span`
  margin: 0px 50px;
  font-size: 20px;
  color: #326800;
`;

export default function InfiniteScrollerPage() {
  //   console.log(data?.fetchBoards);
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery(FETCH_BOARDS); // fetchMore 추가적으로 더 패치를 할때 refetch 보다 많은 양

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.floor(data?.fetchBoards.length) / 10 + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        // cache 수정이랑 비슷함  , prev하면 기존에 있던 cache전체 , fetchMoreResult(매게변수) 2페이지
        if (!fetchMoreResult.fetchBoards.length) setHasMore(false);
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
        // 기존에 배열 10개가 있었을 것 , 배열이니깐 스프레드 시켜서 객체로, 20개짜리(기존 10,새로운 10) 배열로 만들어줌
      },
    });
  };
  return (
    <>
      <Wrapper>
        <div>무한스크롤!</div>
        <Column2>작성자</Column2>
        <Column2>제목</Column2>
        <Column2>내용</Column2>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={hasMore}
          useWindow={false}
          loader={
            <div className="loader" key={0}>
              Winter is Comming ...
            </div>
          }
        >
          {data?.fetchBoards.map((data) => (
            <div key={data._id}>
              <Column>{data.writer}</Column>
              <Column>{data.title}</Column>
              <Column>{data.contents}</Column>
            </div>
          ))}
        </InfiniteScroll>
      </Wrapper>
    </>
  );
}
