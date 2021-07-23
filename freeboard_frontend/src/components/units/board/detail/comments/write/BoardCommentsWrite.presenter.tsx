import { Rate } from "antd";

import {
  Comments,
  Comments_in,
  Comments_init,
  Comments_init_writer,
  Comments_init_password,
  Comments_Button,
  Comments_Line,
  Comments_Button_Box,
} from "./BoardCommentsWrite.style";

interface IProps {
  onChangeStar: (value: number) => void;
  onChangeInputs: () => void;
  onClickSubmit: () => void;
}
export default function BoardCommentsWriteUI(props: IProps) {
  return (
    <>
      {/* ----------------------------------댓글 창--------------------------------------------- */}
      <Comments>
        <Comments_in>
          댓글 <Rate onChange={props.onChangeStar} />
          <div>이름</div>
          <Comments_init_writer
            name="writer"
            type="text"
            placeholder="이름"
            onChange={props.onChangeInputs}
          ></Comments_init_writer>
          <div>비밀번호</div>
          <Comments_init_password
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeInputs}
          ></Comments_init_password>
          <Comments_init
            name="contents"
            type="text"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeInputs}
          ></Comments_init>
          <Comments_Line></Comments_Line>
          <Comments_Button_Box>
            0/100
            <Comments_Button
              onClick={props.onClickSubmit}
              // onChange={props.onClickChange}
            >
              등록하기
            </Comments_Button>
          </Comments_Button_Box>
        </Comments_in>
      </Comments>
    </>
  );
}
