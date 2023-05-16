import {
  Wrapper,
  Body,
  Wrapper_Head,
  Wrapper_Body,
  Board_Num,
  Board_Title,
  Board_Writer,
  Board_Date,
  Column_Title,
  Column_Num,
  Column_Writer,
  Column_Date,
  Footer,
  Button,
  Penimg,
  Write,
  Word,
} from "./BoardList.style";
import Paginations01 from "../../../commons/paginations/Paginations.container";
import Searchbars01 from "../../../commons/searchbars/Searchbars01.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUi(props: any) {
  return (
    <>
      <Wrapper>
        {props.onData?.fetchBoards.length ? (
          <>
            <Body>
              <Searchbars01
                refetch={props.refetch}
                onChangeKeyword={props.onChangeKeyword}
              />
              <Wrapper_Head>
                <Board_Num>번호</Board_Num>
                <Board_Title>제목</Board_Title>
                <Board_Writer>작성자</Board_Writer>
                <Board_Date>날짜</Board_Date>
              </Wrapper_Head>
              {props.onData?.fetchBoards.map((data: any, index: any) => (
                <Wrapper_Body
                  key={data._id}
                  onClick={props.onClickMoveToBoardDetail(data._id)}
                >
                  <Column_Num>{index + 1}</Column_Num>
                  <Column_Title id={data._id}>
                    {data.title
                      .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                      .split("@#$%")

                      .map((data: string) => (
                        <Word key={uuidv4()} isMatched={props.keyword === data}>
                          {data}
                        </Word>
                      ))}
                  </Column_Title>
                  <Column_Writer>{data.writer}</Column_Writer>
                  <Column_Date>
                    {new Date(data.createdAt)
                      .getFullYear()
                      .toString()
                      .substring(2, 4)}
                    -
                    {String(new Date(data.createdAt).getMonth() + 1).padStart(
                      2,
                      "0"
                    )}
                    -
                    {new Date(data.createdAt)
                      .getDate()
                      .toString()
                      .padStart(2, "0")}
                  </Column_Date>
                </Wrapper_Body>
              ))}
            </Body>
          </>
        ) : (
          <Body>게시물이 없습니다.</Body>
        )}
        <Footer>
          {props.onData?.fetchBoards.length && (
            <Paginations01
              count={props.dataBoardsCount?.fetchBoardsCount}
              startPage={props.startPage}
              setStartPage={props.setStartPage}
              refetch={props.refetch}
            />
          )}

          <Button onClick={props.onClickMoveToBoardNew}>
            <Write>게시물 작성</Write>
            <Penimg src="/boards-image/pen.png" />
          </Button>
        </Footer>
      </Wrapper>
    </>
  );
}
