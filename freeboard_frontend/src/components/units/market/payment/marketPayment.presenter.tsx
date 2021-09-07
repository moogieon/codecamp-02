import {
  Tilte,
  Coin,
  Coin_Contnets,
  Wrapper,
  ModalWrapper,
  Close,
  Drop,
  Drop_Wrapper,
} from "./marketPayment.style";
// import { useSpring, animated } from "react-spring";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useRef } from "react";
import Head from "next/head";

export default function PaymentUI(props: any) {
  // const modalRef = useRef();
  // const animation = useSpring({
  //   config: {
  //     duration: 250,
  //   },
  //   opacity: props.showModal ? 1 : 0,
  //   transform: props.showModal ? "translateY(0%)" : "translate(-50%)",
  // });

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
        ></script>
      </Head>
      {props.showModal ? (
        <Wrapper>
          <ModalWrapper>
            <Close onClick={props.closemodal} />
            <Tilte>
              <Coin />
              <Coin_Contnets>충전하실 금액을 선택해주세요!</Coin_Contnets>
            </Tilte>
            <Drop_Wrapper>
              <Drop>
                <div>{props.input || "0"}</div>
                <Dropdown.Toggle>포인트 선택</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item id="100" onClick={props.onChanteAmount}>
                    100
                  </Dropdown.Item>
                  <Dropdown.Item id="500" onClick={props.onChanteAmount}>
                    500
                  </Dropdown.Item>
                  <Dropdown.Item id="1000" onClick={props.onChanteAmount}>
                    1,000
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Drop>
              <button onClick={props.onClickPayment}>충전하기</button>
            </Drop_Wrapper>
          </ModalWrapper>
        </Wrapper>
      ) : null}
    </>
  );
}
