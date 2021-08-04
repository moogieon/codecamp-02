// import { ChangeEvent, MouseEvent } from "react";
import { ChangeEvent, MouseEvent } from "react";
import { INPUT_USER } from "./marketSingup.container";
import {
  Wrapper,
  Body_Wraaper,
  Head,
  Body,
  Name,
  Id,
  Password,
  RePassword,
  Wraaoer_Body,
  Error,
  LoginButton,
  Footer,
} from "./marketSingup.styles";

interface IProps {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  onClickSingup: () => void;

  inputError: typeof INPUT_USER;
}
export default function MarketSingupUI(props: IProps) {
  return (
    <>
      <Wraaoer_Body>
        <Wrapper>
          <Body_Wraaper>
            <Head>SING UP</Head>
            <Body>
              <Name
                name="name"
                placeholder=" name"
                onChange={props.onChangeInput}
              />
              <Error>{props.inputError.name}</Error>
              <Id
                name="email"
                placeholder=" e-maiL"
                onChange={props.onChangeInput}
              />
              <Error>{props.inputError.email}</Error>
              <Password
                name="password"
                placeholder="pasword"
                type="password"
                onChange={props.onChangeInput}
              />
              <Error>{props.inputError.password}</Error>
              <RePassword
                name="confirmpassword"
                placeholder="confirm password"
                type="password"
                onChange={props.onChangeConfirmpassword}
              />
              <Error>{props.passwrodError}</Error>

              <LoginButton type="dashed" onClick={props.onClickSingup}>
                join now
              </LoginButton>

              <Footer></Footer>
            </Body>
          </Body_Wraaper>
        </Wrapper>
      </Wraaoer_Body>
    </>
  );
}
