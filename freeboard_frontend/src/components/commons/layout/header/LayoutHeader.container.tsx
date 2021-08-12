import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "../../../units/market/payment/marketPayment.queries";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  function onClickLogin() {
    router.push("/market/login");
  }
  function onClickSingUp() {
    router.push("/market/singup");
  }
  return (
    <LayoutHeaderUI
      onClickLogin={onClickLogin}
      onClickSingUp={onClickSingUp}
      data={data}
    />
  );
}
