import styled from "@emotion/styled";

export const BoardCommentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  margin-bottom: 30px;
  border-top: 1px solid #bdbdbd;
`;
export const CommentTitle = styled.div`
  width: 100px;
  height: 30px;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
`;
export const CommentUpload = styled.div`
  width: 100%;
  margin-top: 40px;
`;
export const CommentUploadTop = styled.div`
  width: 100%;
`;

export const CommentUploadBottom = styled.div`
  width: 100%;
  height: 161px;
  margin-top: 20px;
  border: 1px solid lightgray;
  position: relative;
`;
export const CommentInput = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid gainsboro;
  background-color: black;
`;
export const UploadButton = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  color: #fff;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  :hover {
    color: #ffcc01;
  }
`;
//!=========== CommentList 댓글 하단 리스트 ===========//
export const CommentList = styled.div`
  margin-top: 50px;
  width: 100%;
`;
export const CommentListUp = styled.div`
  width: 100%;
  height: 130px;
  padding: 20px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
`;
export const CommentListLeft = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/WriterProfileImg.png");
  background-size: 100%;
  margin-right: 16px;
`;
export const CommentListRight = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const CommentListTop = styled.div`
  width: 100%;
`;
export const WriterName = styled.div`
  color: #000;
  font-weight: 600;
  font-size: 16px;
  line-height: 23.68px;
`;

export const CommentToEdit = styled.div`
  width: 50px;
`;
