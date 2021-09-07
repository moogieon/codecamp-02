import styled from "@emotion/styled";
import { CloseOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { FaCoins } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
export const PigImg = styled.img``;

export const Wrapper = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;

  justify-content: center;
  /* align-items: center; */
  padding-top: 100px;
  z-index: 1;
`;
export const Tilte = styled.div`
  height: 150px;
  border: 1px solid blue;
  /* width: 464px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Coin = styled(FaCoins)`
  font-size: 50px;
  color: gold;
  text-align: center;
  margin-bottom: 20px;
`;
export const Coin_Contnets = styled.div`
  font-family: ccc;
`;
export const Close = styled(CloseOutlined)`
  position: absolute;
  right: 20px;
  top: 20px;
  color: black;
  font-size: 21px;
`;
export const ModalWrapper = styled(motion.div)`
  width: 400px;
  height: 500px;
  padding-top: 20px;
  position: fixed;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  justify-content: center;
  /* transition: all 0.3s ease; */
  /* animation-name: grow-box;
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  @keyframes grow-box {
    0% {
      opacity: 0.2;
    }
    25% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 0.8; 
    }
  } */
`;
//   /* align-items: center;
export const Drop_Wrapper = styled.div`
  width: 400px;
  height: 260px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
export const Drop = styled(Dropdown)`
  size: lg;
`;
