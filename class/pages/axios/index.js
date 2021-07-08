
import axios from "axios"
import { useState } from "react"
import styled from "@emotion/styled"


const Btn = styled.button`
    width: 200px;
    height: 100px;
    font-size: 20px;
`
const Title = styled.div`
    font-size: 20px;
    color: red;
    font-family: Arial, Helvetica, sans-serif;
`

export default  function AxiosPage(){

    const [data1, setData1] = useState('')
    const [data2, setData2]= useState('')

   
    const handleClickData = async () => {
            const aaa = await axios.get('https://koreanjson.com/posts/')
            console.log(aaa)
            setData1(aaa.data[5].title)
            setData2(aaa.data[5]. content)
            alert('기다리세여')

    }


    return (
        <>
            <Title>{data1}</Title>
            <hr/>
            <div>{data2}</div>
            <hr/>
            <Btn onClick={handleClickData} > 데이터 불러오기</Btn>
        </>

    );
}