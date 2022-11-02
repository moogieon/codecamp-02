import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Map = styled.div`
  width: 384px;
  height: 252px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
