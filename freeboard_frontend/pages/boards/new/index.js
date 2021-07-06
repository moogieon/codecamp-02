import {
    Wrapper, Title, Header, Body, BodyWrapper, Name, Id_in, Pw_in, Rog_In1, Rog_In2
    , BodyWrapper_Title, Title_Name, Title_Name_IN, BodyWrapper_Contents, Contents_In, 
    BodyWrapper_Adress, Adress_Number, Adress_Sreach, Adress_1,Adress_2, BodyWrapper_Youtube
,Youtube_Link, Img, BodyWrapper_img, Upload_1, Upload_2, Upload_3,BodyWrapper_set 
,Set_select_1, Set_select_2, BodyFoot_button, Font, LoadButton} from '../../../styles/boards/new/BoardsNew.styles'
export default function BoardsPage() {


    return (
        <Wrapper>
            <Header></Header>
            <Body>
                <BodyWrapper>
                    <Title>게시물 등록</Title>
                    <Name>
                        <Rog_In1>
                            <Title_Name>작성자</Title_Name>
                            <Id_in type="text" placeholder="이름을 적어주세요."></Id_in>
                        </Rog_In1>
                        <Rog_In2>
                            <Title_Name>비밀번호</Title_Name>
                            <Pw_in type="password" placeholder="비밀번호를 입력해주세요"></Pw_in>
                        </Rog_In2>
                    </Name>
                    <BodyWrapper_Title>
                        <Title_Name>제목</Title_Name>
                        <Title_Name_IN type="text" placeholder="제목을 작성해주세요."></Title_Name_IN>
                    </BodyWrapper_Title>
                    <BodyWrapper_Contents>
                        <Title_Name>내용</Title_Name>
                        <Contents_In type="text" placeholder="내용을 작성해주세요."></Contents_In>
                    </BodyWrapper_Contents>
                    <BodyWrapper_Adress>
                        <Title_Name>주소</Title_Name>
                        <Adress_Number></Adress_Number>
                        <Adress_Sreach>우편번호 검색</Adress_Sreach>
                        <Adress_1></Adress_1>
                        <Adress_2></Adress_2>
                    </BodyWrapper_Adress>

                    <BodyWrapper_Youtube>
                        <Title_Name>유튜브</Title_Name>
                        <Youtube_Link type="text" placeholder="링크를 복사해주세요."></Youtube_Link>
                    </BodyWrapper_Youtube>
                    <BodyWrapper_img>
                        <Title_Name>사진 첨부</Title_Name>
                        <Img> 
                            <Upload_1 className="input-file-button" for="input-file">+<br/>Upload</Upload_1><LoadButton type="file" id="input-file" />
                            <Upload_2 className="input-file-button" for="input-file">+<br/>Upload</Upload_2><LoadButton type="file" id="input-file" />
                            <Upload_3 className="input-file-button" for="input-file">+<br/>Upload</Upload_3><LoadButton type="file" id="input-file" />
                            
                        </Img>
                    </BodyWrapper_img>
                    <BodyWrapper_set>
                        <Title_Name>메인 설정
                        </Title_Name>
                        <Set_select_1 type="radio" name="set" value="유튜브" checked ></Set_select_1> <Font>유튜브</Font>
                        <Set_select_2  type="radio" name="set" value="사진" checked ></Set_select_2>  <Font>사진</Font>
                        

                    </BodyWrapper_set>

                    <BodyFoot_button>등록하기</BodyFoot_button>






                </BodyWrapper>



            </Body>


        </Wrapper>

    )
}
