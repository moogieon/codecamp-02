import styled from "@emotion/styled";
import { Checkbox } from "antd";

export const Wrapper = styled.div`
  height: 100%;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 240px;
  background-image: url("/market/login/blond_4.jpg");
  opacity: 70%;
`;

export const Body_Wraaper = styled.div`
  width: 384px;
  height: 510px;
  border: 1px solid black;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 70%;
`;

export const Head = styled.div`
  font-family: "bbb";
  color: white;
  font-size: 28px;
`;

export const Body = styled.div`
  margin-top: 10px;
  width: 384px;
  height: 400px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: ;
`;

export const Id = styled.input`
  height: 50px;
  border-radius: 16px;
  opacity: 70%;
  margin-bottom: 20px;
`;
export const Password = styled.input`
  height: 50px;
  border-radius: 16px;
  opacity: 70%;
  margin-bottom: 20px;
`;
export const CheckBox = styled(Checkbox)`
  color: white;
  font-size: 16px;
  font-family: bbb;
  margin-bottom: 20px;
`;
