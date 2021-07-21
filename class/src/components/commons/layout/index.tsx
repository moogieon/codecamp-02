import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
const Body = styled.div`
background-Color: white;
height: 500px;

`
const Wrapper = styled.div`
 display: flex;
 flex-direction: row;
`
const SideMenu = styled.div `
    background-color: blue;
`

export default function Layout(props:any){


    return(
        <>
        <div><LayoutHeader/></div>
        <div><LayoutBanner/></div>
        <div><LayoutNavigation/></div>
        <Wrapper>
            <SideMenu>SideMenu</SideMenu>
            <Body>{props.children}</Body>
        </Wrapper>
        
        <div><LayoutFooter/></div>
        </>
    )
}