import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";
import {
  Wrapper,
  Header,
  Body,
  Footer,
  Column,
  BodyColumn1,
  BodyColumn2,
  BodyColumn3,
  ProfileImg,
  ColumnName,
  MypageImg,
} from "./mypages01.style";
export default function MyPagesUI(props: any) {
  const { userInfo } = useContext(GlobalContext);
  console.log("유저", userInfo.name);
  return (
    <>
      <Wrapper>
        <Header>
          <Column>MYPAGE</Column>
          <ProfileImg src="/market/mypage/profile.png" />
          <ColumnName>{userInfo.name}</ColumnName>
        </Header>
        <Body>
          <MypageImg src="/market/mypage/cart.png" />
          <BodyColumn1> CART</BodyColumn1>
          <MypageImg src="/market/mypage/Pig.png" />
          <BodyColumn2 onClick={props.onClickPoint}> POINT</BodyColumn2>
          <MypageImg src="/market/mypage/miniprofile.png" />
          <BodyColumn3 onClick={props.onClickProfile}> PROFILE</BodyColumn3>
        </Body>
        <Footer></Footer>
      </Wrapper>
    </>
  );
}
