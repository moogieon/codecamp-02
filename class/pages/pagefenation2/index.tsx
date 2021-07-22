import { gql, useQuery } from "@apollo/client"
import { IQuery } from "../../src/commons/types/generated/types"
import styled from "@emotion/styled/"
import { useState } from "react"



const FETCH_BOARDS =gql`
    query fethchBoards($page:Int){
        fetchBoards(page:$page){
            _id
            writer
            title
        }
    }

`

const Column =styled.span`  
    margin: 0px 50px;
    font-size: 27px;
`
const Page = styled.span`
    margin: 0px 10px;
    cursor: pointer;
    background-color: #f1e7e77d;
    :hover{
        background-color: #a58e6c;
    }
    font-size: 20px;
`

export default function pagefenationPage(){
const [startpage,setStartPage]= useState(1)
const {data, refetch } = useQuery<IQuery>(FETCH_BOARDS, {
    variables:{page:startpage}})




function onClickPage(event:any){
        
        refetch({page:Number(event.target.id)});

}
function onclickPrevPage (){
    setStartPage((prev) => prev -10)  // 기존꺼 = 기존꺼 -10 임시 공간에 있는 것까지 뽑아서 쓰기때문에 안전  
}
function onclickNextPage (){
    setStartPage((prev) => prev +10)
}
    return(
      
        <div>
            {data?.fetchBoards.map((data) =>(
                <div key={data._id}>
                    <Column>{data.writer}</Column>
                    <Column>{data.title}</Column>
                </div>
          ))}
          <Page onClick={onclickPrevPage}>이전</Page>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index)=>(
            <Page key={startpage+index} onClick={onClickPage} id={startpage+index}>{startpage+index}</Page>
        ))}       
        <Page onClick={onclickNextPage}>다음</Page>
        </div>
        
    );
}