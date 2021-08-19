import styled from "@emotion/styled";
export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  /* border: 1px solid white; */
  /* background-color: white; */
  display: flex;
  justify-content: end;
  padding-left: 90px;
  padding-top: 20px;
  margin-bottom: 10px;
`;
export const Icon1 = styled.img`
  width: 16px;
  height: 17px;
  margin-right: 25px;
  background-color: #babab1;
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Content = styled.textarea`
  width: 100%;
  height: 64px;
  border: 1px solid white;
  background-color: black;
  padding: 20px;
  overflow: hidden;
`;
export const Boddy_Foot = styled.div`
  height: 52px;
  background-color: black;
  border: 1px solid lightgray;
  position: relative;
`;
export const UploadButton = styled.button`
  width: 91px;
  height: 52px;
  background-color: #ffcc01;
  color: #fff;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
  :hover {
    color: black;
  }
`;
