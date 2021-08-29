import styled from "@emotion/styled";

interface IProps {
  isMatched: boolean;
}
export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding-top: 40px;
  /* padding-right: 360px; */
  margin: 1px auto;
  display: flex;
`;
export const Mypage = styled.div`
  border-right: 2px solid #f2f2f2;
  /* width: 538px; */

  height: 1189px;
`;
export const Real_Body = styled.div`
  width: 980px;
  height: 582px;
  display: flex;
  flex-direction: column;

  padding-left: 30px;
`;
export const TextToken = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "white")};
`;
export const Search_Wrapper = styled.div`
  /* width: 980px; */
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Search_Body = styled.div`
  width: 368px;
  height: 10px;
  display: flex;
  padding-left: 30px;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  height: 582px;
`;
export const Body_Row = styled.div`
  border-bottom: 1px solid #bdbdbd;
  height: 52px;
  display: flex;
  flex-direction: row;
  line-height: 52px;
`;
export const Column = styled.div`
  width: 30%;
  text-align: center;
  color: #828282;
`;
export const ColumnBuy = styled.div`
  width: 30%;
  text-align: center;
  color: #ffcc01;
`;
export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  font-family: ccc;
`;
export const ColumnHeader = styled.div`
  width: 30%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
  font-weight: 500;
`;

export const HereTo = styled.div`
  width: 30%;
  text-align: center;
  color: dimgrey;
  font-family: Ruda;
  cursor: pointer;
  :hover {
    color: lightgray;
    border-bottom: 1px solid yellow;
  }
  /* border-bottom: 1px solid yellow; */
  /* color: lightgray; */
`;
export const MoveTo = styled.div`
  width: 30%;
  text-align: center;
  color: dimgrey;
  font-family: Ruda;
  cursor: pointer;
  :hover {
    color: lightgray;
    border-bottom: 1px solid yellow;
  }
`;
