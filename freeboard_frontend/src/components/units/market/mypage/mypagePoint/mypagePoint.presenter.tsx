import Searchbars01 from "../../../../commons/searchbars/Searchbars01.container";
import {
  Wrapper,
  Mypage,
  Search_Wrapper,
  Real_Body,
  Body,
  Body_Row,
  MoveTo,
  Column,
  ColumnTitle,
  ColumnHeader,
  ColumnBuy,
  ColumnHeaderTitle,
  Search_Body,
  TextToken,
  HereTo,
} from "./mypagePoint.style";

import MyPages from "../../../../commons/mypages/mypages01.container";

import PointTransactions from "../pointTransactions/PointTransactions.contatiner";
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
              <MoveTo>전체내역</MoveTo>
              <HereTo>충전내역</HereTo>
              <MoveTo>구매내역</MoveTo>
              <MoveTo>판매내역</MoveTo>
            </Search_Body>
            {/* <Searchbars01
              refetch={props.refetch}
              onChangeKeyword={props.onChangeKeyword}
            /> */}
          </Search_Wrapper>
          <div>
            <PointTransactions />
          </div>
        </Real_Body>
      </Wrapper>
    </>
  );
}
