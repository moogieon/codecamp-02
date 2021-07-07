
import{   }from 'react';
import{ Body,
        Wrapper,
        HeadLine,
        Head,
        ImageBitmap,
        ImageBar,
        Title,
        Id,
        Line,
        Pw,
        LoginButton,
        SignUp_Wraaper,
        EmailSearch,
        PwSearch,
        SignUp,
        KakaoLogin,

                

    
                        } from '../../../styles/homework/login.styled';
export default function AppPage() {
    return(
        <>
        {/* <HeadLine>SKT</HeadLine> */}
        <Wrapper>
            
            <Head>
                <ImageBitmap></ImageBitmap> 
                <ImageBar></ImageBar>
                <Title>잇츠로드</Title>
            </Head>
            <Body>
                <Id type="text" placeholder="이메일을 입력해 주세요."/>
                <Line></Line>
                <Pw type="password" placeholder="비밀번호를 확인해 주세요."/>
                <Line></Line>
                <LoginButton>로그인</LoginButton>
                <SignUp_Wraaper>
                    <EmailSearch>이메일 찾기</EmailSearch>
                    <PwSearch>비밀번호 찾기</PwSearch>
                    <SignUp>회원가입</SignUp>
                </SignUp_Wraaper>
                <KakaoLogin>카카오톡으로 로그인</KakaoLogin>



            </Body>
        </Wrapper>
        </>
    )


}