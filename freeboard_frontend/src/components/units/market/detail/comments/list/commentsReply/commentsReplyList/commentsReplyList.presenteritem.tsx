import { useState } from "react";
// import CommentsReplyPage from "../commentsReply.presenter";
import { getDate } from "../../../../../../../../commons/libraries/utils";

import {
  Avatar,
  Contents,
  DateString,
  DeleteIcon,
  FlexWrapper,
  ItemWrapper,
  MainWrapper,
  WriterWrapper,
  OptionWrapper,
  UpdateIcon,
  Writer,
} from "./commentsReplyList.style";
import { useMutation } from "@apollo/client";
import { DELETE_USED_ITEM_QUESTION_ANSWER } from "./commentsReplyList.queries";
import CommentsReplay from "../commentsReply.container";
export default function CommentsReplyListItem(props: any) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );
  function onClickUpdate() {
    setIsEdit(true);
  }

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: { useditemQuestionAnswerId: props.ondata._id },
        update(cache, { data }) {
          const deletedId = data.deleteUseditemQuestionAnswer;
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev, { readField }) => {
                const newPrev = prev.filter((prevData: any) => {
                  return readField("_id", prevData) !== deletedId;
                });
                //
                console.log(newPrev);
                return [...newPrev];
              },
            },
          });
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  console.log("Item", props.ondata);
  return (
    <>
      {!isEdit && (
        <ItemWrapper>
          <FlexWrapper>
            <Avatar src="/boards-image/avatar.png" />
            <MainWrapper>
              <WriterWrapper>
                <Writer>{props.ondata?.user.name}</Writer>
              </WriterWrapper>
              <Contents>{props.ondata?.contents}</Contents>
            </MainWrapper>
            <OptionWrapper>
              {props.ondata?.user.name ===
              props.loggeddata?.fetchUserLoggedIn.name ? (
                <UpdateIcon
                  onClick={onClickUpdate}
                  src="/boardComment-img/list/option_update_icon.png/"
                />
              ) : (
                ""
              )}
              {props.ondata?.user.name ===
              props.loggeddata?.fetchUserLoggedIn.name ? (
                <DeleteIcon
                  onClick={onClickDelete}
                  src="/boardComment-img/list/option_delete_icon.png/"
                />
              ) : (
                ""
              )}
            </OptionWrapper>
          </FlexWrapper>

          <DateString>{getDate(props.ondata.createdAt)}</DateString>
        </ItemWrapper>
      )}
      {isEdit && (
        <CommentsReplay
          ondata={props.ondata}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  );
}
