import{
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
    Youtube,
    Foot_Count,
    Foot_Btn,
    Like,
    Dislkie,
    Like_count,
    DisLike_count,



}from'./BoardDetail.style'

export default function BoardDetailUI(props){


        return(
            <>
            <Wrapper>
                <Wrapper_Head >
                    <Img src="/boards-image/Profile.png" />
                    <Head_Wrapper>
                        <Writer>{props.ondata?.fetchBoard.writer}</Writer>
                        <Day>Date:{props.ondata?.fetchBoard.createdAt}</Day>
                    </Head_Wrapper>
                    <Img_2 src="/boards-image/File.png" />
                    <Img_3> <Img_4 src="/boards-image/Loc2.png" />
                    </Img_3>
                </Wrapper_Head>
                <Line></Line>
                <Wrapper_Body>
                    <Body_Title>{props.ondata?.fetchBoard.title}</Body_Title>
                    <Body_Img>img</Body_Img>
                    <Body_Contents>{dprops.ondata?.fetchBoard.contents}</Body_Contents>

                </Wrapper_Body>
                <Wrapper_Foot>
                    <Foot_Ytv>
                        <Youtube src={props.ondata?.fetchBoard.youtubeUrl} ></Youtube>
                    </Foot_Ytv>

                    <Foot_Btn>

                        <Like onClick={likeCount} />
                        <Dislkie onClick={likeCount_2} />
                    </Foot_Btn>
                    <Foot_Count>
                        <Like_count>{count}</Like_count>
                        <DisLike_count>{count_2}</DisLike_count>
                    </Foot_Count>
                </Wrapper_Foot>

            </Wrapper>
        </>

        )
}