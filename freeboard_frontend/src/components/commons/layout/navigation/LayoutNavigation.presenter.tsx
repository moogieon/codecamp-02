import {
  Wrapper,
  StickHeader,
  Header,
  Stick_1,
  Stick_2,
  FreeBoard,
  UsedGoods,
  MyPage,
  Text,
} from "./LayoutNavigation.styes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function LayoutNavigationUI(props: any) {
  return (
    <>
      <StickHeader>
        <Stick_1>HOME</Stick_1>
        <Stick_2>CART</Stick_2>
      </StickHeader>
      <Wrapper>
        <Header>
          <Text>
            <FreeBoard onClick={props.onclickFreeBoard}>자유게시판</FreeBoard>
          </Text>
          <Text>
            <UsedGoods onClick={props.onclickUsedGoods}>중고거래</UsedGoods>
          </Text>
          <Text>
            <MyPage onClick={props.onClickMyPage}>내 정보</MyPage>
          </Text>
        </Header>
      </Wrapper>
    </>
  );
}
