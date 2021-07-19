import styled from "@emotion/styled/";

export const Wrapper = styled.div`
  width: 1200px;
  margin-left: 80px;
  border: 1px solid black;
`;
export const Profile_Img = styled.img`
  width: 40px;
  height: 40px;
`;
export const Wrapper_Head = styled.div`
  width: 100%;
  height: 111px;
  display: flex;
  margin-bottom: 20px;
  background-color: orange;

  border-radius: 15px;
`;
export const CommentList = styled.div`
  height: 111px;
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
`;
export const Comment_Writer = styled.div`
  font-size: 16px;
  width: 70%;
`;
export const Comment_Date = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;
export const Comment_Contents = styled.div`
  font-size: 16px;
  color: #4f4f4f;
`;
export const Remove = styled.button`
  width: 91px;
  height: 51px;
`;
export const Delete = styled.button`
  width: 91px;
  height: 51px;
`;
