import { ChangeEvent, MouseEvent } from "react";
import { INPUT_LOGIN } from "./marketLogin.container";
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
  inputError: typeof INPUT_LOGIN;
}
export default function MarketLoginUI(props: IProps) {
  return (
    <>
      <Wraaoer_Body>
        <Wrapper>
          <Body_Wraaper>
            <Head>LOGIN</Head>
            <Body>
              <InputBox>
                <Id
                  name="email"
                  onChange={props.onChangeInput}
                  placeholder=" e-maiL"
                />
                <Label> e-maiL</Label>
                <Error>{props.inputError.email}</Error>
              </InputBox>

              <InputBox>
                <Password
                  name="password"
                  onChange={props.onChangeInput}
                  placeholder="pasword"
                  type="password"
                />
                <Label>pasword</Label>
                <Error>{props.inputError.password}</Error>
              </InputBox>

              <CheckBox> 로그인 상태 유지</CheckBox>
              <LoginButton onClick={props.onClickLogin} type="dashed">
                Login
              </LoginButton>
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
