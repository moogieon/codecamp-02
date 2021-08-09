import { getDate } from "../../../../commons/libraries/utils";
import {
  Wrapper,
  Body,
  Body_Head,
  User_Img,
  UserInfoBox,
  UserInfo,
  User,
  Date,
  HeadImgBox,
  FileImg,
  LocImg,
  Line,
  GoodsInfoBox,
  Info_Left,
  Summary,
  Titel,
  Info_Right,
  Heart,
  Price,
  GoddsImg,
  GoodsContents,
  Tag,
  Map,
  ButtonBox,
  ListButton,
  PaymentButton,
} from "./usedgoodsDetail.styles";
import { IUsedgoodsDetailUIProps } from "./usedgoodsDetail.types";

export default function UsedgoodsDetailUI(props: IUsedgoodsDetailUIProps) {
  return (
    <>
      <Wrapper>
        <Body>
          <Body_Head>
            <UserInfoBox>
              <User_Img src="/market/detail/profile.png" />
              <UserInfo>
                <User>{props.data?.fetchUseditem.seller.name}</User>
                <Date>{getDate(props.data?.fetchUseditem.createdAt)}</Date>
              </UserInfo>
            </UserInfoBox>
            <HeadImgBox>
              <FileImg src="/market/detail/file.png" />
              <LocImg src="/market/detail/loc.png" />
            </HeadImgBox>
          </Body_Head>
          <Line />
          <GoodsInfoBox>
            <Info_Left>
              <Summary>{props.data?.fetchUseditem.remarks}</Summary>
              <Titel>{props.data?.fetchUseditem.name}</Titel>
            </Info_Left>

            <Info_Right>
              <Heart />
            </Info_Right>
          </GoodsInfoBox>
          <Price>
            {props.data?.fetchUseditem.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            원
          </Price>
          {props.data?.fetchUseditem.images?.map((data: string) => (
            <GoddsImg
              key={data}
              src={`https://storage.googleapis.com/${data}`}
            />
          ))}

          <GoodsContents>{props.data?.fetchUseditem.contents}</GoodsContents>
          <Tag>{props.data?.fetchUseditem.tags}</Tag>
          <Line />
          <Map></Map>
          <Line />
          <ButtonBox>
            <ListButton onClick={props.onClickList}>목록으로</ListButton>
            <PaymentButton>구매하기</PaymentButton>
          </ButtonBox>
        </Body>
      </Wrapper>
    </>
  );
}
