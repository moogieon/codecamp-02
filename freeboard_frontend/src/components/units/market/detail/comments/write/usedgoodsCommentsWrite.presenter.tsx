import {
  BoardCommentWrapper,
  CommentTitle,
  CommentUpload,
  CommentUploadTop,
  CommentUploadBottom,
  CommentInput,
  UploadButton,
  Avatar,
  MainWrapper,
  WriterWrapper,
  Writer,
} from "./usedgoodsCommentsWrite.style";

export default function UsedGoodsCommentsUI(props) {
  return (
    <>
      <BoardCommentWrapper>
        {!props.isEdit && (
          <>
            <CommentTitle>댓글</CommentTitle>
          </>
        )}

        <CommentUpload>
          {props.isEdit && (
            <CommentUploadTop>
              <Avatar src="/boards-image/avatar.png" />
              <MainWrapper>
                <WriterWrapper>
                  <Writer>{props.data?.user.name}</Writer>
                </WriterWrapper>
              </MainWrapper>
            </CommentUploadTop>
          )}
          {/* //!----- 댓글 입력 및 등록 창 ------ */}
          <form
            onSubmit={
              props.isEdit
                ? props.handleSubmit(props.onClickUpdate)
                : props.handleSubmit(props.onClickSubmit)
            }
          >
            <CommentUploadBottom>
              <CommentInput
                // value={props.data?.contents}
                // value={props.register("contents") || props.data?.contents}
                {...props.register("contents")}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              />

              <UploadButton type="submit">
                {props.isEdit ? "수정하기" : "등록하기"}
              </UploadButton>
            </CommentUploadBottom>
          </form>
        </CommentUpload>
      </BoardCommentWrapper>
    </>
  );
}
