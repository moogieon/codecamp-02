import { useState } from "react";
import CommentsReplyPage from "../commentsReply.container";
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
  ReComments,
} from "./commentsReplyList.style";
export default function CommentsReplyListItem(props) {
  console.log("Item", props.ondata);
  return (
    <>
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
                // onClick={onClickUpdate}
                src="/boardComment/list/option_update_icon.png/"
              />
            ) : (
              ""
            )}
            {props.ondata?.user.name ===
            props.loggeddata?.fetchUserLoggedIn.name ? (
              <DeleteIcon
                // onClick={onClickDelete}
                src="/boardComment/list/option_delete_icon.png/"
              />
            ) : (
              ""
            )}
          </OptionWrapper>
        </FlexWrapper>

        {/* <DateString>{getDate(props.data.createdAt)}</DateString> */}
      </ItemWrapper>
    </>
  );
}
