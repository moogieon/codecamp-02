import { getDate } from "../../../../../commons/libraries/utils";
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
} from "./mypagePointLoading.style";

export default function MypagePointLoadingUI(props: any) {
  return (
    <>
      <Wrapper>
        <Mypage></Mypage>
        <Real_Body>
          <Search_Wrapper>
            <Search_Body>
              <MoveTo>전체내역</MoveTo>
              <MoveTo>충전내역</MoveTo>
              <MoveTo>구매내역</MoveTo>
              <MoveTo>판매내역</MoveTo>
            </Search_Body>
          </Search_Wrapper>
          <Body>
            <Body_Row>
              <ColumnHeader>충전일</ColumnHeader>
              <ColumnHeaderTitle>결제 ID</ColumnHeaderTitle>
              <ColumnHeader>충전내역</ColumnHeader>
              <ColumnHeader>충전후 잔액</ColumnHeader>
            </Body_Row>
            {props.data?.fetchPointTransactionsOfLoading.map((data: any, _) => (
              <Body_Row key={data._id}>
                <Column>{getDate(data.createdAt)}</Column>
                <ColumnTitle id={data._id}>{data.impUid}</ColumnTitle>
                <ColumnBuy>
                  {"+" +
                    data.amount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                    " " +
                    "POINT"}
                </ColumnBuy>
                <Column>
                  {data.balance
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                    " " +
                    "POINT"}
                </Column>
              </Body_Row>
            ))}
          </Body>
        </Real_Body>
      </Wrapper>
    </>
  );
}
