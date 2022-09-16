import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ListContents = styled.div`
  width: 100%;
`;
export const Title = styled.h1`
  font-size: 700;
  text-align: center;
  padding-bottom: 40px;
`;
//! =============== Top Bestlist =================
export const TopBox = styled.div`
  @media ${breakPoints.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media ${breakPoints.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    height: 50%;
  }
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  -webkit-column-gap: 2rem;
  -moz-column-gap: 2rem;
  grid-column-gap: 2rem;
  column-gap: 1;
`;
export const BestProductBox = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 5px 5px 5px 5px #363531;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 5px;
  cursor: pointer;
`;
export const TopProductImg = styled.img`
  width: 100%;
  padding: 5px 7px;
  height: 242px;
  background-size: 100%;
`;
export const TopProductInfo = styled.div`
  padding: 5px 10px;
  width: 100%;
  /* background-color: #69696933; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TopName = styled.div`
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  margin-bottom: 10px;
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 4;
  line-height: 26.64px;
`;
export const TopInfoEtc = styled.div`
  width: 100% auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TopInfoLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TopInfoRemarks = styled.div`
  font-size: 12px;
  line-height: 17.76px;
  font-weight: 500;
  color: #4f4f4f;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 2; /* 라인수 */
  line-height: 1.2em;
  height: 3.6em;
`;
export const TopInfoPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 26.64px;
`;

export const TopInfoRight = styled.div`
  height: auto;
  width: 100% auto;
  display: flex;
  justify-content: space-between;
`;
export const HeartToggle = styled.img`
  width: 20px;
  height: 18.5px;
`;
export const ToggleCount = styled.h5`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  padding-top: 4px;
  color: white;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa; ;
`;
