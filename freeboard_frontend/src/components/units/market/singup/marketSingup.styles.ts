import styled from "@emotion/styled";

export const Wraaoer_Body = styled.div`
  height: 1080px;
  background-image: url("/market_img/login/blond_4.jpg");
  background-size: cover;
`;
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 240px;
  opacity: 0.6;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #000;
`;

export const Body_Wraaper = styled.div`
  max-width: 450px;
  width: 100%;
  height: 664px;
  /* border: 1px solid white; */
  box-shadow: 5px 5px 5px 5px darkgray inset;
  background-color: black;
  display: flex;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 40px;
  padding-right: 20px;
  flex-direction: column;
  justify-content: space-around;

  /* opacity: 70%; */
`;

export const Head = styled.div`
  font-family: "bbb";
  color: white;
  font-size: 28px;
`;

export const Body = styled.div`
  margin-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  max-width: 384px;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Name = styled.input`
  padding-left: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  font-family: ccc;
  font-size: 20px;
  ::placeholder {
    font-size: 20px;
  }
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom: 2px solid white;
  background-color: transparent;
  color: wheat;
`;

export const Id = styled.input`
  padding-left: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  font-family: ccc;
  font-size: 20px;
  ::placeholder {
    font-size: 20px;
  }
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom: 2px solid white;
  background-color: transparent;
  color: wheat;
`;

export const Password = styled.input`
  padding-left: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  font-family: ccc;
  font-size: 20px;
  ::placeholder {
    font-size: 20px;
  }
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom: 2px solid white;
  background-color: transparent;
  color: wheat;
  /* opacity: 70%; */
`;
export const RePassword = styled.input`
  padding-left: 15px;
  margin-top: 20px;
  width: 100%;
  height: 50px;
  font-family: ccc;
  ::placeholder {
    font-size: 20px;
  }
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom: 2px solid white;
  background-color: transparent;
  color: wheat;
  /* opacity: 70%; */
`;

export const LoginButton = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 60px;
  font-family: ccc;
  font-size: 27px;
  background-color: wheat;
  cursor: pointer;
  :hover {
    color: blue;
  }
`;

export const Error = styled.div`
  color: red;
  height: 10px;
  font-size: 12px;
`;
export const Footer = styled.div`
  max-width: 390px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
