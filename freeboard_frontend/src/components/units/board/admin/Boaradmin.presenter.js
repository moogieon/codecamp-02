import{
    Wrapper,
    Wrapper_Head,
    Wrapper_Body,
    Board_Num,
    Board_Title,
    Board_Writer,
    Board_Date,
    Column_Title,
    Column_Num,
    Column_Writer,
    Column_Date,
    

}from'./Boaradmin.style'

export default function BoardAdminUI(props){


    return(

        <>
        <Wrapper>
            <Wrapper_Head>
                <Board_Num>번호</Board_Num>
                <Board_Title>제목</Board_Title>
                <Board_Writer>작성자</Board_Writer>
                <Board_Date>날짜</Board_Date>
            </Wrapper_Head>
            {props.onData?.fetchBoards.map((data, index) => (
            <Wrapper_Body>
                <Column_Num>{index +1}</Column_Num>
                <Column_Title>{data.title}</Column_Title>
                <Column_Writer>{data.writer}</Column_Writer>
                <Column_Date>
                    {new Date (data.createdAt).getFullYear()}-
                    {String (new Date (data.createdAt).getMonth()+1).padStart(2, '0')}-
                    {new Date (data.createdAt).getDate()}
                </Column_Date>
                
            </Wrapper_Body>
            ))}
        </Wrapper>

        </>

    )
}