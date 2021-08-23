import {
  StickHeader,
  Header,
  Stick_1,
  Stick_2,
  FreeBoard,
  UsedGoods,
  MyPage,
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
      <Header>
        <h3>
          <FreeBoard onClick={props.onclickFreeBoard}>FREEBOARD</FreeBoard>
        </h3>
        <h3>
          <UsedGoods onClick={props.onclickUsedGoods}>USED GOODS</UsedGoods>
        </h3>
        <h3>
          <MyPage onClick={props.onClickMyPage}>MYPAGE</MyPage>
        </h3>
      </Header>
    </>
  );
}
