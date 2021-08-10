// import { ChangeEvent, MouseEvent } from "react";

import { useEffect, useRef } from "react";
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
  onClickSingup: () => void;
}

export default function MarketSingupUI(props: IProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <Wraaoer_Body>
        <Wrapper>
          <Body_Wraaper>
            <Head>SING UP</Head>
            <Body>
              <form onSubmit={props.handleSubmit(props.onClickSingup)}>
                <Name
                  ref={inputRef}
                  type="name"
                  placeholder=" name"
                  {...props.register("name")}
                />
                <Error>{props.errors.name?.message}</Error>
                <Id
                  ref={inputRef}
                  type="email"
                  placeholder=" e-maiL"
                  {...props.register("email")}
                />
                <Error>{props.errors.email?.message}</Error>
                <Password
                  placeholder="pasword"
                  type="password"
                  {...props.register("password")}
                />
                <Error>{props.errors.password?.message}</Error>
                <RePassword
                  name="confirmpassword"
                  placeholder="confirm password"
                  type="password"
                  onChange={props.onChangeConfirmpassword}
                />
                <Error>{props.passwrodError}</Error>

                <LoginButton type="submit">join now</LoginButton>
              </form>

              <Footer></Footer>
            </Body>
          </Body_Wraaper>
        </Wrapper>
      </Wraaoer_Body>
    </>
  );
}
