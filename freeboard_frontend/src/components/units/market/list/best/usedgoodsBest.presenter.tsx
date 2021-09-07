// import { useRouter } from 'next/rou
import {
  Wrapper,
  TopBox,
  BestProductBox,
  TopProductImg,
  TopProductInfo,
  TopName,
  TopInfoRemarks,
  TopInfoPrice,
  TopInfoEtc,
  TopInfoLeft,
  TopInfoRight,
  HeartToggle,
  ToggleCount,
} from "./usedgoodsBest.style";

export default function BestListUI(props: any) {
  return (
    <Wrapper>
      <TopBox>
        {props.data?.fetchUseditemsOfTheBest.map((data: any) => (
          <BestProductBox key={data._id} onClick={props.onClickGoods(data._id)}>
            <TopProductImg
              src={`https://storage.googleapis.com/${data.images[0]}` || ""}
            />
            <TopProductInfo>
              <TopName>{data.name}</TopName>
              <TopInfoEtc>
                <TopInfoLeft>
                  <TopInfoRemarks>{data.remarks}</TopInfoRemarks>
                  <TopInfoPrice>
                    ₩{" "}
                    {data.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    원
                  </TopInfoPrice>
                </TopInfoLeft>
                <TopInfoRight>
                  <HeartToggle src="/market/list/heart.png" />
                  <ToggleCount>{data.pickedCount}</ToggleCount>
                </TopInfoRight>
              </TopInfoEtc>
            </TopProductInfo>
          </BestProductBox>
        ))}
      </TopBox>
    </Wrapper>
  );
}
