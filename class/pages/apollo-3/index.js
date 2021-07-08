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
    const [seller, setSellr] = useState('')
    const [name, setName] = useState('')
    const [detail, setDetail] = useState('')
    const [price, setPrice] = useState('')

    const [product] = useMutation(
        gql`
            mutation  sellers($aaa:String, $bbb:CreateProductInput!){
                createProduct(seller:$aaa, createProductInput: $bbb){
                
                    message
                }

            }
        
        `
    )



    function onChangeSeller(event) {
        setSellr(event.target.value)

    }
    function onChangeProductsName(event) {
        setName(event.target.value)
    }
    function onChangeProductsDetail(event) {
        setDetail(event.target.value)
    }

    function onChangeProductsPrice(event) {
        setPrice(event.target.value)
    }

    async function onClickSubmit() {
        const result = await product({
            variables:{
            aaa: seller,
            bbb: {
                name: name,
                detail: detail,
                price: Number(price),
                }
            }
        })
        console.log(result)
    }

    



    return (
        <>
            <div></div>
            판매자: <input type="text" onChange={onChangeSeller} />
            이름:<input type="text" onChange={onChangeProductsName} /><br /><br /><br />
            
            상세내용:<br />
            <Contents type="text" onChange={onChangeProductsDetail} /><br /><br />
            가격: <input type="text" onChange={onChangeProductsPrice} /><br /><br /><br />
            
            <Btn onClick={onClickSubmit}>게시물 등록</Btn>
        </>


    )
}