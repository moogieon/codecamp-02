import { useRouter } from "next/router"
import { useState } from "react"
import { useMutation, useQuery } from "@apollo/client"
import { FETCH_BOARD, DELETE_BOARD } from './BoardDetail.queries'
import BoardDetailUI from './BoardDetail.presenter'
import { FETCH_BOARDS } from "../list/BoardList.queries"
export default function BoardDetail() {

    const router = useRouter()
    console.log(router);
    // console.log(router.query.aaa ) //질문 ,
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const { data } = useQuery( FETCH_BOARD,{
        variables: { boardID: router.query._id }
    } )
    console.log(data)
    // const [count, setCount] = useState(0)
    // function likeCount() {
    //     setCount(count + 1)
    // }
    // const [count_2, setCount_2] = useState(0)
    // function likeCount_2() {
    //     setCount_2(count_2 + 1)
    // }
    function onClickMove() {
        router.push('/boards')
    }
    async function onClickDelete() {
        try {
            await deleteBoard({ variables: { boardId: router.query._id } })
            alert('삭제 완료')
            router.push('/boards')
        } catch (error) {
            alert(error.message)
        } console.log(data)
    }
    function onClickEdit(){
        router.push(`/boards/detail/${router.query._id}/edit`)
    }
    return (
        <BoardDetailUI
            onData={data}
            onClickDelete={onClickDelete}
            onClickMove={onClickMove}
            onClickEdit={onClickEdit}

        />
    )
}