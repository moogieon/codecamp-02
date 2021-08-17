import { useQuery, gql, useMutation } from "@apollo/client";

import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "../../../units/market/payment/marketPayment.queries";
import LayoutHeaderUI from "./LayoutHeader.presenter";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser {
      true
    }
  }
`;
export default function LayoutHeader() {
  const [logoutUser] = useMutation(LOGOUT_USER);
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  function onClickLogin() {
    router.push("/market/login");
  }
  function onClickSingUp() {
    router.push("/market/singup");
  }
  const onClickLogOut = async () => {
    logoutUser({});
  };

  return (
    <LayoutHeaderUI
      onClickLogin={onClickLogin}
      onClickSingUp={onClickSingUp}
      data={data}
      onClickLogOut={onClickLogOut}
    />
  );
}
