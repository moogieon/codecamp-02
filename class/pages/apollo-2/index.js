import styled from "@emotion/styled"


const Btn = styled.button`
    width: 200px;
    height: 100px;
    margin-left: 150px;

`
const Contents = styled.textarea`
    width: 500px;
    height: 500px;
    font-size: 21px;
`


import { gql, useMutation } from "@apollo/client"

import { useState } from "react"

export default function ApolloPage() {
    const [writer, setWriter] = useState('')
    const [passwrod, setPasword] = useState('')
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const [boards] = useMutation(
        gql` 
            mutation child($aaa:String, $bbb:String, $ccc:String, $ddd:String ){
                createBoard(writer:$aaa, password:$bbb, title:$ccc, contents:$ddd){
                    message 
                }  
            }
        `
        
    )



    function onChangeWriter(event) {
        setWriter(event.target.value)

    }
    function onChangePassword(event) {
        setPasword(event.target.value)
    }
    function onChangeTitle(event) {
        setTitle(event.target.value)
    }

    function onChangeContents(event) {
        setContents(event.target.value)
    }

   async function onClickSubmit() {
        // console.log(name)
        // console.log(age)
        // console.log(school)
        try {
            const result = await  boards({
                variables: {
                    aaa:writer,
                    bbb:passwrod,
                    ccc:title,
                    ddd:contents ,

                }

                })
            alert(result.data.createBoard.message)

            }catch(error){
                alert(erro)
                
            }
        }



    return (
        <>
            <div></div>
            작성자: <input type="text" onChange={onChangeWriter} /> 
            비밀번호: <input type="password" onChange={onChangePassword} /><br /><br /><br />
            글제목: <input type="text" onChange={onChangeTitle} /><br /><br /><br />
            글내용:<br/>
            <Contents type="text" onChange={onChangeContents} /><br /><br />
            <Btn onClick={onClickSubmit}>게시물 등록</Btn>
        </>


    )
}