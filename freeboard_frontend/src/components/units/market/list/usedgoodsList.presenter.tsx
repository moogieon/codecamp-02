import InfiniteScroll from "react-infinite-scroller";
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
  LeftBox,
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
            <InfiniteScroll
              pageStart={0}
              loadMore={props.onLoadMore}
              hasMore={props.hasMore}
              useWindow={false}
              loader={
                <div className="loader" key={0}>
                  Winter is Comming ...
                </div>
              }
            >
              {props.data?.fetchUseditems.map((data) => (
                <Wrapper_Body key={data._id} onClick={props.onClickPost(data)}>
                  <GoodsImg
                    src={
                      data.images?.[0]
                        ? `https://storage.googleapis.com/${data.images[0]}`
                        : "/market_img/list/imageNotFound.png"
                    }
                  ></GoodsImg>
                  <InfoBox>
                    <LeftBox>
                      <GoddsInfo>
                        <GoodsName className="name">{data.name}</GoodsName>
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
                    </LeftBox>
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
            </InfiniteScroll>
          </Body>

          <GoWrite onClick={props.onClikWritePage}>상품 등록</GoWrite>
        </Wrapper>
        <ItemLog>
          <LogoTitle>오늘 본 상품</LogoTitle>
          {props.basket
            .slice(0)
            .reverse()
            .map((data: any, _: any) => (
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
