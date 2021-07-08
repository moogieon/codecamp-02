import styled from "@emotion/styled"


const Btn = styled.button`
    width: 200px;
    height: 100px;

`


import { gql, useMutation } from "@apollo/client"

import { useState } from "react"

export default function ApolloPage() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [school, setschool] = useState('')

    const [aaa] = useMutation(
        gql` 
            mutation child($qqq:String, $www:Int, $eee:String ){
                createProfile(name:$qqq, age:$www, school:$eee){
                    message 
                }  
            }
        `
    )



    function onChangeName(event) {
        setName(event.target.value)

    }
    function onChaneAge(event) {
        setAge(event.target.value)
    }
    function onChangeSchool(event) {
        setschool(event.target.value)
    }
    function onClickSubmit() {
        // console.log(name)
        // console.log(age)
        // console.log(school)
        aaa({
            variables: {
                qqq: name,
                www: Number(age), //Text 아닌 Int 숫자로 표기해야 할시 
                eee: school,

            }

        })
    }



    return (
        <>
            <div></div>
            이름: <input type="text" onChange={onChangeName} /><br/><br/><br/>
            나이: <input type="text" onChange={onChaneAge} /><br/><br/><br/>
            학교: <input type="text" onChange={onChangeSchool} /><br/><br/><br/>
            <Btn onClick={onClickSubmit}>Data</Btn>
        </>


    )
}