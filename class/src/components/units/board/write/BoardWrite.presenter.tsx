import {ChangeEvent} from 'react'
import {Btn,
        Contents,
} from "./BoardWrite.styles";
interface IProps {
    onChangeInputs:(event: ChangeEvent<HTMLInputElement>)=> void
    onClickSubmit:()=>void
    onClickEdit:()=> void
    active:boolean
    isEdit?:boolean
    data:any
    
}
export default function BoardWriteUI(props:IProps) {
    return (
        <>
            <div>
            작성자: <input type="text" name='writer' onChange={props.onChangeInputs} defaultValue={props.data?.fetchBoard.writer} readOnly={props.data?.fetchBoard.writer}/>
            비밀번호: <input type="password" name='password' onChange={props.onChangeInputs}  /><br /><br /><br />
            글제목: <input type="text" name='title' onChange={props.onChangeInputs} defaultValue={props.data?.fetchBoard.title}/><br /><br /><br />
            글내용<br/> <Contents   type="text" name='contents' onChange={props.onChangeInputs} defaultValue={props.data?.fetchBoard.contents}/><br /><br />
            {/* <Btn onClick={props.onClickSubmit} active={props.active}  >게시물 등록{props.isEdit? ' '+"수정하기":'하기'}</Btn> */}
            {!props.isEdit && <Btn onClick={props.onClickSubmit} active={props.active}  >게시물 등록하기</Btn>}
            {props.isEdit && <Btn onClick={props.onClickEdit} active={props.active}  >게시물 수정하기</Btn>}
            </div>
        </>



    )
}