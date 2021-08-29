import Searchbars01 from "../../../../commons/searchbars/Searchbars01.container";
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
import PointTransactions from "../pointTransactions/PointTransactions.contatiner";
import MypageSold from "../sold/mypageSold.contatiner";
import MypageBought from "../bought/mypageBought.contatiner";
import MypagePointLoading from "../pointLoading/mypagePointLoading.contatiner";
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
              <MoveTo onClick={props.onClickTransactions}>전체내역</MoveTo>
              <HereTo onClick={props.onClickLoading}>충전내역</HereTo>
              <MoveTo onClick={props.onClickBought}>구매내역</MoveTo>
              <MoveTo onClick={props.onClickSold}>판매내역</MoveTo>
            </Search_Body>
            {/* <Searchbars01
              refetch={props.refetch}
              onChangeKeyword={props.onChangeKeyword}
            /> */}
          </Search_Wrapper>
          <Body>
            {props.transactions && <PointTransactions />}
            {props.sold && <MypageSold />}
            {props.bought && <MypageBought />}
            {/* {<MypagePointLoading />} */}
          </Body>
        </Real_Body>
      </Wrapper>
    </>
  );
}
