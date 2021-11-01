import {
  Wrapper,
  Icon1,
  Body,
  Content,
  Boddy_Foot,
  UploadButton,
} from "./commentsReply.style";

export default function CommentsReplyUI(props: any) {
  return (
    <>
      <>
        <Wrapper>
          <Icon1 src={"/boardComment-img/list/Vector(13).png"} />
          <Body>
            <Content
              name={"contents"}
              placeholder={"답글을 등록 주세요"}
              defaultValue={props.contents || props.ondata?.contents}
              onChange={props.onChangeContents}
            />
            <Boddy_Foot>
              <UploadButton
                onClick={
                  props.isEdit ? props.onClickUpdateReply : props.onClickSubmit
                }
              >
                {props.isEdit ? "수정하기" : "등록하기"}
              </UploadButton>
            </Boddy_Foot>
          </Body>
        </Wrapper>
      </>
    </>
  );
}
