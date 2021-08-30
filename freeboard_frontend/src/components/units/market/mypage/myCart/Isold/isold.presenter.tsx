import { getDate } from "../../../../../../commons/libraries/utils";
import Searchbars01 from "../../../../../commons/searchbars/Searchbars01.container";

import {
  Wrapper,
  Mypage,
  Real_Body,
  Search_Wrapper,
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
        <Mypage></Mypage>
        <Real_Body>
          <Search_Wrapper>
            <Searchbars01
              refetch={props.refetch}
              onChangeKeyword={props.onChangeKeyword}
            />
          </Search_Wrapper>
          <Body>
            <Body_Row>
              <ColumnHeader>번호</ColumnHeader>
              <ColumnHeaderTitle>제목</ColumnHeaderTitle>
              <ColumnHeader></ColumnHeader>
              <ColumnHeader>판매가격</ColumnHeader>
              <ColumnHeader>날짜</ColumnHeader>
            </Body_Row>

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
