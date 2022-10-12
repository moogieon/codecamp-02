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
  PwEmailButton,
} from "./marketLogin.style";

interface IProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: (data: any) => Promise<void>;
  onClickSingup: (event: MouseEvent<HTMLButtonElement>) => void;

  errors: any;
  register: any;
  handleSubmit: any;
}
export default function MarketLoginUI(props: IProps) {
  return (
    <>
      <Wraaoer_Body>
        <Wrapper>
          <Body_Wraaper>
            <Head>LOGIN</Head>
            <Body>
              <form onSubmit={props.handleSubmit(props.onClickLogin)}>
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
                <PwEmailButton>이메일 찾기</PwEmailButton>
                <Singin_Button onClick={props.onClickSingup}>
                  회원가입
                </Singin_Button>
                <PwEmailButton>비밀번호 찾기</PwEmailButton>
              </Footer>
            </Body>
          </Body_Wraaper>
          <div
            style={{
              width: 200,
              height: 20,
              margin: "0 auto",
              fontSize: 24,
            }}
          >
            <div>
              테스트 이메일: <div style={{ color: "green" }}>gr@een.com</div>
            </div>
            <div>
              테스트 PW: <div style={{ color: "green" }}>1234</div>
            </div>
          </div>
        </Wrapper>
      </Wraaoer_Body>
    </>
  );
}
