import {
  Wrapper,
  StickHeader,
  Header,
  Stick_1,
  Stick_2,
  Text,
  Sitcky,
} from "./LayoutNavigation.styes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuItem from "../../nav/MenuItem";
export default function LayoutNavigationUI(props: any) {
  return (
    <>
      <Sitcky>
        <StickHeader>
          <Stick_1></Stick_1>
          <Stick_2></Stick_2>
        </StickHeader>
        <Wrapper>
          <Header>
            <Text>
              <MenuItem
                handleMenuClick={props.handleMenuClick}
                path="/boards"
                label="자유게시판"
              />
            </Text>
            <Text>
              <MenuItem
                handleMenuClick={props.handleMenuClick}
                path="/market"
                label="중고거래"
              />
            </Text>
            <Text>
              <MenuItem
                handleMenuClick={props.handleMenuClick}
                path="/market/mypage"
                label="내 정보"
              />
            </Text>
          </Header>
        </Wrapper>
      </Sitcky>
    </>
  );
}
