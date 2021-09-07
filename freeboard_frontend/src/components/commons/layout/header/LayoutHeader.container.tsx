import { useQuery, gql, useMutation, useApolloClient } from "@apollo/client";
import { Modal } from "antd";

import { useRouter } from "next/router";

import { FETCH_USER_LOGGED_IN } from "../../../units/market/payment/marketPayment.queries";
import LayoutHeaderUI from "./LayoutHeader.presenter";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

// type MENU = 'TOTAL' | 'LOADING'

export default function LayoutHeader() {
  // const [selectedMenu, setSelectedMenu] = useState<MENU>('TOTAL')
  // setSelectedMenu('LOADING')
  // {selectedMenu === "TOTAL" && (

  // )}
  //   {selectedMenu === "LOADING" && (

  //   )}
  const client = useApolloClient();

  const [logoutUser] = useMutation(LOGOUT_USER);
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  function onClickLogin() {
    router.push("/market/login");
  }
  function onClickSingUp() {
    router.push("/market/singup");
  }
  const onClickLogOut = () => {
    try {
      logoutUser();
      Modal.confirm({
        content: "로그아웃",
        onOk: () => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("userInfo");
          client.clearStore();
          window.location.replace("/market/login");
        },
      });
    } catch (error) {
      alert(error.message);
    }
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
