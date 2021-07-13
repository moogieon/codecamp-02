import { useRouter } from "next/router"
import { useState } from "react"
import {useQuery } from "@apollo/client"
export default function BoardDetail(){

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

    return(
        <BoardDetailUI onData={data}/>
    )
}