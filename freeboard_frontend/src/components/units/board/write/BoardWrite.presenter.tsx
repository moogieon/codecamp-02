import { ChangeEvent } from "react";
import ReactPlayer from "react-player";
import { INPUT_INIT } from "./BoardWrite.container";
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
} from "./BoardWrite.style";

interface IProps {
  active: boolean;
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  ChangeRegist: () => void;
  onClickEdit: () => void;
  isEdit?: boolean;
  inputs_error: typeof INPUT_INIT;
  onChangeyoutube: () => void;
  // inputsErrors: typeof INPUT_INIT
}
export default function BoardWriteUI(props: IProps) {
  return (
    <Wrapper>
      <Title>게시판 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            onChange={props.onChangeInputs}
            name="writer"
            type="text"
            placeholder="이름을 적어주세요."
          />
          <Warring> {props.inputs_error.writer}</Warring>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            onChange={props.onChangeInputs}
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <Warring>{props.inputs_error.password}</Warring>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          onChange={props.onChangeInputs}
          name="title"
          type="text"
          placeholder="제목을 작성해주세요."
        />
        <Warring>{props.inputs_error.title}</Warring>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          onChange={props.onChangeInputs}
          name="contents"
          placeholder="내용을 작성해주세요."
        />
        <Warring>{props.inputs_error.contents}</Warring>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode name="zipcode" placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube
          name="youtubeUrl"
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeyoutube}
        ></Youtube>
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
        {/* ///리스트로 가기 만들기 */}
        <CancelButton>취소하기</CancelButton>
        <SubmitButton
          onClick={props.isEdit ? props.onClickEdit : props.ChangeRegist}
          active={props.active}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
