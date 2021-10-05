import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { getDate } from "../../../../../../commons/libraries/utils";
import { FETCH_USER_LOGGED_IN } from "../../../login/marketLogin.queries";

import UsedGoodsComments from "../write/usedgoodsCommentsWrite.container";

import CommentsReplay from "./commentsReply/commentsReply.container";
import CommentsReplyList from "./commentsReply/commentsReplyList/commentReplyList.container";

import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./usedgoodsCommentsList.queries";

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
  ReComments,
} from "./usedgoodsCommentsList.style";
import { IUsedGoodsCommentListUIItemProps } from "./usedgoodsCommentsList.types";

export default function UsedGoodsCommentsListUIItem(
  props: IUsedGoodsCommentListUIItemProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [showReplyInput, setShowReaplyInput] = useState(false);
  const { data: loggeddata } = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  function onClickUpdate() {
    setIsEdit(true);
  }

  async function onClickDelete() {
    try {
      await deleteUseditemQuestion({
        variables: { useditemQuestionId: props.data?._id },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.market_id },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }
  const onClickshowReplyInput = () => {
    if (showReplyInput === true) {
      setShowReaplyInput(false);
    } else if (showReplyInput === false) {
      setShowReaplyInput(true);
    }

    // setShowReaplyInput(false);
  };
  return (
    <>
      {!isEdit && (
        <ItemWrapper>
          <FlexWrapper>
            <Avatar src="/boards-image/avatar.png" />
            <MainWrapper>
              <WriterWrapper>
                <Writer>{props.data.user.name}</Writer>
              </WriterWrapper>
              <Contents>{props.data.contents}</Contents>
            </MainWrapper>
            <OptionWrapper>
              {props.data.user.name === loggeddata?.fetchUserLoggedIn.name ? (
                <UpdateIcon
                  onClick={onClickUpdate}
                  src="/boardComment-img/list/option_update_icon.png"
                />
              ) : (
                ""
              )}
              {props.data.user.name === loggeddata?.fetchUserLoggedIn.name ? (
                <DeleteIcon
                  onClick={onClickDelete}
                  src="/boardComment-img/list/option_delete_icon.png"
                />
              ) : (
                ""
              )}
            </OptionWrapper>
            <ReComments
              onClick={onClickshowReplyInput}
              src="/boardComment-img/list/Vector(12).png"
            />
          </FlexWrapper>

          <DateString>{getDate(props.data.createdAt)}</DateString>
          {showReplyInput && (
            <>
              <CommentsReplay
                data={props.data}
                // showReplyInput={showReplyInput}
              />
              <CommentsReplyList
                // showReplyInput={showReplyInput}
                data={props.data}
                loggeddata={loggeddata}
              />
            </>
          )}
        </ItemWrapper>
      )}
      {isEdit && (
        <UsedGoodsComments
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          data={props.data}
        />
      )}
    </>
  );
}
