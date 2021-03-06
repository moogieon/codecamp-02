import styled from '@emotion/styled'
const Wrapper =styled.div`
width: 300px;
height: 100px;
border-bottom: 5px solid blueviolet;
display: flex;
padding-bottom: 10px;

`
const Number=styled.div`
font-size: 20px;
color: blue;
width: 20px;
background-color: cyan;
`
const Title =styled.div`
font-size: 20px;
color: chocolate;
`


const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
]


export default function MpaPage() {


    return (

        <div>
            {fruits
            .filter(data => data.number %2=== 0  )
            .map(data =>(
                <Wrapper>
                    <Number>{data.number}.</Number>
                    <Title>    {data.title}</Title>
                </Wrapper>
            ))}

        </div>

    )
}