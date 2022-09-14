import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  padding: 20px;
  height: 100%;
  border-bottom: 1px solid lightgray;
  margin-bottom: 20px;
`;

export const FlexWrapper = styled.div`
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
  display: flex;
  flex-direction: row;
  align-items: center;
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
  left: 30px;
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
  position: relative;
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
