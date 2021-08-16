import {
  BoardCommentWrapper,
  CommentTitle,
  CommentUpload,
  CommentUploadTop,
  CommentUploadBottom,
  CommentInput,
  UploadButton,
} from "./usedgoodsCommentsWrite.style";

export default function UsedGoodsCommentsUI(props) {
  return (
    <>
      <BoardCommentWrapper>
        <CommentTitle>댓글</CommentTitle>
        <CommentUpload>
          <CommentUploadTop></CommentUploadTop>
          {/* //!----- 댓글 입력 및 등록 창 ------ */}
          <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
            <CommentUploadBottom>
              <CommentInput
                {...props.register("contents")}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              />

              <UploadButton type="submit">등록하기</UploadButton>
            </CommentUploadBottom>
          </form>
        </CommentUpload>
      </BoardCommentWrapper>
    </>
  );
}
