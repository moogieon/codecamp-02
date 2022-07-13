import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  width: 100%;
  position: relative;
`;
export const Body = styled.div`
  width: 100%;
  height: 662px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 10% 0px 10%;
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
  width: 15%;
  height: 20px;
  font-size: 18px;
  opacity: 0.8;
  text-align: center;
  color: white;
`;
export const Board_Title = styled.div`
  width: 70%;
  @media ${breakPoints.mobile} {
    width: 50%;
    padding: 0px 2rem;
  }
  @media ${breakPoints.tablet} {
    width: 60%;
  }
  height: 20px;
  font-size: 18px;
  opacity: 0.8;

  text-align: center;
  color: white;
`;
export const Board_Writer = styled.div`
  width: 18%;
  @media ${breakPoints.mobile} {
    width: 30%;
  }
  height: 20px;
  font-size: 18px;
  opacity: 0.8;
  color: white;
`;
export const Board_Date = styled.div`
  width: 10%;
  @media ${breakPoints.mobile} {
    width: 20%;
  }
  @media ${breakPoints.tablet} {
    width: 15%;
  }
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
  width: 15%;
  font-size: 16px;
  color: #4f4f4f;
  text-align: center;
  color: white;
`;
export const Column_Title = styled.div`
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  @media ${breakPoints.mobile} {
    width: 50%;
    padding: 0px 2rem;
    text-align: center;
  }
  @media ${breakPoints.tablet} {
    width: 60%;
  }
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
  @media ${breakPoints.mobile} {
    width: 20%;
  }
  font-size: 16px;
  color: white;
`;

export const Column_Date = styled.div`
  width: 10%;
  @media ${breakPoints.mobile} {
    width: 25%;
    text-align: center;
  }
  @media ${breakPoints.tablet} {
    width: 15%;
  }
  font-size: 16px;

  color: white;
`;
export const Footer = styled.div`
  width: 100%;
  padding-top: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 10% 0px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const Button = styled.button`
  max-width: 171px;
  max-height: 52px;
  padding: 1.25rem;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid whitesmoke;
  background-color: grey;
  @media ${breakPoints.mobile} {
    position: fixed;
    bottom: 10%;
    right: 10%;
    border-radius: 100%;
    max-height: 100px;
  }
  :hover {
    color: #ffc414;
  }
`;
export const Penimg = styled.img`
  width: 15px;
  height: 15px;
`;

export const Write = styled.span`
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

interface IProps {
  isMatched: boolean;
}
export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? " #ffc414;" : "white")};
`;
