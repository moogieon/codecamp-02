import { HeartOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Body = styled.div`
  width: 792px;
  /* border: 1px solid black; */
  margin: 100px;

  padding-bottom: 80px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: none;
  /* box-shadow: 0px 0px 10px gray; */
  color: white;
`;
export const Body_Head = styled.div`
  width: 792px;
  height: 48px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
`;
export const UserInfoBox = styled.div`
  display: flex;
  padding-left: 4px;
  padding-top: 4px;
  padding-bottom: 22px;
`;
export const User_Img = styled.img`
  width: 40px;
  height: 40px; ;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const User = styled.div`
  margin-left: 16px;
  font-family: ccc;
`;

export const Date = styled.div`
  font-size: 12px;
  margin-left: 16px;
  color: #828282;
  font-family: ccc;
`;
export const HeadImgBox = styled.div`
  padding-top: 14 px;
`;
export const FileImg = styled.img``;
export const LocImg = styled.img`
  margin-left: 15px;
`;

export const Line = styled.div`
  width: 792px;
  border-bottom: 1px solid #bdbdbd;
  padding-top: 20px;
`;
export const GoodsInfoBox = styled.div`
  width: 792px;
  height: 63px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
`;
export const Info_Left = styled.div``;
export const Summary = styled.div`
  color: #bdbdbd;
  font-size: 18px;
`;
export const Titel = styled.div`
  font-size: 24px;
  color: beige;
`;
export const Info_Right = styled.div`
  width: 36px;
  height: 63px;
`;

export const Heart = styled(HeartOutlined)`
  font-size: 25px;
`;

export const Price = styled.div`
  width: 792px;
  height: 53px;
  font-size: 36px;
  margin-top: 8px; ;
`;
export const GoddsImg = styled.img`
  width: 504px;
  height: 482px;
  /* border: 1px solid red; */
`;
export const GoodsContents = styled.div`
  width: 792px;
  height: 108px;
  border: 1px solid red;
`;
export const Tag = styled.div`
  width: 792px;
  height: 24px;
  border: 1px solid red;
`;

export const Map = styled.div`
  width: 792px;
  height: 360px;
  border: 1px solid red;
  margin-top: 80px;
  margin-bottom: 76px;
`;
export const ButtonBox = styled.div`
  padding-top: 64px;
  display: flex;
`;
export const ListButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: transparent;
  font-family: ccc;
  color: white;
  cursor: pointer;
`;
export const PaymentButton = styled.button`
  width: 179px;
  height: 52px;
  margin-left: 24px;
  background-color: black;
  font-family: ccc;
  color: white;
  cursor: pointer;
`;
