import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { getDate } from "../../../../../../commons/libraries/utils";
import BoardCommentWrite from "../write/BoardCommentsWrite.container";
import {
  DELETE_COMMENTS,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import {
  Wrapper,
  Body,
  Wrapper_Head,
  Profile_Img,
  CommentList,
  Comment_Writer,
  Star,
  Comment_Contents,
  Comment_Date,
  Remove,
  Delete,
  PasswordInput,
} from "./BoardCommentList.style";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");
  const [deleteBoardComment] = useMutation(DELETE_COMMENTS);
  function onCKilckUpDate() {
    setIsEdit(true);
  }
  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true);
  }
  function handleCancel() {
    setIsOpenDeleteModal(false);
  }
  async function onClickDelete() {
    try {
      await deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: props.data?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query._id },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  function onChangeDeletePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <>
      {isOpenDeleteModal && (
        <Modal
          visible={isOpenDeleteModal}
          onOk={onClickDelete}
          onCancel={handleCancel}
        >
          <div>비밀번호 입력: </div>
          <PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <Wrapper>
          <Body>
            <Wrapper_Head key={props.data._id}>
              {" "}
              <Profile_Img src="/boards-image/Profile.png" />
              <CommentList>
                <Comment_Writer>작성자:{props.data.writer}</Comment_Writer>
                <Star value={props.data.rating} disabled></Star>
                <Comment_Contents>{props.data.contents}</Comment_Contents>
                <Comment_Date>{getDate(props.data.createdAt)}</Comment_Date>
              </CommentList>
              <Remove onClick={onCKilckUpDate}>수정하기</Remove>
              <Delete id={props.data._id} onClick={onClickOpenDeleteModal}>
                지우기
              </Delete>
            </Wrapper_Head>
          </Body>
        </Wrapper>
      )}
      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          data={props.data}
        />
      )}
    </>
  );
}
