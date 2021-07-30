import { Tooltip } from "antd";
import ReactPlayer from "react-player";
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
  Comments_Line,
} from "./BoardDetail.style";

interface IProps {
  onChangeStar: (value: number) => void;
  data: any;
}
export default function BoardDetailUI(props: IProps) {
  return (
    <>
      <Wrapper>
        <Wrapper_Head>
          <Img src="/boards-image/Profile.png" />
          <Head_Wrapper>
            <Writer>{props.data?.fetchBoard.writer}</Writer>
            <Day>
              Date:
              {new Date(props.data?.fetchBoard.createdAt).getFullYear()}/
              {String(
                new Date(props.data?.fetchBoard.createdAt).getMonth() + 1
              ).padStart(2, "0")}
              /{new Date(props.data?.fetchBoard.createdAt).getDate()}
            </Day>
          </Head_Wrapper>

          <Img_2 src="/boards-image/File.png" />
          <Img_3>
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <Img_4 src="/boards-image/Loc2.png" />
            </Tooltip>
          </Img_3>
        </Wrapper_Head>
        <Line></Line>
        <Wrapper_Body>
          <Body_Title>{props.data?.fetchBoard.title}</Body_Title>
          {props.data?.fetchBoard.images?.map((data: string) => (
            <Body_Img
              key={data}
              src={`https://storage.googleapis.com/${data}`}
            />
          ))}

          <Body_Contents>{props.data?.fetchBoard.contents}</Body_Contents>
        </Wrapper_Body>
        <Wrapper_Foot>
          <Foot_Ytv>
            <ReactPlayer
              url={props.data?.fetchBoard.youtubeUrl}
              width="489px"
              height="240px"
              controls={true}
              muted={true}
              playing={true}
            />
          </Foot_Ytv>

          <Foot_Btn>
            <Like onClick={props.onClickLike} />

            <Dislkie onClick={props.onClickDislike} />
          </Foot_Btn>
          <Foot_Count>
            <Like_count>{props.data?.fetchBoard.likeCount}</Like_count>

            <DisLike_count>{props.data?.fetchBoard.dislikeCount}</DisLike_count>
          </Foot_Count>
        </Wrapper_Foot>
      </Wrapper>
      <Foot>
        <List_Button onClick={props.onClickMove}>목록으로</List_Button>
        <Fix_Button onClick={props.onClickEdit}>수정하기</Fix_Button>
        <Delete_Button onClick={props.onClickDelete}>삭제하기</Delete_Button>
      </Foot>
      <Comments_Line></Comments_Line>
      {/* ----------------------------------댓글 창--------------------------------------------- */}
    </>
  );
}
