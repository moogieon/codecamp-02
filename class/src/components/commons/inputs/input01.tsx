import styled from "@emotion/styled";

export const Errors = styled.div`
  color: tomato;
  font-size: 15px;
`;

export default function Input01(props) {
  return (
    <>
      {props.inputName}:
      <input type={props.type} {...props.register} />
      <Errors>{props.errorsMessage} </Errors>
    </>
  );
}
