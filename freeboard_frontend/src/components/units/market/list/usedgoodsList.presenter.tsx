import {
  Wrapper,
  Body,
  Head,
  Wrapper_Body,
  GoodsName,
  GoodsRemarks,
  GoodsContents,
  GoodsPrice,
} from "./usedgoodsList.style";
export default function UsedGoodsListUI(props) {
  return (
    <>
      <Wrapper>
        <Head></Head>
        <Body>
          {props.data?.fetchUseditems.map((data, index) => (
            <Wrapper_Body key={data._id}>
              <GoodsName>{data.name}</GoodsName>
              <GoodsRemarks>{data.remarks}</GoodsRemarks>
              <GoodsContents>{data.contents}</GoodsContents>
              <GoodsPrice>{data.price}</GoodsPrice>
            </Wrapper_Body>
          ))}
        </Body>
      </Wrapper>
    </>
  );
}
