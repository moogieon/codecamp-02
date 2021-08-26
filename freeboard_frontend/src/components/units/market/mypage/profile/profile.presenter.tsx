import MyPages from "../../../../commons/mypages/mypages01.container";
import {
  Wrapper,
  Body,
  Mypage,
  InputBox,
  PasswordInput,
  RestPasswordBtn,
  Colum,
  ColumHeader,
} from "./profile.style";
export default function ProfielUI(props: any) {
  return (
    <>
      <Wrapper>
        <Mypage>
          <MyPages />
        </Mypage>

        <Body>
          <ColumHeader> 비밀번호 변경</ColumHeader>
          <InputBox>
            <Colum> 새 비밀번호</Colum>
            <PasswordInput
              name={"password"}
              onChange={props.onChangePassword}
            />
          </InputBox>
          <RestPasswordBtn onClick={props.onClickReset}>등록</RestPasswordBtn>
        </Body>
      </Wrapper>
    </>
  );
}
