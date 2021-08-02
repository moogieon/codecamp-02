import {
  Wrapper,
  Body_Wraaper,
  Head,
  Body,
  Id,
  Password,
  CheckBox,
} from "./marketLogin.style";
export default function MarketLoginUI() {
  return (
    <>
      <Wrapper>
        <Body_Wraaper>
          <Head>LOGIN</Head>
          <Body>
            <Id></Id>
            <Password></Password>
            <CheckBox> 로그인 상태 유지</CheckBox>
          </Body>
        </Body_Wraaper>
      </Wrapper>
    </>
  );
}
