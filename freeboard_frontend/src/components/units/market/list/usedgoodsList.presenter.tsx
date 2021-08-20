import BestList from "./best/usedgoodsBest.container";

import {
  RealWrapper,
  ItemLog,
  Wrapper,
  Title,
  Body,
  Head,
  Wrapper_Body,
  GoodsImg,
  GoddsInfo,
  GoodsName,
  GoodsRemarks,
  GoodsTag,
  SellerInfo,
  Seller,
  GoodsPrice,
  GoWrite,
  LogoTitle,
  LogoInfo,
  LogoImg,
  LogoName,
  LogoRemarks,
  LogoPrice,
  LogoTag,
  RigthBox,
  leftBox,
  InfoBox,
} from "./usedgoodsList.style";
import { IUsedGoodsList } from "./usedgoodsList.types";
export default function UsedGoodsListUI(props: IUsedGoodsList) {
  console.log(...props.basket.reverse());
  return (
    <>
      <RealWrapper>
        <Wrapper>
          <Title>베스트 상품</Title>
          <Head>
            <BestList />
          </Head>
          <Body>
            {props.data?.fetchUseditems.map((data) => (
              <Wrapper_Body key={data._id}>
                <GoodsImg
                  src={`https://storage.googleapis.com/${data.images[0]}` || ""}
                ></GoodsImg>
                <InfoBox>
                  <leftBox>
                    <GoddsInfo>
                      <GoodsName onClick={props.onClickPost(data)}>
                        {data.name}
                      </GoodsName>
                      <GoodsRemarks>{data.remarks}</GoodsRemarks>
                      <GoodsTag>{data.tags}</GoodsTag>
                      <SellerInfo>
                        <Seller>
                          {data.seller.name.replace(
                            /\B(?=(\d{5})+(?!\d))/g,
                            ","
                          )}
                        </Seller>
                      </SellerInfo>
                    </GoddsInfo>
                  </leftBox>
                  <RigthBox>
                    <GoodsPrice>
                      ₩{" "}
                      {data.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      원
                    </GoodsPrice>
                  </RigthBox>
                </InfoBox>
              </Wrapper_Body>
            ))}
          </Body>

          <GoWrite onClick={props.onClikWritePage}>상품 등록</GoWrite>
        </Wrapper>
        <ItemLog>
          <LogoTitle>오늘 본 상품</LogoTitle>
          {props.basket
            // .slice(0)
            .reverse()
            .map((data, index) => (
              <LogoInfo key={data._id} onClick={props.onClickToday(data)}>
                <LogoImg
                  src={`https://storage.googleapis.com/${data.images[0]}`}
                />
                <LogoName>{data.seller.name}</LogoName>
                <LogoRemarks>{data.remarks.substr(0, 11) + "..."}</LogoRemarks>
                <LogoPrice>
                  {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  원
                </LogoPrice>
                <LogoTag>{data.tags}</LogoTag>
              </LogoInfo>
            ))}
        </ItemLog>
      </RealWrapper>
    </>
  );
}
