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
    customPaging: function (i: any) {
      // console.log("i", props.data?.fetchUseditem.images[i]);
      return (
        <a>
          <img
            style={{ width: "20px", height: "20px" }}
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[i]}`}
          />
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
              <User_Img src="/market_img/detail/profile.png" />
              <UserInfo>
                <User>{props.data?.fetchUseditem.seller.name}</User>
                <Date>{getDate(props.data?.fetchUseditem.createdAt)}</Date>
              </UserInfo>
            </UserInfoBox>
            <HeadImgBox>
              <FileImg src="/market_img/detail/file.png" />
              <LocImg src="/market_img/detail/loc.png" />
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
            ???
          </Price>

          <div style={{ width: "500px", height: "500px" }}>
            <Slider {...settings}>
              {props.data?.fetchUseditem.images?.map((data: string) => (
                <div key={data}>
                  <GoddsImg src={`https://storage.googleapis.com/${data}`} />
                </div>
              ))}
            </Slider>
          </div>
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
            readOnly
            lating={{
              lat: props.data?.fetchUseditem?.useditemAddress?.lat || "",
              lang: props.data?.fetchUseditem?.useditemAddress?.lng || "",
            }}
          ></Maps>
          <Line />
          <ButtonBox>
            <ListButton onClick={props.onClickList}>????????????</ListButton>

            {userInfo.name === props.data?.fetchUseditem.seller.name ? (
              <>
                <DeletButton onClick={props.onClickDelete}>
                  ????????????
                </DeletButton>
                <UpdateButton onClick={props.onClickEdit}>
                  ????????????
                </UpdateButton>
              </>
            ) : (
              <PaymentButton onClick={props.onClickBuy}>????????????</PaymentButton>
            )}
          </ButtonBox>
        </Body>
      </Wrapper>
    </>
  );
}
