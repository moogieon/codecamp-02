import { useState, } from 'react'



export default function StagePage() {
    // let count =0 
    // count = 3  
    //! 밑에 와 같지만 밑에는 react 방식의 [변수,함수]
    // const [count, setCount] = useState(0)
    // setCount(3)


    const [count, setCount] = useState(0)
    function aaa() {
        setCount(count + 1)
    }

    const [변수, 변수바꿔주는애] = useState("안녕하세요")
    function bbb( ){
        변수바꿔주는애("반갑습니다.")
    }

    const [token, setToken] = useState('000000')
    const [인증, 인증버튼] = useState(false)
    function ccc(){
        setToken(String(Math.floor(Math.random()* 1000000)).padStart(6, "0"))
        인증버튼(true)

        

    }
    
    


    return (
        <>
            <div>{count}</div>
            <button onClick={aaa}>+1</button>
            
            <div>{변수}</div>
            <button onClick={bbb}>클릭</button>

            <div>{token}</div>
            <button onClick={ccc} disabled={인증}>인증번호 받기</button>

        


    

           
        </>
    )

}

