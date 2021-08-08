import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 36px;
  font-family: ccc;
`;
export const Head = styled.div`
  border: 1px solid red;
  width: 1200px;
  height: 473px;
`;
export const Body = styled.div`
  border: 1px solid red;
  width: 1200px;

  display: flex;
  flex-direction: column;
`;
export const Wrapper_Body = styled.div`
  border: 1px solid blue;
  width: 1200px;
  height: 200px;
  color: white;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const GoodsImg = styled.img`
  width: 160px;
  height: 160px;
  border: 1px solid blue;
  background-size: 100%;
`;
export const GoddsInfo = styled.div`
  height: 160px;
  border: 1px solid blue;
  padding-top: 8px;
  padding-left: 40px;
`;

export const GoodsName = styled.div`
  color: white;
  width: 251px;
  height: 36px;
  border: 1px solid wheat;
  margin-bottom: 4px;
  cursor: pointer;
`;
export const GoodsRemarks = styled.div`
  border: 1px solid red;
  color: white;
  width: 110px;
  height: 24px;
  margin-bottom: 8px;
`;
export const GoodsTag = styled.div`
  border: 1px solid red;
  color: white;
  width: 189px;
  height: 24px;
  margin-bottom: 24px;
`;
export const SellerInfo = styled.div`
  border: 1px solid blue;
  color: white;
  width: 125px;
  height: 24px;
`;
export const Seller = styled.div`
  border: 1px solid red;
  color: white;
  width: 65px;
  height: 20px;
`;
export const GoodsPrice = styled.div`
  border: 1px solid red;
  width: 160px;
  height: 36px;
  margin-left: 605px;
  margin-top: 62px;
  font-size: 24px;
`;

export const GoWrite = styled.button`
  background-color: black;
  width: 124px;
  height: 52px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  :hover {
    color: yellow;
  }
`;
