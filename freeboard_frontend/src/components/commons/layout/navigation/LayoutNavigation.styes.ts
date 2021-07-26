import styled from "@emotion/styled";

export const StickHeader = styled.div`
  padding-top: 8px;
  height: 8px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(50%, #ffcc01),
    color-stop(0, #05f)
  );
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const Stick_2 = styled.div`
  background-color: #ffcc01;
  height: 65.625px;
  width: 91.36px;
  padding: 21.328;
  text-align: center;
  line-height: 65px;
  color: #808080;
`;
export const Stick_1 = styled.div`
  background-color: #05f;
  height: 65.625px;
  width: 91.36px;
  padding: 21.328;
  text-align: center;
  line-height: 65px;
  color: #808080;
`;
export const Header = styled.div`
  background-color: white;
  height: 65.625px;
  display: flex;
  justify-content: center;
`;

export const FreeBoard = styled.div`
  padding: 21.328px;
  text-align: center;
  color: #808080;
  cursor: pointer;
  opacity: 0.5;
`;

export const UsedGoods = styled.div`
  padding: 21.328px;
  text-align: center;
  color: #808080;
  cursor: pointer;
  opacity: 0.5;
`;
export const MyPage = styled.div`
  padding: 21.328px;
  text-align: center;
  color: #808080;
  cursor: pointer;
  opacity: 0.5;
`;
