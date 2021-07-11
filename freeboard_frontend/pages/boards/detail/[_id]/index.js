import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
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
    Youtube,
    Foot_Count,
    Foot_Btn,
    Like,
    Dislkie,
    Like_count,
    DisLike_count,
} from "../../../../styles/boards/detail/_id.styles"


const FETCH_BOARD = gql`          
query fetchBoard($boardID:ID!) {
    fetchBoard(boardId:$boardID)
    {   writer
        title
        contents
        youtubeUrl
        createdAt
        likeCount
    }
    
}
`
export default function DetailPage() {

    const router = useRouter()
    // console.log(router.query.aaa ) //질문 ,
    const { data } = useQuery(
        FETCH_BOARD,
        {
            variables: { boardID: router.query._id }

        }
    )
    console.log(data)
    const [count, setCount] = useState(0)
    function likeCount() {
        setCount(count + 1)
    }
    const [count_2, setCount_2] = useState(0)
    function likeCount_2() {
        setCount_2(count_2 + 1)
    }

    //aaa 라도 [aaa] 를 넣으면  Router.push('/detail/1') 해도 1란 숫자를 aaa로 연다는 뜻.
    return (


        <>
            <Wrapper>
                <Wrapper_Head >
                    <Img src="/boards-image/Profile.png" />
                    <Head_Wrapper>
                        <Writer>{data?.fetchBoard.writer}</Writer>
                        <Day>Date:{data?.fetchBoard.createdAt}</Day>
                    </Head_Wrapper>
                    <Img_2 src="/boards-image/File.png" />
                    <Img_3> <Img_4 src="/boards-image/Loc2.png" />
                    </Img_3>
                </Wrapper_Head>
                <Line></Line>
                <Wrapper_Body>
                    <Body_Title>{data?.fetchBoard.title}</Body_Title>
                    <Body_Img>img</Body_Img>
                    <Body_Contents>{data?.fetchBoard.contents}</Body_Contents>

                </Wrapper_Body>
                <Wrapper_Foot>
                    <Foot_Ytv>
                        <Youtube src={data?.fetchBoard.youtubeUrl} ></Youtube>
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