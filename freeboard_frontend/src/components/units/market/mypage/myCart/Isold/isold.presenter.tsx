import { getDate } from "../../../../../../commons/libraries/utils";
import MyPages from "../../../../../commons/mypages/mypages01.container";
import Searchbars01 from "../../../../../commons/searchbars/Searchbars01.container";

import {
  Wrapper,
  Mypage,
  Real_Body,
  Search_Wrapper,
  Search_Body,
  Body,
  Body_Row,
  TextToken,
  Column,
  ColumnTitle,
  ColumnHeader,
  ColumnBuy,
  ColumnHeaderTitle,
} from "./isold.style";
import { v4 as uuidv4 } from "uuid";
export default function ISoldUI(props: any) {
  return (
    <>
      <Wrapper>
        <Mypage>
          <MyPages />
        </Mypage>
        <Real_Body>
          <Search_Wrapper>
            <Search_Body>
              <Searchbars01
                refetch={props.refetch}
                onChangeKeyword={props.onChangeKeyword}
              />
            </Search_Body>
          </Search_Wrapper>
          <Body>
            <Body_Row>
              <ColumnHeader>번호</ColumnHeader>
              <ColumnHeaderTitle>제목</ColumnHeaderTitle>
              <ColumnHeader></ColumnHeader>
              <ColumnHeader>판매가격</ColumnHeader>
              <ColumnHeader>날짜</ColumnHeader>
            </Body_Row>

            {props.data?.fetchUseditemsISold.lenght ? (
              props.data?.fetchUseditemsISold
                .slice(0)
                .reverse()

                // .fill()
                .map((data: any, index: number) => (
                  <Body_Row key={data._id}>
                    <Column>{1 + index}</Column>
                    <ColumnTitle>
                      {data.name
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
                    <ColumnBuy>{data.buyer?._id ? "판매완료" : ""}</ColumnBuy>
                    <Column>
                      {"₩" +
                        data.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    </Column>
                    <Column>{getDate(data.createdAt)}</Column>
                  </Body_Row>
                ))
            ) : (
              <div style={{ padding: 10 }}>등록된 게시물이 없습니다.</div>
            )}
          </Body>
        </Real_Body>
      </Wrapper>
    </>
  );
}
