import {
  Wrapper,
  Mypage,
  Search_Wrapper,
  Real_Body,
  Body,
  Search_Body,
  HereTo,
} from "./mypagePoint.style";

import MyPages from "../../../../commons/mypages/mypages01.container";
import PointTransactions from "./pointTransactions/pointTransactions.contatiner";
import MypageSold from "./sold/mypageSold.contatiner";
import MypageBought from "./bought/mypageBought.contatiner";
import MypagePointLoading from "./pointLoading/mypagePointLoading.contatiner";

export default function MypagePointUI(props: any) {
  return (
    <>
      <Wrapper>
        <Mypage>
          <MyPages />
        </Mypage>
        <Real_Body>
          <Search_Wrapper>
            <Search_Body>
              {props.pointMenu?.map((menu: any) => (
                <>
                  <HereTo
                    key={menu.id}
                    onClick={props.onClickMenu(menu.id)}
                    active={menu.active}
                  >
                    {menu.name}
                  </HereTo>
                </>
              ))}
            </Search_Body>
          </Search_Wrapper>
          <Body>
            {props.pointMenu[0]?.active === true && <PointTransactions />}
            {props.pointMenu[1]?.active === true && <MypagePointLoading />}
            {props.pointMenu[2]?.active === true && <MypageBought />}
            {props.pointMenu[3]?.active === true && <MypageSold />}
          </Body>
        </Real_Body>
      </Wrapper>
    </>
  );
}
