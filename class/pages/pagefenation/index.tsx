import { gql, useQuery } from "@apollo/client"
import { IQuery } from "../../src/commons/types/generated/types"
import styled from "@emotion/styled/"



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

const {data, refetch } = useQuery<IQuery>(FETCH_BOARDS, {
    variables:{page:1}})



function onClickPage(event:any){
        
        refetch({page:Number(event.target.id)});

}
    return(
      
        <div>
            {data?.fetchBoards.map((data) =>(
                <div key={data._id}>
                    <Column>{data.writer}</Column>
                    <Column>{data.title}</Column>
                </div>
          ))}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data)=>(
            <Page key={data} onClick={onClickPage} id={data}>{data}</Page>
        ))}       
        </div>
        
    );
}