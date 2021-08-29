import {
  Wrapper,
  Mypage,
  Search_Wrapper,
  Real_Body,
  Body,
  MoveTo,
  Search_Body,
  HereTo,
} from "./mypagePoint.style";

import MyPages from "../../../../commons/mypages/mypages01.container";
import PointTransactions from "./pointTransactions/PointTransactions.contatiner";
import MypageSold from "./sold/mypageSold.contatiner";
import MypageBought from "./bought/mypageBought.contatiner";
import MypagePointLoading from "./pointLoading/mypagePointLoading.contatiner";

export default function MypagePointUI(props: any) {
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
              <MoveTo onClick={props.onClickMenu}>구매내역</MoveTo>
              <MoveTo onClick={props.onClickMenu}>판매내역</MoveTo>
            </Search_Body>
          </Search_Wrapper>
          <Body>
            {props.transactions && <PointTransactions />}
            {props.pointMenu.sold && <MypageSold />}
            {props.pointMenu.bought && <MypageBought />}
            {props.pointMenu.loading && <MypagePointLoading />}
          </Body>
        </Real_Body>
      </Wrapper>
    </>
  );
}
