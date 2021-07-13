import {
    Writer,
    
} from "./BoardDetail.styles"
export default function BoardDetailUI(props) {
    return(
        <>
        <Writer>작성자:{props.qqq?.fetchBoard.writer}</Writer>
        <div>글제목:{props.qqq?.fetchBoard.title}</div>
        <div>글내용:{props.qqq?.fetchBoard.contents}</div>
        
    </>   


        
    )
}