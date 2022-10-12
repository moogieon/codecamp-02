import { getDate } from "../../../../../../commons/libraries/utils";

import {
  Wrapper,
  Search_Wrapper,
  Real_Body,
  Body,
  Body_Row,
  Column,
  ColumnTitle2,
  ColumnHeader,
  ColumnBuy,
  ColumnHeaderTitle,
  TextToken,
} from "./pointTransactions.style";
import { v4 as uuidv4 } from "uuid";

export default function PointTransactionsUI(props: any) {
  return (
    <>
      <Wrapper>
        <Real_Body>
          <Search_Wrapper>
            {/* <Searchbars01
              refetch={props.refetch}
              onChangeKeyword={props.onChangeKeyword}
            /> */}
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

                  <ColumnTitle2 status={data.status}>
                    {data.status}
                  </ColumnTitle2>
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
