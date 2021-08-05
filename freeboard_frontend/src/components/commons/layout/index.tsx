import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";

import { useState, useEffect } from "react";
import moment from "moment";
const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin: 0px auto;
  background-color: black;
  color: white;
`;
const Body = styled.div`
  /* margin: 0px auto; */
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;
const SideMenu = styled.div`
  width: 993px;
  height: 82px;
  padding: 21px;
  margin: 0 auto 10px;
  background-color: black;
`;

const Time = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  word-spacing: 4px;
  line-height: 1; //! ?? 이게 뭐지
  font-size: 40px;
  color: white;
  font-family: Time;
`;
const Footer = styled.div``;

export default function Layout(props: any) {
  let timer: any = null;
  const [time, setTime] = useState(moment());
  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div>
        <LayoutHeader />
      </div>
      <div>
        <LayoutBanner />
      </div>
      <div>
        <LayoutNavigation />
        <Wrapper>
          <SideMenu>
            <Time>{time.format("YY.MM.DD HH.mm.ss")}</Time>
          </SideMenu>

          {/* 21.7.25 12:00PM */}
        </Wrapper>

        <BodyWrapper>
          <Body>{props.children}</Body>
        </BodyWrapper>
        <Footer>
          <LayoutFooter />
        </Footer>
      </div>
    </>
  );
}
