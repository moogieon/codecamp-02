import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";
import {
  Wrapper,
  Header,
  Body,
  Footer,
  Column,
  Menu,
  ProfileImg,
  ColumnName,
  MypageImg,
} from "./mypages01.style";
import { useRouter } from "next/router";
export default function MyPagesUI(props: any) {
  const { userInfo } = useContext(GlobalContext);

  return (
    <>
      <Wrapper>
        <Header>
          <Column>MYPAGE</Column>
          <ProfileImg src="/market_img/mypage/profile.png" />
          <ColumnName>{userInfo.name}</ColumnName>
        </Header>
        <Body>
          <nav>
            <ul style={{ padding: 0 }}>
              <MypageImg src="/market_img/mypage/cart.png" />
              <MenuItem
                handleMenuClick={props.handleMenuClick}
                path="/market/mypage"
                label="POST"
              />
              <MypageImg src="/market_img/mypage/Pig.png" />
              <MenuItem
                handleMenuClick={props.handleMenuClick}
                path="/market/mypage/mypagePoint"
                label="POINT"
              />
              <MypageImg src="/market_img/mypage/miniprofile.png" />
              <MenuItem
                handleMenuClick={props.handleMenuClick}
                path="/market/mypage/profile"
                label="PROFILE"
              />
            </ul>
          </nav>
        </Body>
        <Footer></Footer>
      </Wrapper>
    </>
  );
}

const MenuItem = ({
  handleMenuClick,
  path,
  label,
}: {
  handleMenuClick: any;
  path: string;
  label: string;
}) => {
  const router = useRouter();
  const isActive = router.pathname === path;

  return (
    <Menu isActive={isActive} onClick={() => handleMenuClick(path)}>
      {label}
    </Menu>
  );
};
