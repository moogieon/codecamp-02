import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0px 2.5rem;
`;
export const Body = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  border: 1px solid black;
  padding: 80px 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 20px darkgrey;
`;

export const Wrapper_Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Img = styled.img`
  width: 46.67px;
  height: 46.67px;
  background-size: 100%;
`;
export const Head_Wrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 0.8rem;
  gap: 0.8rem;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;
export const Header_1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 1.2rem;
  gap: 1.2rem;
`;
export const Writer = styled.div`
  font-size: 24px;
`;
export const Day = styled.div`
  font-size: 16px;
  color: #828282;
`;
export const Icon_Wrapper = styled.div`
  display: flex;
`;

export const Img_2 = styled.img`
  width: 26.67px;
  height: 13.33px;
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
export const Line = styled.hr`
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid #bdbdbd;
`;

export const Wrapper_Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-top: 80px;
`;

export const Body_Title = styled.span`
  width: 100%;
  min-height: 54px;
  font-size: 36px;
  text-align: unset;
`;

export const Body_Img = styled.img`
  width: 100%;
  max-width: 1200px;
  height: 480px;
  margin: 40px auto 0px auto;
`;
export const Body_Contents = styled.div`
  max-width: 1200px;
  min-height: 300px;
  width: 100%;
  margin: 0 auto;
  font-size: 16px;
  padding-top: 40px;
  word-break: break-all;
`;

export const Wrapper_Foot = styled.div`
  max-width: 996px;
  display: flex;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Foot_Ytv = styled.div`
  max-width: 700px;
  height: 240px;
  margin-top: 120px;
`;
export const Youtube = styled.div`
  max-width: 700px;
  height: 240px;
  font-size: 50px;
  border: 1px solid black;
`;

export const Count_Wrpper = styled.div`
  display: flex;
  grid-gap: 1.8rem;
  gap: 1.8rem;
`;

export const Foot_Count = styled.div`
  max-width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

export const Foot_Btn = styled.div`
  max-width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
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
  width: 100%;
  margin: 80px;
  display: flex;
  justify-content: center;
`;
export const Btn_words = styled.span`
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const List_Button = styled.button`
  padding: 0 10px;
  max-width: 176px;
  height: 45px;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 45px;
  cursor: pointer;
  border: 1px solid #bdbdbd;
  :hover {
    color: #ffc414;
  }
  border-radius: 15px;
`;

export const Fix_Button = styled.button`
  padding: 0 10px;
  max-width: 176px;
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
    color: #ffc414;
  }
  border-radius: 15px;
`;

export const Delete_Button = styled.button`
  padding: 0 10px;
  max-width: 176px;
  height: 45px;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 45px;
  cursor: pointer;
  border: 1px solid #bdbdbd;
  :hover {
    color: #ffc414;
  }
  border-radius: 15px;
`;
export const Comments = styled.div`
  margin: 80px;
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;
export const Comments_in = styled.div`
  width: 100%;
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
  margin-top: 100px;
  width: 100%;
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
