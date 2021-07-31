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
} from "./BoardList.style";
import Paginations01 from "../../../commons/paginations/Paginations.container";
interface IProps {}

export default function BoardListUi(props: IProps) {
  return (
    <>
      <Wrapper>
        <Body>
          <Wrapper_Head>
            <Board_Num>번호</Board_Num>
            <Board_Title>제목</Board_Title>
            <Board_Writer>작성자</Board_Writer>
            <Board_Date>날짜</Board_Date>
          </Wrapper_Head>
          {props.onData?.fetchBoards.map((data, index) => (
            <Wrapper_Body key={data._id}>
              <Column_Num>{10 - index}</Column_Num>
              <Column_Title
                id={data._id}
                onClick={props.onClickMoveToBoardDetail}
              >
                {data.title}
              </Column_Title>
              <Column_Writer>{data.writer}</Column_Writer>
              <Column_Date>
                {new Date(data.createdAt).getFullYear()}-
                {String(new Date(data.createdAt).getMonth() + 1).padStart(
                  2,
                  "0"
                )}
                -{new Date(data.createdAt).getDate()}
              </Column_Date>
            </Wrapper_Body>
          ))}
        </Body>
        <Footer>
          <Paginations01
            count={props.dataBoardsCount?.fetchBoardsCount}
            startPage={props.startPage}
            setStartPage={props.setStartPage}
          />
          <Button onClick={props.onClickMoveToBoardNew}>
            <Penimg src="/boards-image/pen.png" /> 게시물 등록하기
          </Button>
        </Footer>
      </Wrapper>
    </>
  );
}
