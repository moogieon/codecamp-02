import styled from "@emotion/styled";
import { Checkbox, Button } from "antd";

export const Wraaoer_Body = styled.div`
  height: 100%;
  background-image: url("/market/login/blond_4.jpg");
  background-size: cover;
`;
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 240px;
  opacity: 0.6;

  background-color: #000;
`;

export const Body_Wraaper = styled.div`
  width: 450px;
  height: 510px;
  /* border: 1px solid white; */
  box-shadow: 5px 5px 5px 5px darkgray inset;
  background-color: black;
  display: flex;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  flex-direction: column;
  justify-content: space-between;

  /* opacity: 70%; */
`;

export const Head = styled.div`
  font-family: "bbb";
  color: white;
  font-size: 28px;
`;

export const Body = styled.div`
  margin-top: 10px;

  width: 384px;
  height: 400px;
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;

  /* filter: blur(0.1px); */
`;
export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  input {
    border-bottom: 2px solid white;
    background: transparent;
    /* padding: 20px 0px 5px 0px; */
    /* font-size: 14px; */
    width: 100%;
  }
`;
export const Label = styled.label`
  position: absolute;
  font-family: ccc;
`;
export const Id = styled.input`
  ::placeholder {
    color: transparent;
  }
  :placeholder-shown + label {
    color: #aaa;
    font-size: 20px;
    top: 15px;
    left: 10px;
  }
  :focus + Label,
  Label {
    color: wheat;
    font-size: 19px;
    pointer-events: none;
    left: 0px;
    top: -30px;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
  }
  height: 50px;
  width: 90%;
  padding-left: 15px;
  /* border-radius: 16px; */
  /* opacity: 70%; */
  margin-bottom: 10px;
  color: #aaa;
  font-size: 26px;
`;

export const Password = styled.input`
  ::placeholder {
    color: transparent;
  }
  :placeholder-shown + label {
    color: #aaa;
    font-size: 20px;
    top: 35px;
    left: 10px;
  }
  :focus + Label,
  Label {
    color: wheat;
    font-size: 20px;
    pointer-events: none;
    left: 0px;
    top: -10px;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
  }
  padding-left: 15px;
  width: 90%;
  height: 50px;
  /* opacity: 70%; */
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom: 2px solid white;
  color: #aaa;
  font-size: 26px;
  background: transparent;
`;
export const CheckBox = styled(Checkbox)`
  color: white;
  font-size: 16px;
  font-family: ccc;
  margin-bottom: 20px;
`;
export const LoginButton = styled(Button)`
  margin-left: 10px;
  width: 390px;
  height: 60px;
  font-family: ccc;
  font-size: 27px;
  background-color: wheat;
  :hover {
    color: blue;
  }
`;

export const Line = styled.div`
  padding-top: 40px;
  margin-left: 10px;
  width: 390px;
  border-bottom: 2px solid white;
`;
export const Error = styled.div`
  color: red;
`;
export const Footer = styled.div`
  width: 390px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Singin_Button = styled.button`
  width: 128px;
  margin-top: 20px;
  margin-left: 20px;
  color: white;
  border-bottom: transparent;
  border-top: transparent;
  background-color: transparent;
  border-right: 1px solid white;
  border-left: 1px solid white;
  :hover {
    color: blue;
  }
  cursor: pointer;
  font-family: ccc;
`;
