
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.contaoner";



export default function DetailPage(){
    return(

        <BoardDetail/>
        // <Board_Comment/>
        // <Board_CommenList/>
        
    )

}
// import styled from "@emotion/styled/"



// import { gql, useQuery } from "@apollo/client"
// import { useRouter } from "next/router"
// const FETCH_BOARD =  gql`          
// query fetchBoard(      $boardID:ID!) {
//     fetchBoard(boardId:$boardID)
//     {   writer
//         title
//         contents
//     }
    
// }
// `
// export default function DetailPage() {

//     const router = useRouter()
   // console.log(router.query.aaa )
//     const {data} = useQuery(
//         FETCH_BOARD,
//         {
//             variables:{ boardID: router.query.boardId }

//         }    
//     )
//     console.log(data)

//     aaa 라도 [aaa] 를 넣으면  Router.push('/detail/1') 해도 1란 숫자를 aaa로 연다는 뜻.
//     return (
//         <>
//             <div>작성자:{data?.fetchBoard.writer}</div>
//             <div>글제목:{data?.fetchBoard.title}</div>
//             <div>글내용:{data?.fetchBoard.contents}</div>
            
//         </>   
    
//      /* <div>상세보기{router.query.aaa}화면입니다.</div> */
//     )


// }