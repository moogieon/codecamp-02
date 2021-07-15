import styled from "@emotion/styled/"
interface IProps{
    active:boolean
}

export const Btn = styled.button`
    
    width: 200px;
    height: 100px;
    margin-left: 150px;
    
    cursor: ${(props:IProps) => props.active ? 'pointer' : 'unsetn'};
    color: ${(props:IProps) => props.active ? 'blue' : 'red'}; // color: yellow;
    font-size: 21px;
   
    background-color: ${(props: IProps) => props.active ? 'whitesmoke ' : 'grey'};
`
export const Contents = styled.textarea`
    width: 500px;
    height: 500px;
    font-size: 21px;
`