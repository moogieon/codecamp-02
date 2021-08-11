import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;
export default function PaymentPage() {
  const [amount, setAmount] = useState(0);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const router = useRouter();
  function onChanteAmount(event) {
    const amount = event.target.value;
    setAmount(amount);
  }

  function onClickPayment() {
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis", // 어떤 pg와 계약을 하는지
        pay_method: "card",
        merchant_uid: uuidv4(), // 우리가 설정하거나, uuid  이용해서 상품 key값 등록
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "/28-payment-success",
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp.uid,
            },
          });
          alert("결제 성공!");
          router.push("/28-payment-success");

          // 결제 성공 시 로직,
        } else {
          alert("결제 실패 ㅜ");
          // 결제 실패 시 로직,
        }
      }
    );
  }
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
      <div>결제 창</div>
      결재금액:
      <input type="text" onChange={onChanteAmount} />
      <button onClick={onClickPayment}>결재하기</button>
    </>
  );
}
