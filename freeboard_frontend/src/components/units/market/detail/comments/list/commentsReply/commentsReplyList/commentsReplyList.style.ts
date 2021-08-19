import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  /* border: 1px solid white; */
  /* background-color: white; */
  display: flex;
  justify-content: end;
  padding-left: 90px;
  padding-top: 10px;
  margin-bottom: 40px;
`;

export const FlexWrapper = styled.div`
  margin-left: 25px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid white; */
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;
export const WriterWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div``;

export const OptionWrapper = styled.div`
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: lightgray;
  padding-top: 15px;
  padding-left: 60px;
`;

export const ReComments = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: relative;
  top: 50px;
`;
