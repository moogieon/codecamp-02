import { getDate } from "../../../../../commons/libraries/utils";
import MyPages from "../../../../commons/mypages/mypages01.container";
import {
  Wrapper,
  Mypage,
  Search_Wrapper,
  Real_Body,
  Body,
  Body_Row,
  Column,
  ColumnTitle,
  ColumnHeader,
  ColumnBuy,
  ColumnHeaderTitle,
} from "./isold.style";
export default function ISoldUI(props: any) {
  return (
    <>
      <Wrapper>
        <Mypage>
          <MyPages />
        </Mypage>
        <Real_Body>
          <Search_Wrapper></Search_Wrapper>
          <Body_Row>
            <ColumnHeader>번호</ColumnHeader>
            <ColumnHeaderTitle>제목</ColumnHeaderTitle>
            <ColumnHeader></ColumnHeader>
            <ColumnHeader>판매가격</ColumnHeader>
            <ColumnHeader>날짜</ColumnHeader>
          </Body_Row>
          <Body>
            {props.data?.fetchUseditemsISold
              .slice(0)
              .reverse()

              // .fill()
              .map((data: any, index: number) => (
                <Body_Row key={data._id}>
                  <Column>{31 - index}</Column>
                  <ColumnTitle>{data.name}</ColumnTitle>
                  <ColumnBuy>{data.buyer?._id ? "판매완료" : ""}</ColumnBuy>
                  <Column>
                    {"₩" +
                      data.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  </Column>
                  <Column>{getDate(data.createdAt)}</Column>
                </Body_Row>
              ))}
          </Body>
        </Real_Body>
      </Wrapper>
    </>
  );
}
