import{useMutation, gql,} from '@apollo/client'
import { useState } from 'react';
import {useRouter} from "next/router"
import {
    Address,
    ButtonWrapper,
    CancelButton,
    Contents,
    ImageWrapper,
    InputWrapper,
    Label,
    OptionWrapper,
    Password,
    RadioButton,
    RadioLabel,
    SearchButton,
    Subject,
    SubmitButton,
    Title,
    UploadButton,
    Wrapper,
    Writer,
    WriterWrapper,
    Youtube,
    Zipcode,
    ZipcodeWrapper,
    Warring,
} from '../../../styles/boards/new/BoardsNew.styles';

const CREATE_BOARD = gql`
    mutation createBoard( $createBoardInput:CreateBoardInput! ){
    createBoard(createBoardInput:$createBoardInput){
        _id
    }
}

`

export default function BoardNewPage() {

    const router = useRouter()

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [iderror, setIderror] = useState('')
    const [pwerror, setPwerror] = useState('')
    const [ttl, setTtl] = useState('')
    const [contents, setContets] = useState('')
    const [ttlerror, setTtlerror] = useState('')
    const [contentserror, setContetserror] = useState('')
    const [ytv, setYtv] = useState('')

    const [ createBoard] = useMutation(CREATE_BOARD) // mutation(고정) post (이름) //
                                // $BoradInput (이름) : CreateBoardInput(API 고정)
                                // createBoard(API 고정)  
  
     

    function loginId(event) {
        setId(event.target.value)
    }
    function loginPw(event) {
        setPw(event.target.value)
    }
    function userTitle(event) {
        setTtl(event.target.value)
    }
    function userContents(event) {
        setContets(event.target.value)
    }
    function usserYoutybe(event) {
        setYtv(event.target.value)
    }


    async function regist() {
        if (id === '') {
            setIderror('내용을 입력해주세요.')
            //  alert('아이디를 입력해 주세요.')
        }
        if (pw === '') {
            setPwerror('내용을 입력해주세요.')
            //alert('비밀번호를 입력해 주세요.')
        }
        if (ttl === '') {
            setTtlerror('내용을 입력해주세요.')
            //  alert('제목을 입력해 주세요.')
        }
        if (contents === '') {
            setContetserror('내용을 입력해주세요.')
            // alert('내용을 입력해 주세요.')
        }
        if (id !== '') {
            setIderror('')

        }
        if (pw !== '') {
            setPwerror('')
        }
        if (ttl !== '') {
            setTtlerror('')
        }
        if (contents !== '') {
            setContetserror('')
            // alert('내용을 입력해 주세요.')

        }
        console.log("ASDASD")
        try{
            const result = await createBoard(
                {
                    variables:{
                        // 변수이름은 마음 대로 ex) aaa:seller
                createBoardInput:{
                            writer:id,
                            password :pw,
                            title:ttl,
                            contents:contents,
                            youtubeUrl:ytv 
                            //왼쪽 객체들은 API 양식 그대로  오른쪽은 usestate('') 변수                        
                    }
    
                        
                }
            }) 
            console.log("ASDASD")
            console.log(result.data.createBoard._id)
            // alert("등록 완료")
            router.push(`detail/${result.data.createBoard._id}`)
        }catch(error){
            console.log(error)
        }
                            // (이름) useMutation 함수 이름
        
    }

    return (
        <Wrapper>
            <Title>게시판 등록</Title>
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer onChange={loginId}
                        name="writer"
                        type="text"
                        placeholder="이름을 적어주세요."
                    />
                    <Warring>{iderror}</Warring>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password
                        onChange={loginPw}
                        name="password"
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                    />
                    <Warring>{pwerror}</Warring>
                </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <Subject
                    onChange={userTitle}
                    name="title"
                    type="text"
                    placeholder="제목을 작성해주세요."
                />
                <Warring>{ttlerror}</Warring>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Contents
                    onChange={userContents}
                    name="contents"
                    placeholder="내용을 작성해주세요."
                />
                <Warring>{contentserror}</Warring>
            </InputWrapper>
            <InputWrapper>
                <Label>주소</Label>
                <ZipcodeWrapper>
                    <Zipcode
                        name="zipcode"
                        placeholder="07250"
                    />
                    <SearchButton>우편번호 검색</SearchButton>
                </ZipcodeWrapper>
                <Address />
                <Address />
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube
                    onChange={usserYoutybe}
                    name="youtube"
                    placeholder="링크를 복사해주세요."
                />
            </InputWrapper>
            <ImageWrapper>
                <Label>사진첨부</Label>
                <UploadButton>
                    {/* <input
              type="file"
              style={{ display: "none" }}
              ref={fileRef}
            /> */}
                    <div>+</div>
                    <div>Upload</div>
                </UploadButton>
                <UploadButton>
                    <div>+</div>
                    <div>Upload</div>
                </UploadButton>
                <UploadButton>
                    <div>+</div>
                    <div>Upload</div>
                </UploadButton>
            </ImageWrapper>
            <OptionWrapper>
                <Label>메인설정</Label>
                <RadioButton type="radio" id="youtube" name="radio-button" />
                <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
                <RadioButton type="radio" id="image" name="radio-button" />
                <RadioLabel htmlFor="image">사진</RadioLabel>
            </OptionWrapper>
            {/* //! name 으로 같이 분류해서 체크 중복 안되게 한다.
            //! label 태그를 이용해서 radio 버튼과 묶는다. */}
            <ButtonWrapper>
                <CancelButton>취소하기</CancelButton>
                <SubmitButton onClick={regist}>
                    등록하기
                </SubmitButton>
            </ButtonWrapper>
        </Wrapper>
    );
}
