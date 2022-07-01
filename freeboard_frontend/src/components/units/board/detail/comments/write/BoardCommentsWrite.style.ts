import styled from "@emotion/styled/";

export const Wrapper = styled.div`
  padding: 10px 2.5rem;
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Comments = styled.div`
  margin: 0px auto;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;
export const EditComments = styled.div`
  width: 100px;
  height: 100px;
`;

export const Comments_in = styled.div`
  width: 100%;
  height: 272px;

  background-color: black;
`;
export const Comments_init_writer = styled.input`
  max-width: 700px;
  width: 80%;
  height: 50px;
  background-color: black;
`;
export const Comments_init_password = styled.input`
  max-width: 700px;
  width: 80%;
  height: 50px;
  background-color: black;
`;

export const Comments_init = styled.input`
  width: 100%;
  height: 108px;
  background-color: black;
`;
export const Comments_Line = styled.hr`
  width: 100%;
  color: white;
`;

export const Comments_Button_Box = styled.div`
  width: 100%;
  height: 52px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
`;
export const Comments_Button = styled.button`
  width: 91px;
  height: 52px;
  cursor: pointer;
  background-color: black;
`;

export const Warring = styled.div`
  color: red;
  font-size: 10px;
`;
