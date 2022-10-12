import styled from "@emotion/styled";
import { Rate } from "antd";

export const Body = styled.div`
  width: 100%;
  padding: 0px 2.5rem;
`;

export const Wrapper = styled.div`
  padding-top: 50px;
  width: 100%;
  margin: 0px auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Profile_Img = styled.img`
  width: 40px;
  height: 40px;
`;
export const Wrapper_Head = styled.div`
  width: 100%;
  min-height: 111px;
  display: flex;
  margin-bottom: 20px;
  padding: 5px 10px;
  border: 1px solid white;
  border-radius: 15px;
  position: relative;
`;
export const CommentList = styled.div`
  height: 100%;
  width: 100%;
  padding: 5px 10px;
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
export const Star = styled(Rate)``;
export const Comment_Date = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;
export const Comment_Contents = styled.div`
  font-size: 16px;
  color: #4f4f4f;
  word-break: break-all;
`;
export const Remove = styled.button`
  width: 91px;
  height: 51px;
`;
export const Delete = styled.button`
  height: 51px;
  background-color: black;
  position: absolute;
  top: 0px;
  right: 10px;
`;
export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
