import { useRouter } from "next/router";
import { useState } from "react";

import UsedGoodsComments from "../write/usedgoodsCommentsWrite.container";

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
} from "./usedgoodsCommentsList.style";
import { IUsedGoodsCommentListUIItemProps } from "./usedgoodsCommentsList.types";

export default function UsedGoodsCommentsListUIItem(
  props: IUsedGoodsCommentListUIItemProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  //   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  //   const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  //   function onClickUpdate() {
  //     setIsEdit(true);
  //   }

  //   function onClickOpenDeleteModal() {
  //     setIsOpenDeleteModal(true);
  //   }

  //   async function onClickDelete() {
  //     try {
  //       await deleteBoardComment({
  //         variables: {
  //           password: password,
  //           boardCommentId: props.data?._id,
  //         },
  //         refetchQueries: [
  //           {
  //             query: FETCH_BOARD_COMMENTS,
  //             variables: { boardId: router.query.boardId },
  //           },
  //         ],
  //       });
  //     } catch (error) {
  //       Modal.error({ content: error.message });
  //     }
  //   }

  return (
    <>
      {/* {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )} */}
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
              <UpdateIcon
                src="/boardComment/list/option_update_icon.png/"
                // onClick={onClickUpdate}
              />
              <DeleteIcon
                src="/boardComment/list/option_delete_icon.png/"
                // onClick={onClickOpenDeleteModal}
              />
            </OptionWrapper>
          </FlexWrapper>
          <DateString></DateString>
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
