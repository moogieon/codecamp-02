import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {CREATE_BOARD}from './BoardWrite.queries'
import BoardNewUI from "./BoardWrite.presenter"

export default function BoardWrite() {


    const router = useRouter()

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [iderror, setIderror] = useState('')
    const [pwerror, setPwerror] = useState('')
    const [ttl, setTtl] = useState('')
    const [contents, setContets] = useState('')
    const [ttlerror, setTtlerror] = useState('')
    const [contentserror, setContetserror] = useState('')
    const [ytv, setYtv] = useState('')

    const [createBoard] = useMutation(CREATE_BOARD) // mutation(고정) post (이름) //
    // $BoradInput (이름) : CreateBoardInput(API 고정)
    // createBoard(API 고정)  
    const [active, setActive] = useState(false)


    function loginId(event) {
        setId(event.target.value)
        setActive(event.target.value && pw && ttl  && contents  ? true : false)
    }

    function loginPw(event) {
        setPw(event.target.value)
        setActive(id !== "" && event.target.value !== "" && ttl !== "" && contents !== "" ? true : false)
    }
    function userTitle(event) {
        setTtl(event.target.value)
    }
    function userContents(event) {
        setContets(event.target.value)
        setActive(id !== "" && pw !== "" && event.target.value !== "" && contents !== "" ? true : false)
    }
    function usserYoutybe(event) {
        setYtv(event.target.value)
        setActive(event.target.value !== "" && pw !== "" && ttl !== "" && id !== "" ? true : false)
    }



    async function regist() {
        if (id === '') {
            setIderror('내용을 입력해주세요.')
            //  alert('아이디를 입력해 주세요.')
        }
        if (pw === '') {
            setPwerror('내용을 입력해주세요.')
            //alert('비밀번호를 입력해 주세요.')
        }
        if (ttl === '') {
            setTtlerror('내용을 입력해주세요.')
            //  alert('제목을 입력해 주세요.')
        }
        if (contents === '') {
            setContetserror('내용을 입력해주세요.')
            // alert('내용을 입력해 주세요.')
        }
        if (id !== '') {
            setIderror('')

        }
        if (pw !== '') {
            setPwerror('')
        }
        if (ttl !== '') {
            setTtlerror('')
        }
        if (contents !== '') {
            setContetserror('')
            // alert('내용을 입력해 주세요.')

        }
        console.log("ASDASD")
        try {
            const result = await createBoard(
                {
                    variables: {
                        // 변수이름은 마음 대로 ex) aaa:seller
                        createBoardInput: {
                            writer: id,
                            password: pw,
                            title: ttl,
                            contents: contents,
                            youtubeUrl: ytv
                            //왼쪽 객체들은 API 양식 그대로  오른쪽은 usestate('') 변수                        
                        }


                    }
                })
            console.log("ASDASD")
            console.log(result.data.createBoard._id)
            // alert("등록 완료")
            router.push(`detail/${result.data.createBoard._id}`)
        } catch (error) {
            console.log(error)
        }
        // (이름) useMutation 함수 이름

    }


    return (
            <BoardNewUI 
            ChangeWriter={loginId}
            ChangePassword={loginPw}
            ChangeTitle={userTitle}
            ChangeContntsr={userContents}
            ChangeYoutube={usserYoutybe}
            ChangeRegist = {regist}
            error1={iderror}
            error2={pwerror}
            error3={ttlerror}
            error4={contentserror}
            clickButton={active}
            
            />

                

        )

}