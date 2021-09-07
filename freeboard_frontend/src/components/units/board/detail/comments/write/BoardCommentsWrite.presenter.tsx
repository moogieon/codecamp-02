import { Rate } from "antd";
import { ChangeEvent } from "react";

import {
  Wrapper,
  Comments,
  Comments_in,
  Comments_init,
  Comments_init_writer,
  Comments_init_password,
  Comments_Button,
  Comments_Line,
  Comments_Button_Box,
  Warring,
} from "./BoardCommentsWrite.style";

interface IProps {
  onChangeStar: (value: number) => void;
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;

  comments_error: any;

  inputs_comment: {
    writer: string;
    password: string;
    contents: string;
    rating: number;
  };
  onClickSubmit: () => void;

  isEdit: boolean;
  data: any;
}
export default function BoardCommentsWriteUI(props: IProps) {
  return (
    <>
      {/* ----------------------------------댓글 창--------------------------------------------- */}
      <Wrapper>
        <Comments>
          <Comments_in>
            {!props.isEdit && (
              <>
                {/* <EditComments /> */}
                <span>댓글</span>
              </>
            )}
            <Rate onChange={props.onChangeStar} />
            <div>이름</div>
            <Warring>{props.comments_error.writer}</Warring>

            <Comments_init_writer
              name="writer"
              type="text"
              value={props.inputs_comment.writer || props.data?.writer || ""}
              placeholder="이름"
              onChange={props.onChangeInputs}
            ></Comments_init_writer>
            <div>비밀번호</div>
            <Warring>{props.comments_error.password}</Warring>
            <Comments_init_password
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangeInputs}
            ></Comments_init_password>
            <div>내용</div>
            <Warring>{props.comments_error.contents}</Warring>
            <Comments_init
              name="contents"
              type="text"
              value={props.inputs_comment.contents || props.data?.contents}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.onChangeInputs}
            ></Comments_init>
            <Comments_Line></Comments_Line>
            <Comments_Button_Box>
              0/100
              <Comments_Button
                id={props.data?._id}
                onClick={props.onClickSubmit}
                // onChange={props.onClickChange}
              >
                등록하기
              </Comments_Button>
            </Comments_Button_Box>
          </Comments_in>
        </Comments>
      </Wrapper>
    </>
  );
}
