import styled from "@emotion/styled";

interface Iporps {
  isActive: boolean;
}

export const Menu = styled.div`
  text-align: center;
  cursor: pointer;
  opacity: 0.5;
  font-family: Ruda;
  :hover {
    color: #fff;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
      0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
  }
  color: ${(props: Iporps) => (props.isActive ? "#fff" : "#808080")};
  text-shadow: ${(props: Iporps) =>
    props.isActive
      ? ` 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
      0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;`
      : "none"};
`;
