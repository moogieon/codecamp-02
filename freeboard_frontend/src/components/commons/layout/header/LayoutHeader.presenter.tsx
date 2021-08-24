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
  LogOut,
  GetCoin,
} from "./LayoutHeader.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";

import Payment from "../../../units/market/payment/marketPayment.container";
import { useApolloClient } from "@apollo/client";

export default function LayoutHeaderUI(props: any) {
  const { accessToken } = useContext(GlobalContext);
  // const client = useApolloClient();
  // client.clearStore();
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

              <GetCoin onClick={openModal}>Get Coins</GetCoin>
              <LogOut>Log Out</LogOut>
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
