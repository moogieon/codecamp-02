import {
  Wrapper,
  Wrapper_Head,
  Wrapper_Body,
  Wrapper_Foot,
  Img,
  Img_2,
  Img_3,
  Img_4,
  Head_Wrapper,
  Writer,
  Day,
  Line,
  Body_Title,
  Body_Img,
  Body_Contents,
  Foot_Ytv,
  Youtube,
  Foot_Count,
  Foot_Btn,
  Like,
  Dislkie,
  Like_count,
  DisLike_count,
  Foot,
  List_Button,
  Fix_Button,
  Delete_Button,
  Comments,
  Comments_in,
  Comments_init,
  Comments_Button,
  Comments_Line,
  Comments_Button_Box,
} from "./BoardDetail.style";

export default function BoardDetailUI(props) {
  return (
    <>
      <Wrapper>
        <Wrapper_Head>
          <Img src="/boards-image/Profile.png" />
          <Head_Wrapper>
            <Writer>{props.onData?.fetchBoard.writer}</Writer>
            <Day>
              Date:
              {new Date(props.onData?.fetchBoard.createdAt).getFullYear()}/
              {String(
                new Date(props.onData?.fetchBoard.createdAt).getMonth() + 1
              ).padStart(2, "0")}
              /{new Date(props.onData?.fetchBoard.createdAt).getDate()}
            </Day>
          </Head_Wrapper>
          <Img_2 src="/boards-image/File.png" />
          <Img_3>
            {" "}
            <Img_4 src="/boards-image/Loc2.png" />
          </Img_3>
        </Wrapper_Head>
        <Line></Line>
        <Wrapper_Body>
          <Body_Title>{props.onData?.fetchBoard.title}</Body_Title>
          <Body_Img>img</Body_Img>
          <Body_Contents>{props.onData?.fetchBoard.contents}</Body_Contents>
        </Wrapper_Body>
        <Wrapper_Foot>
          <Foot_Ytv>
            <Youtube src={props.onata?.fetchBoard.youtubeUrl}></Youtube>
          </Foot_Ytv>

          <Foot_Btn>
            <Like />
            {/* //onClick={likeCount} */}
            <Dislkie />
            {/* // onClick={likeCount_2} */}
          </Foot_Btn>
          <Foot_Count>
            <Like_count></Like_count>
            {/* {count} */}
            <DisLike_count></DisLike_count>
          </Foot_Count>
        </Wrapper_Foot>
      </Wrapper>
      <Foot>
        <List_Button onClick={props.onClickMove}>목록으로</List_Button>
        <Fix_Button onClick={props.onClickEdit}>수정하기</Fix_Button>
        <Delete_Button onClick={props.onClickDelete}>삭제하기</Delete_Button>
      </Foot>
      <Comments_Line></Comments_Line>

      <Comments>
        <Comments_in>
          댓글
          <Comments_init
            name="rating"
            placeholder="rating"
            onChange={props.onChangeInputs}
          ></Comments_init>
          <Comments_init
            name="contents"
            type="text"
            onChange={props.onChangeInputs}
          ></Comments_init>
          <Comments_Line></Comments_Line>
          <Comments_Button_Box>
            0/100
            <Comments_Button onClick={props.onClickSubmit}>
              등록하기
            </Comments_Button>
          </Comments_Button_Box>
        </Comments_in>
      </Comments>
    </>
  );
}
