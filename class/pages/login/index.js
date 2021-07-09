import { useState } from "react"


export default function LoginPage() {

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [iderror, setIderror] = useState('')
    const [pwerror, setPwerror] = useState('')
    function aaa(event) {

        setId(event.target.value)
    }
    function bbb(event) {

        setPw(event.target.value)
    }
    function ccc() {
        if (id === '') {
            setIderror("아이디를 입력해 주세요.")

        }
        else if (pw === '') {
            setPwerror('비밀번호를 입력해 주세요.')
        }
        else {
            alert("로그인중입니다.")
        }

        //! 통신프로그램을 이용해서 
        //! id,password 백엔드컴퓨터에 API(만든 로그인함수)에 전송하기 


    }


    return (

        <div>
            <h1>로그인</h1>
            <div>아이디</div>
            <input onChange={aaa} type="test" ></input>
            <div>{iderror}</div>
            <div>비밀번호</div>
            <input onChange={bbb} type="password" ></input>
            <div>{pwerror}</div>
            <button onClick={ccc}>로그인하기</button>
        </div>

    )
}
