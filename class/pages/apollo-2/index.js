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
import { useRouter } from "next/router"
const CREATE_BOARD =
gql` 
            mutation createBoard($createBoardInput:CreateBoardInput! ){
                createBoard(createBoardInput:$createBoardInput){
                    _id 
                }  
            }
        `



export default function ApolloPage() {
    const router = useRouter()

    const [writer, setWriter] = useState('')
    const [passwrod, setPasword] = useState('')
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const [createBoard] = useMutation(CREATE_BOARD )

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
            const result = await  createBoard({
                variables: {
                createBoardInput:{
                    writer:writer,
                    password:passwrod,
                    title:title,
                    contents:contents ,
                    }

                }

                })
            alert(result.data.createBoard._id)
            router.push(`detail/${result.data.createBoard._id}`)

            }catch(error){
                alert(error.message)
                
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