import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;
export const Body = styled.div`
  width: 1200px;
  height: 662px;
  padding-left: 50px;
  padding-top: 50px;
  color: white;
`;
export const Wrapper_Head = styled.div`
  height: 52px;
  line-height: 60px;
  border-bottom: 1px solid black;
  display: flex;
  color: white;
`;

export const Board_Num = styled.div`
  width: 10%;
  height: 20px;
  font-size: 18px;

  opacity: 0.8;
  padding-left: 40px;
  color: white;
`;
export const Board_Title = styled.div`
  width: 70%;
  height: 20px;
  font-size: 18px;
  opacity: 0.8;

  text-align: center;
  color: white;
`;
export const Board_Writer = styled.div`
  width: 18%;
  height: 20px;
  font-size: 18px;
  opacity: 0.8;

  color: white;
`;
export const Board_Date = styled.div`
  width: 10%;
  height: 20px;
  font-size: 18px;
  opacity: 0.8;

  color: white;
`;
export const Wrapper_Body = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
  color: white;
`;

export const Column_Num = styled.div`
  width: 10%;
  font-size: 16px;
  color: #4f4f4f;
  padding-left: 48px;
  color: white;
`;
export const Column_Title = styled.div`
  width: 70%;
  font-size: 16px;
  text-align: center;
  color: white;
  cursor: pointer;

  :hover {
    color: #ffc414;
  }
`;
export const Column_Writer = styled.div`
  width: 18%;
  font-size: 16px;
  color: white;
`;

export const Column_Date = styled.div`
  width: 10%;
  font-size: 16px;

  color: white;
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
  background-color: grey;
  :hover {
    color: #ffc414;
  }
`;
export const Penimg = styled.img`
  width: 15px;
  height: 15px;
`;
interface IProps {
  isMatched: boolean;
}
export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? " #ffc414;" : "white")};
`;
