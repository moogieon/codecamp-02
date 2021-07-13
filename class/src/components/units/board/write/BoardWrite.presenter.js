import {Btn,
        Contents,
} from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
    return (
        <>
            <div></div>
            작성자: <input type="text" onChange={props.aaa} />
            비밀번호: <input type="password" onChange={props.bbb} /><br /><br /><br />
            글제목: <input type="text" onChange={props.ccc} /><br /><br /><br />
            글내용<br />
            <Contents type="text" onChange={props.ddd} /><br /><br />
            <Btn onClick={props.eee} active={props.fff}  >게시물 등록</Btn>
        </>



    )
}