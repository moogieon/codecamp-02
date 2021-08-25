import styled from "@emotion/styled";
export const RealWrapper = styled.div`
  max-width: 1920px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0px auto;
  /* align-items: center; */
`;

export const Wrapper = styled.div`
  max-width: 1920px;
  width: 1200px;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 377px;
  margin-left: 220px;
  /* padding-left: 360px; */
`;
export const Title = styled.div`
  font-size: 36px;
  font-family: ccc;
  text-align: center;
`;
export const Head = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 473px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
`;
export const Body = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 1008px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 20px;

    background-color: #f2f2f2;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ffd600;
    height: 17%;

    border-left: 7px solid black;
    border-right: 7px solid black;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track {
    border-left: 9px solid black;
    border-right: 9px solid black;
    background: #f2f2f2;
  }
`;
export const Wrapper_Body = styled.div`
  border-bottom: 1px solid #bdbdbd;
  /* width: 1100px; */
  color: white;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const GoodsImg = styled.img`
  width: 160px;
  height: 160px;
  background-size: cover;
`;
export const GoddsInfo = styled.div`
  height: 160px;

  padding-top: 8px;
  padding-left: 40px;
`;

export const GoodsName = styled.div`
  color: white;

  height: 36px;

  margin-bottom: 4px;
  cursor: pointer;
  :hover {
    color: #ffc414;
  }
  font-size: 24px;
  font-weight: 500;
  font-family: ccc;
`;
export const GoodsRemarks = styled.div`
  color: white;

  height: 24px;
  margin-bottom: 8px;
  font-size: 16px;
`;
export const GoodsTag = styled.div`
  color: white;

  height: 24px;
  margin-bottom: 15px;
  font-size: 16px;
  color: #bdbdbd;
`;
export const SellerInfo = styled.div`
  /* border: 1px solid blue; */
  color: white;
  /* width: 125px; */
  height: 24px;
`;
export const Seller = styled.div`
  /* border: 1px solid red; */
  color: white;
  /* width: 65px; */
  height: 20px;
  font-size: 16px;
`;

export const InfoBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const RigthBox = styled.div`
  height: 100%;
  padding-right: 10px;
`;
export const LeftBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
export const GoodsPrice = styled.div`
  height: 36px;

  margin-top: 62px;
  font-size: 23px;

  /* border: 1px solid red; */
  font-family: ccc;
`;

export const GoWrite = styled.button`
  background-color: black;
  margin-top: 54px;

  width: 124px;
  height: 52px;
  color: white;
  font-size: 16px;
  font-family: ccc;
  cursor: pointer;
  :hover {
    color: #ffc414;
  }
`;
// --------- side bar -------
export const ItemLog = styled.div`
  border: 1px solid white;

  width: 196px;
  height: 505px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 20px;
    background-color: #f2f2f2;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ffd600;
    height: 17%;

    border-left: 9px solid black;
    border-right: 9px solid black;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track {
    border-left: 9px solid black;
    border-right: 9px solid black;
    background: #f2f2f2;
  }
  position: sticky;
  top: 100px;
  left: 3000px;
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;
export const LogoTitle = styled.div`
  font-size: 18px;
  font-family: ccc;
  /* border: 1px solid red; */
  color: white;
  position: sticky;
`;
export const LogoInfo = styled.div`
  width: 156px;
  /* height: 199px; */
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  :hover {
    background-color: grey;
  }
`;
export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  background-size: 100%;
  margin-top: 30px;
  margin-left: 36px;
  color: white;
`;
export const LogoName = styled.div`
  width: 126px;
  height: 18px;

  margin-top: 12px;
  margin-bottom: 12px;
  color: white;
`;
export const LogoRemarks = styled.div`
  /* width: 81px; */
  height: 18px;
  font-size: 14px;
  color: #4f4f4f;
`;
export const LogoPrice = styled.div`
  height: 24px;

  margin-top: 4px;
  color: darkgrey;
`;
export const LogoTag = styled.div`
  height: 17px;
  margin-top: 8px;
  font-size: 12px;
  color: #3f6ee5;
`;
