import { HeartOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import Kakaomap from "../../../commons/map/Map01/map.contanier";

export const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  min-height: 1129px;
`;
export const Body = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  margin: 0 auto;
  height: auto;
  padding-bottom: 80px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: none;
  /* box-shadow: 0px 0px 10px gray; */
  color: white;
`;
export const Body_Head = styled.div`
  width: 100%;
  height: 48px;
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
  padding-top: 14px;
`;
export const FileImg = styled.img``;
export const LocImg = styled.img`
  margin-left: 15px;
`;

export const Line = styled.div`
  max-width: 1200px;
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  padding-top: 20px;
  margin-bottom: 10px;
`;
export const GoodsInfoBox = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: 63px;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
`;
export const Info_Left = styled.div`
  min-height: 63px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Summary = styled.div`
  color: #bdbdbd;
  font-size: 18px;
  height: 100%;
`;
export const Titel = styled.div`
  font-size: 24px;
  line-height: 1.5;
  color: beige;
  height: 100%;
`;
export const Info_Right = styled.div`
  width: 36px;
  height: 63px;
`;

export const Heart = styled(HeartOutlined)`
  font-size: 25px;
  color: ${(props: any) => (props.active ? "yellow" : "white")};
`;
export const HeartCount = styled.div`
  font-size: 18px;
  text-align: center;
  width: 21px;
  height: 27px;
`;

export const Price = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  min-height: 53px;
  font-size: 36px;
  margin-top: 8px; ;
`;
export const GoddsImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const GoodsContents = styled.div`
  max-width: 792px;
  width: 100%;
  height: 108px;

  margin-top: 100px;
`;
export const Tag = styled.div`
  width: 100%;
  height: 24px;
  color: #3f6ee5;
`;

export const Maps = styled(Kakaomap)`
  width: 100%;
  max-width: 100px;
  height: 360px;
  border: 1px solid red;
  margin-top: 80px;
  margin-bottom: 76px;
`;
export const ButtonBox = styled.div`
  padding-top: 64px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const ListButton = styled.button`
  max-width: 179px;
  width: 100%;
  height: 52px;
  border: 1px solid white;
  border-radius: 20px;
  background-color: transparent;
  font-family: ccc;
  color: white;
  cursor: pointer;
  :hover {
    color: #ffcc01;
  }
`;
export const PaymentButton = styled.button`
  max-width: 179px;
  width: 100%;
  margin-left: 24px;
  background-color: black;
  font-family: ccc;
  border: 1px solid white;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  :hover {
    color: #ffcc01;
  }
`;
export const DeletButton = styled.button`
  width: 179px;
  height: 52px;
  margin-left: 24px;
  font-family: ccc;
  background-color: black;
  cursor: pointer;
  :hover {
    color: #ffcc01;
  }
`;
export const UpdateButton = styled.button`
  width: 179px;
  height: 52px;
  margin-left: 24px;
  font-family: ccc;
  background-color: black;
  cursor: pointer;
  :hover {
    color: #ffcc01;
  }
`;
export const Imgbox = styled.div`
  width: 700px;
  max-height: 300px;

  @media ${breakPoints.mobile} {
    width: 300px;
  }
`;
