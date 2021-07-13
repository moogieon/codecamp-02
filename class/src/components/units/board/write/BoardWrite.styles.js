import styled from "@emotion/styled/"
export const Btn = styled.button`
    width: 200px;
    height: 100px;
    margin-left: 150px;
    cursor: ${(props) => props.active ? 'pointer' : 'unsetn'};
    color: ${(props) => props.active ? 'blue' : 'red'}; // color: yellow;
    font-size: 21px;
    background-color: ${(props) => props.active ? 'whitesmoke ' : 'grey'};
`
export const Contents = styled.textarea`
    width: 500px;
    height: 500px;
    font-size: 21px;
`