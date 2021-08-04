import {
  Wrapper,
  HeadFlex,
  Left,
  Home,
  Right,
  Login,
  Mypage,
} from "./LayoutHeader.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function LayoutHeaderUI(props) {
  return (
    <>
      <Wrapper>
        <HeadFlex>
          <Left>
            <Home>Left</Home>
          </Left>
          <Right>
            <Login onClick={props.onClickLogin}>Login</Login>
            <Mypage>MyPage</Mypage>
          </Right>
        </HeadFlex>
      </Wrapper>
    </>
  );
}
