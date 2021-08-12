import {
  Wrapper,
  HeadFlex,
  Left,
  Home,
  Right,
  Login,
  Mypage,
  Singup,
  Point,
  PointCoin,
} from "./LayoutHeader.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";

import Payment from "../../../units/market/payment/marketPayment.container";

export default function LayoutHeaderUI(props) {
  const { accessToken } = useContext(GlobalContext);
  const [showModal, setshowModal] = useState(false);

  const openModal = () => {
    setshowModal(true);
    document.body.style.cssText = `
    overflow: hidden;`;
  };
  const closemodal = () => {
    // if (props.onClickPayment() === true) {
    //   setshowModal(false);
    //   document.body.style.cssText = `
    //   overflow: scroll;`;
    // }
    setshowModal(false);

    document.body.style.cssText = `
    overflow: scroll;`;
  };

  return (
    <>
      <Payment showModal={showModal} closemodal={closemodal} />
      <Wrapper>
        <HeadFlex>
          <Left>
            <Home>Left</Home>
          </Left>
          {accessToken ? (
            <Right>
              <Point>Point:</Point>
              <PointCoin>
                {props.data?.fetchUserLoggedIn.userPoint.amount}
              </PointCoin>
              <Mypage onClick={openModal}>Mypage </Mypage>
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
