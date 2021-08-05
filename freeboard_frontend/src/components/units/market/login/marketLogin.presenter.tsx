import { ChangeEvent, MouseEvent } from "react";
import {
  Wrapper,
  Body_Wraaper,
  Head,
  Body,
  Id,
  Password,
  CheckBox,
  Wraaoer_Body,
  InputBox,
  Label,
  Error,
  LoginButton,
  Line,
  Footer,
  Singin_Button,
} from "./marketLogin.style";

interface IProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  onClickSingup: (event: MouseEvent<HTMLButtonElement>) => void;
  errors: any;
  register: any;
}
export default function MarketLoginUI(props: IProps) {
  return (
    <>
      <Wraaoer_Body>
        <Wrapper>
          <Body_Wraaper>
            <Head>LOGIN</Head>
            <Body>
              <form onSubmit={props.handleSubmit(props.onClickSingup)}>
                <InputBox>
                  <Id
                    type="email"
                    placeholder=" e-maiL"
                    {...props.register("email")}
                  />
                  <Label> e-maiL</Label>
                  <Error>{props.errors.email?.message}</Error>
                </InputBox>

                <InputBox>
                  <Password
                    type="password"
                    {...props.register("password")}
                    placeholder="pasword"
                  />
                  <Label>pasword</Label>
                  <Error>{props.errors.password?.message}</Error>
                </InputBox>

                <CheckBox> 로그인 상태 유지</CheckBox>
                <LoginButton type="submit">Login</LoginButton>
              </form>
              <Line />
              <Footer>
                <Singin_Button>이메일 찾기</Singin_Button>
                <Singin_Button>비밀번호 찾기</Singin_Button>
                <Singin_Button onClick={props.onClickSingup}>
                  회원가입
                </Singin_Button>
              </Footer>
            </Body>
          </Body_Wraaper>
        </Wrapper>
      </Wraaoer_Body>
    </>
  );
}
