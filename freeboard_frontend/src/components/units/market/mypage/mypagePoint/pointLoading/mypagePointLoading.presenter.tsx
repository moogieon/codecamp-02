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
} from "./mypagePointLoading.style";

export default function MypagePointLoadingUI(props: any) {
  return (
    <>
      <Wrapper>
        <Real_Body>
          <Body>
            <Body_Row>
              <ColumnHeader>충전일</ColumnHeader>
              <ColumnHeaderTitle>결제 ID</ColumnHeaderTitle>
              <ColumnHeader>충전내역</ColumnHeader>
              <ColumnHeader>충전후 잔액</ColumnHeader>
            </Body_Row>

            {props.data?.fetchPointTransactionsOfLoading
              ? props.data?.fetchPointTransactionsOfLoading.map(
                  (data: any, _: any) => (
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
                  )
                )
              : "정보가 없습니다."}
          </Body>
        </Real_Body>
      </Wrapper>
    </>
  );
}
