import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";
const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: #292994;
  border: 10px solid red;
  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: #0c915e;
  }
  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    background-color: #606079;
  }
`;

export default function MediaPage() {
  return (
    <>
      <Wrapper>상자</Wrapper>
    </>
  );
}
