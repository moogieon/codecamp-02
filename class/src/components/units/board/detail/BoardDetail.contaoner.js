import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import BoardDetailUI from "./BoardDetail.presenter"
import { FETCH_BOARD } from './BoardDetail.queries'
import { route } from "next/dist/next-server/server/router"

export default function BoardDetail() {
    const router = useRouter()
    // console.log(router.query.aaa )
    const { data } = useQuery(
        FETCH_BOARD,
        {variables: { boardID: router.query.boardId} }     
    
)
 function onClickEdit(){
     router.push(`/detail/${router.query.boardId}/edit`)
 }
    return (
        <BoardDetailUI qqq={data}
        onClickEdit={onClickEdit}
        />


        
    )
}