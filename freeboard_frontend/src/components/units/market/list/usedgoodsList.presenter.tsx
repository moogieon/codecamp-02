import {
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
} from "./usedgoodsList.style";
import { IUsedGoodsList } from "./usedgoodsList.types";
export default function UsedGoodsListUI(props: IUsedGoodsList) {
  return (
    <>
      <Wrapper>
        <Title>베스트 상품</Title>
        <Head>
          <GoWrite onClick={props.onClikWritePage}>상품 등록</GoWrite>
        </Head>
        <Body>
          {props.data?.fetchUseditems.map((data, index) => (
            <Wrapper_Body key={data._id}>
              <GoodsImg
                src={`https://storage.googleapis.com/${data.images}`}
              ></GoodsImg>
              <GoddsInfo>
                <GoodsName id={data._id} onClick={props.onClickPost}>
                  {data.name}
                </GoodsName>
                <GoodsRemarks>{data.remarks}</GoodsRemarks>
                <GoodsTag>{data.tags}</GoodsTag>
                <SellerInfo>
                  <Seller></Seller>
                </SellerInfo>
              </GoddsInfo>
              <GoodsPrice>ss</GoodsPrice>
            </Wrapper_Body>
          ))}
        </Body>
      </Wrapper>
    </>
  );
}
