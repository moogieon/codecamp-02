import { useRouter } from "next/router"
import { useState } from "react"
import {useMutation, useQuery } from "@apollo/client"
import {FETCH_BOARD} from './BoardDetail.queries'
import{DELETE_BOARD}from'./BoardDetail.queries'
import BoardDetailUI from './BoardDetail.presenter'
import { FETCH_BOARDS } from "../admin/Boaradmin.queries"
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
    // const [count, setCount] = useState(0)
    // function likeCount() {
    //     setCount(count + 1)
    // }
    // const [count_2, setCount_2] = useState(0)
    // function likeCount_2() {
    //     setCount_2(count_2 + 1)
    // }
    const[deleteBoard]=useMutation(DELETE_BOARD)
        async function onClickDelete(event){
            try{
                await deleteBoard({

                    variables:{
                        delete:event.traget.id
        
                    },
                    refetchQueries:[{query:FETCH_BOARDS}]
            })
            alert('삭제 완료')

            }catch(error){
                alert(error.message)
            }

          
}
    return(
        <BoardDetailUI onData={data}
                        deleteBoard ={onClickDelete} 
        
        />
    )
}