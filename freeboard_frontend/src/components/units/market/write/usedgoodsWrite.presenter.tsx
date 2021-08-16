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
        [
          {
            color: [
              "#000000",
              "#e60000",
              "#ff9900",
              "#ffff00",
              "#008a00",
              "#0066cc",
              "#9933ff",
              "#ffffff",
              "#facccc",
              "#ffebcc",
              "#ffffcc",
              "#cce8cc",
              "#cce0f5",
              "#ebd6ff",
              "#bbbbbb",
              "#f06666",
              "#ffc266",
              "#ffff66",
              "#66b966",
              "#66a3e0",
              "#c285ff",
              "#888888",
              "#a10000",
              "#b26b00",
              "#b2b200",
              "#006100",
              "#0047b2",
              "#6b24b2",
              "#444444",
              "#5c0000",
              "#663d00",
              "#666600",
              "#003700",
              "#002966",
              "#3d1466",
              "custom-color",
            ],
          },
          { background: [] },
        ],

        ["clean"],
      ],
    },
  };
  return (
    <>
      <Wrapper>
        <Body>
          <Title>상품 등록하기</Title>
          <form onSubmit={props.handleSubmit(props.onClickRegist)}>
            <ProductName>
              <NameTitle>상품명</NameTitle>
              <Name
                placeholder={"상품명을 작성해주세요."}
                {...props.register("name")}
              />
              <Errors>{props.errors.name?.message}</Errors>
            </ProductName>

            <ProductSummary>
              <NameTitle>한줄요약</NameTitle>
              <Summary
                placeholder={"상품명을 작성해주세요."}
                {...props.register("remarks")}
              />
              <Errors>{props.errors.remarks?.message}</Errors>
            </ProductSummary>

            <ProductContents>
              <NameTitle>상품설명</NameTitle>
              <Quill
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
                {...props.register("price")}
              />
              <Errors>{props.errors.price?.message}</Errors>
            </ProductPrice>

            <ProductTag>
              <NameTitle>태그입력</NameTitle>
              <Tag
                placeholder={"#태그 #태그 #태그"}
                {...props.register("tags")}
              />
            </ProductTag>
            <LocBox>
              <Map>
                <NameTitle>거래위치</NameTitle>
                <Kakaomap setLating={props.setLating} />
              </Map>
              <LocRigth>
                <NameTitle>GPS</NameTitle>
                <Gps>
                  <Lat
                    placeholder={"위도(LAT)"}
                    readOnly
                    value={props.lating.lat || ""}
                  />
                  <Lng
                    placeholder={"경도(LNG)"}
                    readOnly
                    value={props.lating.lang || ""}
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
            <Regist type="submit">등록하기</Regist>
          </form>
        </Body>
      </Wrapper>
    </>
  );
}
