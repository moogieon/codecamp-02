import styled from "@emotion/styled"

const Div = styled.div `
    font-size: 50px;
`

export default function State2Page (){

    let count = 1
    function 함수 (){
        count = count+1
        document.getElementById("aaa").innerText = count}




    return(
        <>
            <Div id="aaa">{count}</Div>
            <button onClick={함수} >+1</button>
        </>


    )
}