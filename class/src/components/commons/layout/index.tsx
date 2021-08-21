import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
const Body = styled.div`
  background-color: white;
  padding-left: 100px;
  /* height: 700px; */
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const SideMenu = styled.div`
  background-color: blue;
  height: 500px;
  position: fixed;
`;

export default function Layout(props: any) {
  return (
    <>
      <div>
        <LayoutHeader />
      </div>
      <SideMenu>
        SideMenu
        <div>Home</div>
        <div>Freeboard</div>
      </SideMenu>
      <div>
        <LayoutBanner />
      </div>
      <div>
        <LayoutNavigation />
      </div>
      <Wrapper>
        <Body>{props.children}</Body>
      </Wrapper>

      <div>
        <LayoutFooter />
      </div>
    </>
  );
}
