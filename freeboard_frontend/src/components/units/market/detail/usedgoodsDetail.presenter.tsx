import { getDate } from "../../../../commons/libraries/utils";

import Slider from "react-slick";
import DOMPurify from "dompurify";
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
  HeartCount,
  Price,
  GoddsImg,
  GoodsContents,
  Tag,
  Maps,
  ButtonBox,
  ListButton,
  PaymentButton,
  DeletButton,
  UpdateButton,
} from "./usedgoodsDetail.styles";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";

export default function UsedgoodsDetailUI(props: any) {
  const { userInfo } = useContext(GlobalContext);

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`https://storage.googleapis.com/${props.data[0]}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
              <Heart onClick={props.onClickToggle} />
              <HeartCount>{props.data?.fetchUseditem.pickedCount}</HeartCount>
            </Info_Right>
          </GoodsInfoBox>
          <Price>
            {props.data?.fetchUseditem.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            원
          </Price>
          <Slider {...settings}>
            {props.data?.fetchUseditem.images?.map((data: string) => (
              <img
                key={data}
                src={`https://storage.googleapis.com/${props.data}`}
              />
            ))}
          </Slider>

          {typeof window !== "undefined" ? (
            <GoodsContents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            ></GoodsContents>
          ) : (
            <div />
          )}
          <Tag>{props.data?.fetchUseditem.tags}</Tag>
          <Line />
          <Maps
            lating={{
              lat: props.data?.fetchUseditem?.useditemAddress?.lat,
              lang: props.data?.fetchUseditem?.useditemAddress?.lng,
            }}
          ></Maps>
          <Line />
          <ButtonBox>
            <ListButton onClick={props.onClickList}>목록으로</ListButton>

            {userInfo.name === props.data?.fetchUseditem.seller.name ? (
              <>
                <DeletButton onClick={props.onClickDelete}>
                  삭제하기
                </DeletButton>
                <UpdateButton onClick={props.onClickEdit}>
                  수정하기
                </UpdateButton>
              </>
            ) : (
              <PaymentButton onClick={props.onClickBuy}>구매하기</PaymentButton>
            )}
          </ButtonBox>
        </Body>
      </Wrapper>
    </>
  );
}
