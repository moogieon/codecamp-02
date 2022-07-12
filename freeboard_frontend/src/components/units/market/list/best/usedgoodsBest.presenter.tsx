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
                  <TopInfoRight>
                    <TopInfoPrice>
                      ₩{" "}
                      {data.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      원
                    </TopInfoPrice>
                    <div>
                      <HeartToggle src="/market_img/list/heart.png" />
                      <ToggleCount>{data.pickedCount}</ToggleCount>
                    </div>
                  </TopInfoRight>
                </TopInfoLeft>
              </TopInfoEtc>
            </TopProductInfo>
          </BestProductBox>
        ))}
      </TopBox>
    </Wrapper>
  );
}
