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
  ProductPrice,
  Price,
  ProductTag,
  Tag,
  NameTitle,
  SummaryTitle,
  ContentsTitle,
  PriceTitle,
  TagTitle,
  LocBox,
  UploadBox,
  RadioBox,
} from "./usedgoods.styles";

export default function UsedGoodsUI() {
  return (
    <>
      <Wrapper>
        <Body>
          <Title>상품 등록하기</Title>
          <ProductName>
            <NameTitle></NameTitle>
            <Name />
          </ProductName>
          <ProductSummary>
            <SummaryTitle></SummaryTitle>
            <Summary />
          </ProductSummary>
          <ProductContents>
            <ContentsTitle></ContentsTitle>
            <Contents />
          </ProductContents>
          <ProductPrice>
            <PriceTitle></PriceTitle>
            <Price />
          </ProductPrice>
          <ProductTag>
            <TagTitle></TagTitle>
            <Tag />
          </ProductTag>
          <LocBox>거래위치</LocBox>
          <UploadBox>사진</UploadBox>
          <RadioBox></RadioBox>
        </Body>
      </Wrapper>
    </>
  );
}
