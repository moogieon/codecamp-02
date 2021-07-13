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

} from './BoardWrite.style';
export default function BoardWriteUI(props){


    return(
        <Wrapper>
        <Title>게시판 등록</Title>
        <WriterWrapper>
            <InputWrapper>
                <Label>작성자</Label>
                <Writer onChange={props.ChangeWriter}
                    name="writer"
                    type="text"
                    placeholder="이름을 적어주세요."
                />
                <Warring onChange={props.error1}/>
            </InputWrapper>
            <InputWrapper>
                <Label>비밀번호</Label>
                <Password
                    onChange={props.ChangePassword}
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                />
                <Warring onChange={props.error2}/>
            </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
            <Label>제목</Label>
            <Subject
                onChange={props.ChangeTitle}
                name="title"
                type="text"
                placeholder="제목을 작성해주세요."
            />
            <Warring onChange={props.error3}/>
        </InputWrapper>
        <InputWrapper>
            <Label>내용</Label>
            <Contents
                onChange={props.ChangeContntsr}
                name="contents"
                placeholder="내용을 작성해주세요."
            />
            <Warring onChange={props.error4}/>
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
                onChange={props.ChangeYoutube}
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
            <SubmitButton onClick={props.ChangeRegist} active={props.clickButton}>
                등록하기
            </SubmitButton>
        </ButtonWrapper>
    </Wrapper>

    )
}