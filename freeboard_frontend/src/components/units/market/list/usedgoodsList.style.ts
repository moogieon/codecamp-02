import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
export const RealWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  /* text-align: center; */
  padding: 0px 10% 0px 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 377px;
  /* padding-left: 360px; */
`;
export const Title = styled.div`
  font-size: 36px;
  font-family: ccc;
  text-align: center;
`;
export const Head = styled.div`
  width: 100%;
  height: auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;
export const Body = styled.div`
  width: 100%;
  height: 1008px;
  /* border: 1px solid white; */
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-top: 100px;
  ::-webkit-scrollbar {
    width: 20px;

    background-color: #f2f2f2;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ffd600;
    height: 17%;

    border-left: 7px solid black;
    border-right: 7px solid black;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track {
    border-left: 9px solid black;
    border-right: 9px solid black;
    background: #f2f2f2;
  }
`;
export const Wrapper_Body = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 30px;
  color: white;
  transition-property: width;
  cursor: pointer;
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  :hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    border: 1px solid #bdbdbd;
    background-color: black;
  }
  :hover .name {
    color: #fc0;
  }
  @media ${breakPoints.mobile} {
    padding: 20px 0px;
  }
`;
export const GoodsImg = styled.img`
  width: 20%;
  height: 160px;
  background-size: cover;
`;
export const GoddsInfo = styled.div`
  height: 160px;
  width: 100%;
`;

export const GoodsName = styled.div`
  color: white;
  height: 36px;
  width: 70%;
  margin-bottom: 4px;
  cursor: pointer;
  font-size: 24px;
  font-weight: 500;
  font-family: ccc;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 3;
`;
export const GoodsRemarks = styled.div`
  color: white;
  height: 24px;
  width: 100%;
  margin-bottom: 8px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 1;
`;
export const GoodsTag = styled.div`
  color: white;
  height: 24px;
  width: 50%;
  margin-bottom: 15px;
  font-size: 16px;
  color: #bdbdbd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 1;
`;
export const SellerInfo = styled.div`
  /* border: 1px solid blue; */
  color: white;
  width: 100%;
  height: 24px;
`;
export const Seller = styled.div`
  /* border: 1px solid red; */
  color: white;
  width: 100%;
  height: 20px;
  font-size: 16px;
`;

export const InfoBox = styled.div`
  height: 100%;
  width: 50%;
  flex: 3;
  margin-left: 20px;
`;
export const RigthBox = styled.div`
  height: 100%;
  width: 25%;
  padding-right: 10px;
  flex: 1;
`;
export const LeftBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
export const GoodsPrice = styled.div`
  height: 36px;
  margin-top: 62px;
  font-size: 1.25rem;

  /* border: 1px solid red; */
  font-family: ccc;
`;

export const GoWrite = styled.button`
  background-color: black;
  margin-top: 54px;
  width: 124px;
  height: 52px;
  color: white;
  font-size: 16px;
  font-family: ccc;
  cursor: pointer;
  :hover {
    color: #ffc414;
  }
`;
// --------- side bar -------
export const ItemLog = styled.div`
  border: 1px solid white;
  width: 200px;
  height: 505px;
  overflow-y: auto;
  background-color: black;
  ::-webkit-scrollbar {
    width: 20px;
    background-color: #f2f2f2;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ffd600;
    height: 17%;

    border-left: 9px solid black;
    border-right: 9px solid black;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track {
    border-left: 9px solid black;
    border-right: 9px solid black;
    background: #f2f2f2;
  }
  position: sticky;
  top: 100px;
  left: 3000px;
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding: 20px 10px 10px 10px;
`;
export const LogoTitle = styled.div`
  font-size: 18px;
  font-family: ccc;
  /* border: 1px solid red; */
  color: white;
  position: sticky;
`;
export const LogoInfo = styled.div`
  width: 100%;
  /* height: 199px; */
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 0px 10px 10px 10px;

  cursor: pointer;
  :hover {
    background-color: grey;
  }
`;
export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  background-size: 100%;
  margin-top: 30px;
  margin-left: 36px;
  color: white;
`;
export const LogoName = styled.div`
  width: 126px;
  height: 18px;

  margin-top: 12px;
  margin-bottom: 12px;
  color: white;
`;
export const LogoRemarks = styled.div`
  /* width: 81px; */
  height: 18px;
  font-size: 14px;
  color: #4f4f4f;
`;
export const LogoPrice = styled.div`
  height: 24px;

  margin-top: 4px;
  color: darkgrey;
`;
export const LogoTag = styled.div`
  height: 17px;
  margin-top: 8px;
  font-size: 12px;
  color: #3f6ee5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 3;
`;
