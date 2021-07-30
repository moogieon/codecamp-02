import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;
const Column = styled.span`
  padding: 0px 50px;
`;
const Page = styled.span`
  padding: 0px 20px;
  cursor: pointer;
`;
interface IProps {
  isMatched: boolean;
}
const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [keyword, setKeyWord] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS); //

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }
  function onClickSearch() {
    refetch({ search: search });
    setKeyWord(search);
  }
  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    refetch({ search: search, page: Number((event.target as Element).id) });
  }

  return (
    <>
      <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <Column>{data.writer}</Column>
          <Column>
            {data.title
              .replaceAll(keyword, `@#$%${keyword}@#$%`)
              .split("@#$%")
              .map((data, index) => (
                <Word key={index} isMatched={keyword === data}>
                  {data}
                </Word>
              ))}
          </Column>
          <Column>{data.createdAt}</Column>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <Page key={index} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
