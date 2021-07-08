
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
        Error,
        Img,
        ImgeBox,

                

    
                        } from '../../../styles/homework/login.styled';

import{useState } from "react"    






export default function AppPage() {


    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    
    
    function aaa(event) {
    
        setId(event.target.value)
    }
    function bbb(event) {
        setPw(event.target.value)
    }
    
    
    const [iderror, setIderror] = useState('')
    const [pwerror, setPwerror] = useState('')
    
    
    function ccc() {
        if (id === '') {
            setIderror("아이디를 입력해 주세요.")
    
        }
        if (pw === '') {
            setPwerror('비밀번호를 입력해 주세요.')
        }
        
        if(id !== ''){
            setIderror("")
            
        }
        if (pw !== '') {
            setPwerror('')
        }
    }   
    
    return(
        <>
        {/* <HeadLine>SKT</HeadLine> */}
        <Wrapper>
            
            <Head>
                <ImgeBox>
                    <ImageBar></ImageBar>
                    <ImageBitmap></ImageBitmap> 
                </ImgeBox>
                
                
                <Title>잇츠로드</Title>
            </Head>
            <Body>
                <Id onChange={aaa} type="text" placeholder="이메일을 입력해 주세요."/>
                <Line></Line>
                <Error>{iderror}</Error>
                <Pw onChange={bbb} type="password" placeholder="비밀번호를 확인해 주세요."/>
                <Line></Line>
                <Error>{pwerror}</Error>
                <LoginButton onClick={ccc} name="로그인">로그인</LoginButton>
                <SignUp_Wraaper>
                    <EmailSearch>이메일 찾기</EmailSearch>
                    <PwSearch>비밀번호 찾기</PwSearch>
                    <SignUp>회원가입</SignUp>
                </SignUp_Wraaper>
                <KakaoLogin> 
                    <Img src="/homework-image/kakao logo.png"/>
                    <div>카카오톡으로 로그인</div>
                </KakaoLogin>



            </Body>
        </Wrapper>
        </>
    )


}