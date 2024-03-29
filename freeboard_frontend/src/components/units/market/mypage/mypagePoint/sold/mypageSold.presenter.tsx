import { getDate } from "../../../../../../commons/libraries/utils";

import {
  Wrapper,
  Real_Body,
  Body,
  Body_Row,
  Column,
  ColumnTitle,
  ColumnHeader,
  ColumnBuy,
  ColumnHeaderTitle,
  TextToken,
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
            {props.data?.fetchPointTransactionsOfSelling.lenght ? (
              props.data?.fetchPointTransactionsOfSelling.map(
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
              )
            ) : (
              <div style={{ padding: 10 }}>판매 내역이 없습니다.</div>
            )}
          </Body>
        </Real_Body>
      </Wrapper>
    </>
  );
}
