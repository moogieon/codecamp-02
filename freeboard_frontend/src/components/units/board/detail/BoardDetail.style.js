import styled from "@emotion/styled/";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 80px;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Wrapper_Head = styled.div`
  width: 996px;
  display: flex;
`;
export const Img = styled.img`
  width: 46.67px;
  height: 46.67px;
  background-size: 100%;
`;
export const Head_Wrapper = styled.div`
  margin-left: 16.7px;
`;
export const Writer = styled.div`
  width: 67px;
  height: 36px;
  font-size: 24px;
`;
export const Day = styled.div`
  width: 126px;
  height: 24px;
  font-size: 16px;
  color: #828282;
`;
export const Img_2 = styled.img`
  width: 26.67px;
  height: 13.33px;
  margin-left: 720.67px;
  margin-top: 19.33px;
  background-size: 100%;
`;
export const Img_3 = styled.div`
  width: 18.67px;
  height: 26.67px;
  background-size: 100%;
  margin-left: 29.33px;
  margin-top: 12.67px;
  background-image: url("/boards-image/Loc.png");
  /* position: relative; */
`;
export const Img_4 = styled.img`
  width: 6.67px;
  height: 6.67px;
  background-size: 100%;
  margin-left: 6px;
  margin-bottom: 2px;
`;
export const Line = styled.div`
  width: 996px;
  margin-top: 20px;
  border-top: 1px solid #bdbdbd;
`;

export const Wrapper_Body = styled.div`
  width: 996px;
  padding-top: 80px;
`;

export const Body_Title = styled.span`
  width: 285px;
  height: 54px;
  font-size: 36px;
  text-align: unset;
`;

export const Body_Img = styled.div`
  width: 996px;
  height: 480px;
  background-color: gray;
  margin-top: 40px;
`;
export const Body_Contents = styled.div`
  width: 996px;
  height: 300px;

  font-size: 16px;
  padding-top: 40px;
`;

export const Wrapper_Foot = styled.div`
  width: 996px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Foot_Ytv = styled.div`
  width: 486px;
  height: 240px;
  margin-top: 120px;
`;
export const Youtube = styled.iframe`
  width: 486px;
  height: 240px;
  border: none;
`;
export const Foot_Count = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

export const Foot_Btn = styled.div`
  width: 160px;

  margin-top: 160px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Like = styled.button`
  margin-top: 2px;
  background-size: 100%;
  background-image: url("/boards-image/like.png");
  background-color: transparent;
  width: 20px;
  height: 18px;
  border: none;
  cursor: pointer;
`;

export const Dislkie = styled.button`
  margin-top: 3px;
  background-size: 100%;
  background-image: url("/boards-image/dislike.png");
  background-color: transparent;
  width: 20px;
  height: 18px;
  border: none;
  cursor: pointer;
`;
export const Like_count = styled.div`
  width: 40px;
  height: 27px;
  font-size: 18px;
  color: #ffd600;
  margin-top: 4px;
`;

export const DisLike_count = styled.div`
  width: 40px;
  height: 27px;
  font-size: 18px;
  color: #828282;
  margin-top: 4px;
`;

export const Foot = styled.div`
  height: 45px;
  width: 1200px;
  margin: 80px;
  display: flex;
  justify-content: center;
`;
export const List_Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 45px;
  cursor: pointer;
  border: 1px solid #bdbdbd;
  :hover {
    background-color: orange;
  }
  border-radius: 15px;
`;

export const Fix_Button = styled.button`
  width: 179px;
  height: 45px;
  margin-left: 24px;
  margin-right: 24px;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 45px;
  cursor: pointer;
  border: 1px solid #bdbdbd;
  :hover {
    background-color: orange;
  }
  border-radius: 15px;
`;

export const Delete_Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 45px;
  cursor: pointer;
  border: 1px solid #bdbdbd;
  :hover {
    background-color: orange;
  }
  border-radius: 15px;
`;
export const Comments = styled.div`
  margin: 80px;
  width: 1200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;
export const Comments_in = styled.div`
  width: 1200px;
  height: 272px;
  border: 1px solid black;
`;
export const Comments_init_writer = styled.input`
  width: 700px;
  height: 50px;
`;
export const Comments_init_password = styled.input`
  width: 700px;
  height: 50px;
`;

export const Comments_init = styled.input`
  width: 1200px;
  height: 108px;
`;
export const Comments_Line = styled.div`
  width: 1198px;
  border-top: 1px solid #f2f2f2;
`;

export const Comments_Button_Box = styled.div`
  width: 1200px;
  height: 52px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
`;
export const Comments_Button = styled.button`
  width: 91px;
  height: 52px;
`;
