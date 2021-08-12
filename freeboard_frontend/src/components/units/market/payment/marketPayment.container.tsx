import PaymentUI from "./marketPayment.presenter";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./marketPayment.queries";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../login/marketLogin.queries";

declare const window: typeof globalThis & {
  IMP: any;
};
export default function Payment(props) {
  const [amount, setAmount] = useState(0);
  const [input, setInput] = useState();
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // console.log(data.fetchUserLoggedIn.name);
  function onChanteAmount(event) {
    const amount = event.target.id;
    setAmount(amount);
    console.log(amount);
    setInput(amount);
  }

  function onClickPayment() {
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis", // 어떤 pg와 계약을 하는지
        pay_method: "card",
        // merchant_uid: uuidv4(), // 우리가 설정하거나, uuid  이용해서 상품 key값 등록"/28-payment-success",
        name: "포인트",
        amount: amount,
        buyer_email: "dwww@sss.com",
        buyer_name: "ss",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "/28-payment-success",
      },
      async (rsp) => {
        // callback
        try {
          if (rsp.success) {
            await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            alert("결제 성공!");
            // router.push("/28-payment-success");

            // 결제 성공 시 로직,
          } else {
            // 결제 실패 시 로직,
          }
        } catch (error) {
          alert(error.message);
        }
      }
    );
  }
  return (
    <PaymentUI
      showModal={props.showModal}
      setShowModal={props.setShowModal}
      onClickPayment={onClickPayment}
      onChanteAmount={onChanteAmount}
      openModal={props.openModal}
      closemodal={props.closemodal}
      input={input}
    />
  );
}
