import {getDate} from '../../src/commons/libraries/utils'
import { useQuery, gql, useMutation } from '@apollo/client'


const FETCH_BOARD = gql`
        query fetchBoard{
            fetchBoards
            { 
            _id
            writer
            title
            contents
            createdAt
            }

        }

`
const DELETE_BOARD= gql`
        mutation    deleteBoard(         $aaa: ID!){
                    deleteBoard(boardId: $aaa)
                    
        }
`

import styled from '@emotion/styled/'

const Row = styled.div`
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid gray;
    display: flex;

    :hover:not(:nth-of-mask-type(1)){
        background-color: lightgray;
    }
`


const Column = styled.div`
    width: 20%;
`
export default function Map3Page() {
    const{data} =useQuery(FETCH_BOARD)
    // console.log(data)
    const[deleteBoard]=useMutation(DELETE_BOARD)
    async function onClickDelete(event){
        alert("해당 글을 삭제 합니다.")
        try{
            await deleteBoard({
                variables:{
                    aaa:event.target.id
                
                },
                refetchQueries:[{query:FETCH_BOARD}]
    
            })
            alert("삭제가 완료되었습니다.")
            
        }catch(error){
        alert(error.message)
        }
    }
    
    return (

        <div>
            <Row>
                <Column><input type="checkbox"/></Column>    
                {/* <Column>번호</Column> */}
                <Column>작성자</Column>    
                <Column>제목</Column>    
                <Column>년/월/일</Column>    
            </Row> 
            {data?.fetchBoards.map((data ,index)=>(
                <Row key={data._id}>
                    <Column> <input type="checkbox" /></Column>
                    {/* <Column>{index}</Column> */}
                    <Column>{data.writer}</Column>
                    <Column>{data.title}</Column>
                    <Column>{getDate(data.createdAt)}</Column>
                    <Column><button id={data._id} onClick={onClickDelete}>삭제하기</button></Column>
                </Row>   
                
            ))}
            

        </div>


    )

}
/* <Column>{new Date (data.createdAt).getFullYear() }-
                            {String(new Date(data.createdAt).getMonth()+1).padStart(2,'0')}-
                            {String(new Date(data.createdAt).getDate()).padStart(2,'0')}
                            {String(new Date(data.createdAt).getTimezoneOffset())}
                            


                    </Column> */