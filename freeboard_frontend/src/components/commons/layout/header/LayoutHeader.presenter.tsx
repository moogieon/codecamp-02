import {
  Wrapper,
  HeadFlex,
  Left,
  Home,
  Right,
  Login,
  Mypage,
  Singup,
} from "./LayoutHeader.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
export default function LayoutHeaderUI(props) {
  const { accessToken } = useContext(GlobalContext);
  return (
    <>
      <Wrapper>
        <HeadFlex>
          <Left>
            <Home>Left</Home>
          </Left>
          {accessToken ? (
            <Right>
              <Mypage>Mypage </Mypage>
            </Right>
          ) : (
            <Right>
              <Login onClick={props.onClickLogin}>Login</Login>
              <Singup onClick={props.onClickSingUp}>Singup</Singup>
            </Right>
          )}
        </HeadFlex>
      </Wrapper>
    </>
  );
}
