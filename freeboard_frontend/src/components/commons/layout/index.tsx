import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
const Body = styled.div`
  height: 1080px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SideMenu = styled.div`
  width: 993px;
  height: 82px;
  padding: 21px;
  margin: 0 auto 10px;
`;

const Time = styled.div`
  width: auto;
  height: auto;
  text-align: center;
  word-spacing: 4px;
  line-height: 1; //! ?? 이게 뭐지
  font-size: 40px;
`;
const Footer = styled.div``;

export default function Layout(props: any) {
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
            <Time>21.7.25 12:00PM</Time>
          </SideMenu>
        </Wrapper>
        <Body>{props.children}</Body>

        <Footer>
          <LayoutFooter />
        </Footer>
      </div>
    </>
  );
}
