import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_USED_ITEM_QUESTION_ANSWER } from "./commentsReply.queries";
import {
  Wrapper,
  Icon1,
  Body,
  Content,
  Boddy_Foot,
  UploadButton,
} from "./commentsReply.style";
import CommentsReplyList from "./commentsReplyList/commentsReplyList.presenteritem";

export default function CommentsReplyUI(props) {
  return (
    <>
      {props.showReplyInput && (
        <>
          <CommentsReplyList data={props.data} />
          <Wrapper>
            <Icon1 src={"/boardComment/list/Vector (13).png"} />
            <Body>
              <Content
                name={"contents"}
                placeholder={"답글을 등록 주세요"}
                onChange={props.onChangeContents}
              />
              <Boddy_Foot>
                <UploadButton onClick={props.onClickSubmit}>
                  답글등록
                </UploadButton>
              </Boddy_Foot>
            </Body>
          </Wrapper>
          {/* {isEdit && (
            <CommentsReplyPage
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              data={props.data}
            />
          )} */}
        </>
      )}
    </>
  );
}
