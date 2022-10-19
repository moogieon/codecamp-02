import { Tooltip } from "antd";
import ReactPlayer from "react-player";
import {
  Wrapper,
  Body,
  Wrapper_Head,
  Wrapper_Body,
  Wrapper_Foot,
  Img,
  Img_2,
  Img_3,
  Img_4,
  Head_Wrapper,
  Header_1,
  Icon_Wrapper,
  Writer,
  Day,
  Line,
  Body_Title,
  Body_Img,
  Body_Contents,
  Foot_Ytv,
  Count_Wrpper,
  Foot_Count,
  Foot_Btn,
  Like,
  Dislkie,
  Like_count,
  DisLike_count,
  Foot,
  Btn_words,
  List_Button,
  Fix_Button,
  Delete_Button,
  Comments_Line,
} from "./BoardDetail.style";

interface IProps {
  data: any;
  onClickLike: () => void;
  onClickDislike: () => void;
  onClickMove: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
}
export default function BoardDetailUI(props: IProps) {
  return (
    <>
      <Wrapper>
        <Body>
          <Wrapper_Head>
            <Head_Wrapper>
              <Header_1>
                <Img src="/boards-image/Profile.png" />
                <Writer>{props.data?.fetchBoard.writer}</Writer>
              </Header_1>

              <Day>
                Date:
                {new Date(props.data?.fetchBoard.createdAt).getFullYear()}/
                {String(
                  new Date(props.data?.fetchBoard.createdAt).getMonth() + 1
                ).padStart(2, "0")}
                /{new Date(props.data?.fetchBoard.createdAt).getDate()}
              </Day>
            </Head_Wrapper>
            <Icon_Wrapper>
              <Img_2 src="/boards-image/File.png" />
              <Tooltip
                placement="topRight"
                title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
              >
                <Img_3>
                  <Img_4 src="/boards-image/Loc2.png" />
                </Img_3>
              </Tooltip>
            </Icon_Wrapper>
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
                height="100%"
                width="100%"
                controls={true}
                muted={true}
                playing={true}
              />
            </Foot_Ytv>
            <Count_Wrpper>
              <Foot_Btn>
                <Like onClick={props.onClickLike} />
                <Like_count>{props.data?.fetchBoard.likeCount}</Like_count>
              </Foot_Btn>
              <Foot_Count>
                <Dislkie onClick={props.onClickDislike} />
                <DisLike_count>
                  {props.data?.fetchBoard.dislikeCount}
                </DisLike_count>
              </Foot_Count>
            </Count_Wrpper>
          </Wrapper_Foot>

          <Foot>
            <List_Button onClick={props.onClickMove}>
              목록<Btn_words>으로</Btn_words>
            </List_Button>
            <Fix_Button onClick={props.onClickEdit}>
              수정<Btn_words>하기</Btn_words>
            </Fix_Button>
            <Delete_Button onClick={props.onClickDelete}>
              삭제<Btn_words>하기</Btn_words>
            </Delete_Button>
          </Foot>
        </Body>
        <Comments_Line></Comments_Line>
      </Wrapper>
      {/* ----------------------------------댓글 창-------------------------------------------- */}
    </>
  );
}
