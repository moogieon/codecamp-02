import {
  Wrapper,
  Mypage,
  Search_Wrapper,
  Real_Body,
  Body,
  MoveTo,
  Search_Body,
  HereTo,
} from "./mypageCart.style";

import MyPages from "../../../../commons/mypages/mypages01.container";

import ISold from "./Isold/isold.contatiner";
import MyCart from "./cart/pickedItem.container";

export default function MypageCartUI(props: any) {
  return (
    <>
      <Wrapper>
        <Mypage>
          <MyPages />
        </Mypage>
        <Real_Body>
          <Search_Wrapper>
            <Search_Body>
              <MoveTo onClick={props.onClickMenu}>전체내역</MoveTo>
              <HereTo name="loading" onClick={props.onClickMenu}>
                충전내역
              </HereTo>
            </Search_Body>
          </Search_Wrapper>
          <Body>
            {props.transactions && <ISold />}
            {props.pointMenu.sold && <MyCart />}
          </Body>
        </Real_Body>
      </Wrapper>
    </>
  );
}
