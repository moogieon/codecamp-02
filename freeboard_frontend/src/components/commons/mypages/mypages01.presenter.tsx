import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";
import {
  Wrapper,
  Header,
  Body,
  Footer,
  Column,
  ProfileImg,
  ColumnName,
  MypageImg,
} from "./mypages01.style";
export default function MyPagesUI() {
  const { userInfo } = useContext(GlobalContext);
  console.log("유저", userInfo.name);
  return (
    <>
      <Wrapper>
        <Header>
          <Column>MYPAGE</Column>
          <ProfileImg src="/market/detail/profile.png" />
          <ColumnName>{userInfo.name}</ColumnName>
        </Header>
        <Body>
          <MypageImg src="/market/mypage/cart.png" />
          <MypageImg src="/market/mypage/Pig.png" />
          <MypageImg src="/market/mypage/miniprofile.png" />
        </Body>
        <Footer></Footer>
      </Wrapper>
    </>
  );
}
