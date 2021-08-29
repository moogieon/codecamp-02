import { useContext } from "react";
import { MarketUsedItemEditPageContext } from "../../../../../pages/market/detail/[market_id]/edit";
import Kakaomap from "../../../commons/map/Map01/map.contanier";
import Uploads01 from "../../../commons/uploads/Uploads01/Uploads01.container";
import {
  Wrapper,
  Body,
  Title,
  ProductName,
  Name,
  ProductSummary,
  Summary,
  ProductContents,
  Contents,
  Quill,
  ProductPrice,
  Price,
  ProductTag,
  Tag,
  NameTitle,
  LocBox,
  Map,
  LocRigth,
  Gps,
  Lat,
  Lng,
  Address,
  AddressIn,
  AddressIn2,
  UploadBox,
  RadioBox,
  Pic1,
  Pic2,
  RadioBoxLabel,
  Regist,
  Errors,
  ButtonBox,
  QuillColor,
} from "./usedgoodsWrite.styles";
import { IUsedgoodsWriteUIProps } from "./usedgoodsWrite.types";

export default function UsedgoodsWriteUI(props: IUsedgoodsWriteUIProps) {
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, "link"],
        [{ color: QuillColor }, { background: [] }],
        ["clean"],
      ],
    },
  };
  const { isEdit, data } = useContext(MarketUsedItemEditPageContext);
  // console.log("userItem", data?.fetchUseditem.name);

  return (
    <>
      <Wrapper>
        <Body>
          <Title> {isEdit ? "상품 수정하기" : "상품 등록하기"}</Title>
          <form
            onSubmit={props.handleSubmit(
              isEdit ? props.onCilckEdit : props.onClickRegist
            )}
          >
            <ProductName>
              <NameTitle>상품명</NameTitle>
              <Name
                placeholder={"상품명을 작성해주세요."}
                defaultValue={data?.fetchUseditem.name}
                {...props.register("name")}
              />
              <Errors>{props.errors.name?.message}</Errors>
            </ProductName>

            <ProductSummary>
              <NameTitle>한줄요약</NameTitle>
              <Summary
                placeholder={"상품명을 작성해주세요."}
                defaultValue={data?.fetchUseditem.remarks}
                {...props.register("remarks")}
              />
              <Errors>{props.errors.remarks?.message}</Errors>
            </ProductSummary>

            <ProductContents>
              <NameTitle>상품설명</NameTitle>
              <Quill
                name="contents"
                defaultValue={data?.fetchUseditem.contents}
                modules={modules}
                onChange={props.onChangeContents}

                // {...props.register("contents")}
              />
              <Errors>{props.errors.contents?.message}</Errors>
            </ProductContents>

            <ProductPrice>
              <NameTitle>판매가격</NameTitle>
              <Price
                placeholder={"판매가격을 작성해주세요."}
                defaultValue={data?.fetchUseditem.price}
                {...props.register("price")}
              />
              <Errors>{props.errors.price?.message}</Errors>
            </ProductPrice>

            <ProductTag>
              <NameTitle>태그입력</NameTitle>
              <Tag
                defaultValue={data?.fetchUseditem.tags}
                placeholder={"#태그 #태그 #태그"}
                {...props.register("tags")}
              />
            </ProductTag>
            <LocBox>
              <Map>
                <NameTitle>거래위치</NameTitle>
                <Kakaomap setLating={props.setLating} lating={props.lating} />
              </Map>
              <LocRigth>
                <NameTitle>GPS</NameTitle>
                <Gps>
                  <Lat
                    placeholder={"위도(LAT)"}
                    readOnly
                    value={props.lating.lat}
                  />

                  <Lng
                    placeholder={"경도(LNG)"}
                    readOnly
                    value={props.lating.lang}
                  />
                </Gps>
                <Address>
                  <NameTitle>주소</NameTitle>
                  <AddressIn></AddressIn>
                  <AddressIn2></AddressIn2>
                </Address>
              </LocRigth>
            </LocBox>
            <UploadBox>
              <NameTitle>사진 첨부</NameTitle>
              {new Array(3).fill(1).map((data, index) => (
                <Uploads01
                  key={`${data}_${index}`}
                  index={index}
                  onChangeFiles={props.onChangeFiles}
                />
              ))}
            </UploadBox>

            <RadioBox>
              <NameTitle>메인 사진 설정</NameTitle>
              <Pic1 type="radio" id="pic1" name="radio-button" />
              <RadioBoxLabel> 사진 1</RadioBoxLabel>
              <Pic2 type="radio" id="pic2" name="radio-button" />
              <RadioBoxLabel> 사진 2</RadioBoxLabel>
            </RadioBox>
            <ButtonBox>
              <Regist type="submit">{isEdit ? "수정하기" : "등록하기"}</Regist>
            </ButtonBox>
          </form>
        </Body>
      </Wrapper>
    </>
  );
}
