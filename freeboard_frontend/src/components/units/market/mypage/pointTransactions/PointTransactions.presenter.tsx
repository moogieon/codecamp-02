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
  ColumnTitle1,
  // ColumnTitle2,
  ColumnHeader,
  ColumnBuy,
  ColumnHeaderTitle,
  Search_Body,
  TextToken,
  HereTo,
} from "./PointTransactions.style";
import { v4 as uuidv4 } from "uuid";
import MyPages from "../../../../commons/mypages/mypages01.container";
export default function PointTransactionsUI(props: any) {
  return (
    <>
      <Wrapper>
        <Mypage>
          <MyPages />
        </Mypage>
        <Real_Body>
          <Search_Wrapper>
            <Search_Body>
              <HereTo>전체내역</HereTo>
              <MoveTo>충전내역</MoveTo>
              <MoveTo>구매내역</MoveTo>
              <MoveTo>판매내역</MoveTo>
            </Search_Body>

            <Searchbars01
              refetch={props.refetch}
              onChangeKeyword={props.onChangeKeyword}
            />
          </Search_Wrapper>
          <Body>
            <Body_Row>
              <ColumnHeader>날짜</ColumnHeader>
              <ColumnHeaderTitle>제목</ColumnHeaderTitle>
              <ColumnHeader>거래내역</ColumnHeader>
              <ColumnHeader>거래 후 잔액</ColumnHeader>
            </Body_Row>
            {props.data?.fetchPointTransactions.map(
              (data: any, index: number) => (
                <Body_Row key={data._id}>
                  <Column id={data._id}>
                    {getDate(data.createdAt)
                      .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                      .split("@#$%")
                      .map((data: any) => (
                        <TextToken
                          key={uuidv4()}
                          isMatched={props.keyword === data}
                        >
                          {data}
                        </TextToken>
                      ))}
                  </Column>

                  <ColumnTitle1>{data.status}</ColumnTitle1>
                  <ColumnBuy>{data.amount}</ColumnBuy>
                  <Column>
                    {data.balance
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                      " " +
                      "POINT"}
                  </Column>
                </Body_Row>
              )
            )}
          </Body>
        </Real_Body>
      </Wrapper>
    </>
  );
}
