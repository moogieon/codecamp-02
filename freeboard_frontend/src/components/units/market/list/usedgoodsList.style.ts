import styled from "@emotion/styled";
export const RealWrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  border: 1px solid blue;
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
  /* padding-left: 360px; */
`;
export const Title = styled.div`
  font-size: 36px;
  font-family: ccc;
  text-align: center;
`;
export const Head = styled.div`
  border: 1px solid red;
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
  width: 1100px;

  color: white;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const GoodsImg = styled.img`
  width: 160px;
  height: 160px;

  background-size: 100%;
`;
export const GoddsInfo = styled.div`
  height: 160px;
  border: 1px solid blue;

  padding-top: 8px;
  padding-left: 40px;
`;

export const GoodsName = styled.div`
  color: white;
  width: 251px;
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
  width: 110px;
  height: 24px;
  margin-bottom: 8px;
  font-size: 16px;
`;
export const GoodsTag = styled.div`
  color: white;
  width: 189px;
  height: 24px;
  margin-bottom: 15px;
  font-size: 16px;
  color: #bdbdbd;
`;
export const SellerInfo = styled.div`
  border: 1px solid blue;
  color: white;
  width: 125px;
  height: 24px;
`;
export const Seller = styled.div`
  border: 1px solid red;
  color: white;
  width: 65px;
  height: 20px;
  font-size: 16px;
`;
export const GoodsPrice = styled.div`
  height: 36px;
  margin-left: 500px;
  margin-top: 62px;
  font-size: 23px;
  text-align: center;
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
export const ItemLog = styled.div`
  border: 1px solid red;
  width: 196px;
  height: 505px;
  overflow-y: auto;
  position: sticky;
  top: 100px;
  /* left: 2000px; */
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;
export const LogoTitle = styled.div`
  font-size: 18px;
  font-family: ccc;
  color: white;
`;
export const LogoInfo = styled.div`
  width: 156px;
  /* height: 199px; */
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-left: 10px;
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
  border: 1px solid red;
  margin-top: 12px;
  color: white;
`;
export const LogoRemarks = styled.div`
  width: 81px;
  height: 18px;
  border: 1px solid red;
  color: white;
`;
export const LogoPrice = styled.div`
  width: 77px;
  height: 24px;
  border: 1px solid red;
  margin-top: 4px;
  color: darkgrey;
`;
export const LogoTag = styled.div`
  width: 128px;
  height: 15px;
  border: 1px solid red;
  margin-top: 8px;
  font-size: 10px;
  color: #bdbdbd;
`;
