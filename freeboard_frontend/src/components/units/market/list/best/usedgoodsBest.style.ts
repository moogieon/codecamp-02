import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 300px;
`;

export const ListContents = styled.div`
  width: 100%;
  max-width: 1200px;
`;
export const Title = styled.h1`
  font-size: 700;
  text-align: center;
  padding-bottom: 40px;
`;
//! =============== Top Bestlist =================
export const TopBox = styled.div`
  width: 100%;
  padding-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const BestProductBox = styled.div`
  width: 282px;
  height: 391px;
  box-shadow: 5px 5px 5px 5px gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  cursor: pointer;
`;
export const TopProductImg = styled.img`
  width: 242px;
  height: 242px;
  background-size: 100%;
`;
export const TopProductInfo = styled.div`
  width: 242px;
  height: 89px;
  /* background-color: #69696933; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TopName = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 26.64px;
`;
export const TopInfoEtc = styled.div`
  width: 100%auto;
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
`;
export const TopInfoPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 26.64px;
`;

export const TopInfoRight = styled.div`
  width: 20px;
  height: 50px;
  width: 100%auto;
  margin-left: 30px;
  /* padding-right: 30px; */
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
