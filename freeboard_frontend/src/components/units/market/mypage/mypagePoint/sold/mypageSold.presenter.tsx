import { getDate } from "../../../../../../commons/libraries/utils";
import Searchbars01 from "../../../../../commons/searchbars/Searchbars01.container";
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
} from "./mypageSold.style";
import { v4 as uuidv4 } from "uuid";
export default function MypageSoldUI(props: any) {
  return (
    <>
      <Wrapper>
        <Real_Body>
          <Body>
            <Body_Row>
              <ColumnHeader>날짜</ColumnHeader>
              <ColumnHeaderTitle>제목</ColumnHeaderTitle>
              <ColumnHeader>거래내역</ColumnHeader>
              <ColumnHeader>거래 후 잔액</ColumnHeader>
              <ColumnHeader>판매자</ColumnHeader>
            </Body_Row>
            {props.data?.fetchPointTransactionsOfSelling.map(
              (data: any, index: number) => (
                <Body_Row key={data._id}>
                  <Column>{getDate(data.useditem.soldAt)}</Column>
                  <ColumnTitle id={data._id}>
                    {data.useditem.name
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
                  </ColumnTitle>
                  <ColumnBuy>{data.amount}</ColumnBuy>
                  <Column>
                    {data.balance
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                      " " +
                      "POINT"}
                  </Column>
                  <Column>알수없음</Column>
                </Body_Row>
              )
            )}
          </Body>
        </Real_Body>
      </Wrapper>
    </>
  );
}
