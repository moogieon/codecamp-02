import styled from "@emotion/styled";
export const Login = styled.button`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.isActive ? "yellow" : "grey")};
  cursor: pointer;
`;
export default function Buttons01(props: any) {
  return (
    <>
      <Login type={props.types} isActive={props.isActive}>
        {props.buttonName}
      </Login>
    </>
  );
}
