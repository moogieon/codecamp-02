import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-right: 81px;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
`;
export const Footer = styled.div``;
export const Header = styled.div``;
export const Column = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 700;
`;
export const ColumnName = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
`;
export const BodyColumn1 = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  font-family: ccc;
  cursor: pointer;
  :hover {
    color: white;
  }
  color: #828282;
`;
export const BodyColumn2 = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  font-family: ccc;
  cursor: pointer;
  :hover {
    color: white;
  }
  color: ${(props: any) => (props.isActive ? "white" : "#828282")};
`;
export const BodyColumn3 = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  font-family: ccc;
  cursor: pointer;
  :hover {
    color: white;
  }
  color: #828282;
`;
export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
`;
export const MypageImg = styled.img`
  margin-top: 30px;
  width: 25px;
  height: 20px;
`;
