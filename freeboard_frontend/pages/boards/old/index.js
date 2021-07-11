
import {
    Wrapper, 
    Wrapper_Head,
    Wrapper_Body,
    Wrapper_Foot,
    Img,
    Img_2,
    Img_3,
    Img_4,
    Head_Wrapper,
    Writer,
    Day,
    Line,
    Body_Title,
    Body_Img,
    Body_Contents,
    Foot_Ytv,
    Foot_Btn,
    Like,
    Dislkie,
}from "../../../styles/boards/detail/_id.styles"

export default function TestPage() {


    
    return (
    
    
            <>
                <Wrapper>
                    <Wrapper_Head >
                        <Img src="/boards-image/Profile.png"/>
                        <Head_Wrapper>
                            <Writer>{data?.fetchBoard.writer}</Writer>
                            <Day>Date:2021.02.18</Day>
                        </Head_Wrapper>  
                        <Img_2 src="/boards-image/File.png"/>   
                        <Img_3> <Img_4 src="/boards-image/Loc2.png"/>
                        </Img_3>
                       

                    </Wrapper_Head>
                    <Line></Line>
                    <Wrapper_Body>
                        <Body_Title>{data?.fetchBoard.title}</Body_Title>
                        <Body_Img>img</Body_Img>
                        <Body_Contents>{data?.fetchBoard.contents}</Body_Contents>
                        
                    </Wrapper_Body>
                    <Wrapper_Foot>
                        <Foot_Ytv>{data?. fetchBoard. youtubeUrl}</Foot_Ytv>
                        <Foot_Btn>
                            <Like />
                            
                            <Dislkie/>
                        </Foot_Btn>
                    </Wrapper_Foot>

                </Wrapper>
            </>
        )
    }