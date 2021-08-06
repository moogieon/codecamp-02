import { gql, useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../_app";

const LOGIN_USERS = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;
export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [loginUser] = useMutation(LOGIN_USERS);
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);
  const clinet = useApolloClient();

  const onClickLogin = async (data: any) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      const resultUser = await clinet.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            authorization: `Bearer ${result.data?.loginUser.accessToken}`,
          },
        },
      });
      //   console.log(resultUser.data.fetchUserLoggedIn);
      setUserInfo(resultUser.data.fetchUserLoggedIn);
      setAccessToken(result.data?.loginUser.accessToken);
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };
  return (
    <>
      {userInfo?.email ? `${userInfo.name}님 환영합니다.` : "로그인 부탁 ;;"}
      <div>안녕 ?</div>
      <form onSubmit={handleSubmit(onClickLogin)}>
        E-mail:
        <input type="email" {...register("email")} />
        Password:
        <input type="password" {...register("password")} />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
