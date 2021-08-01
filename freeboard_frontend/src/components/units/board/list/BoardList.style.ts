import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 19200px
  padding-bottom: 405px;
`;
export const Body = styled.div`
  width: 1200px;
  height: 662px;
  padding-left: 50px;
  padding-top: 50px;
`;
export const Wrapper_Head = styled.div`
  height: 52px;
  line-height: 60px;
  border-bottom: 1px solid black;
  display: flex;
`;

export const Board_Num = styled.div`
  width: 10%;
  height: 20px;
  font-size: 18px;
  background-color: orange;
  opacity: 0.8;
  padding-left: 40px;
`;
export const Board_Title = styled.div`
  width: 70%;
  height: 20px;
  font-size: 18px;
  opacity: 0.8;
  background-color: darkorange;
  text-align: center;
`;
export const Board_Writer = styled.div`
  width: 18%;
  height: 20px;
  font-size: 18px;
  opacity: 0.8;
  background-color: orange;
`;
export const Board_Date = styled.div`
  width: 10%;
  height: 20px;
  font-size: 18px;
  opacity: 0.8;
  background-color: darkorange;
`;
export const Wrapper_Body = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const Column_Num = styled.div`
  width: 10%;
  font-size: 16px;
  color: #4f4f4f;
  padding-left: 48px;
`;
export const Column_Title = styled.div`
  width: 70%;
  font-size: 16px;
  text-align: center;
  color: #4f4f4f;
  cursor: pointer;
  :hover {
    background-color: #ff920594;
  }
`;
export const Column_Writer = styled.div`
  width: 18%;
  font-size: 16px;
  color: #4f4f4f;
`;

export const Column_Date = styled.div`
  width: 10%;
  font-size: 16px;

  color: #4f4f4f;
`;
export const Footer = styled.div`
  width: 1200px;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export const Button = styled.button`
  width: 171px;
  height: 52px;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid whitesmoke;
  background-color: #f2f2f2;
  :hover {
    background-color: orange;
  }
`;
export const Penimg = styled.img`
  width: 15px;
  height: 15px;
`;
