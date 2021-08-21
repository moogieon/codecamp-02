import styled from "@emotion/styled";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Kakaomap from "../../../commons/map/Map01/map.contanier";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Body = styled.div`
  width: 1200px;

  margin: 100px;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;
export const Title = styled.div`
  font-size: 36px;
  font-family: ccc;
`;
export const Errors = styled.div`
  color: red;
  font-size: 13px;
`;
export const ProductName = styled.div`
  margin-top: 80px;
  width: 996px;
  height: 92px;

  margin-bottom: 40px;
`;
export const NameTitle = styled.div`
  font-family: ccc;
  margin-bottom: 16px;
  font-size: 16px;
`;
export const Name = styled.input`
  background-color: black;
  width: 996px;
  height: 52px;
`;

export const ProductSummary = styled.div`
  width: 996px;
  height: 92px;

  margin-bottom: 40px;
`;

export const Summary = styled.input`
  background-color: black;
  width: 996px;
  height: 52px;
`;

export const ProductContents = styled.div`
  width: 996px;
  height: 360px;

  margin-bottom: 40px;
`;

export const Contents = styled.input`
  background-color: black;
  width: 996px;
  height: 268px;
`;

export const ProductPrice = styled.div`
  width: 996px;
  height: 92px;

  margin-bottom: 40px;
`;

export const Price = styled.input`
  background-color: black;
  width: 996px;
  height: 52px;
`;

export const ProductTag = styled.div`
  width: 996px;
  height: 92px;

  margin-bottom: 40px;
`;

export const Tag = styled.input`
  background-color: black;
  width: 996px;
  height: 52px;
`;

export const LocBox = styled.div`
  width: 996px;
  height: 292px;
  background-color: black;

  margin-bottom: 40px;
  display: flex;

  justify-content: space-between;
`;
export const Map = styled.div``;

export const LocRigth = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Gps = styled.div`
  margin-bottom: 40px;
  width: 272px;
  height: 92px;
  display: flex;
  justify-content: space-between;
`;
export const Lat = styled.input`
  width: 108px;
  height: 52px;
  background-color: black;
  text-align: center;
`;
export const Lng = styled.input`
  width: 108px;
  height: 52px;
  background-color: black;
  text-align: center;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const AddressIn = styled.input`
  width: 588px;
  height: 52px;
  background-color: black;
`;
export const AddressIn2 = styled.input`
  width: 588px;
  height: 52px;
  background-color: black;
  margin-top: 16px;
`;

export const UploadBox = styled.div`
  width: 996px;
  height: 220px;
  background-color: black;

  margin-bottom: 40px;
`;

export const RadioBox = styled.div`
  width: 996px;
  height: 64px;
  background-color: black;

  margin-bottom: 40px;
`;
export const RadioBoxLabel = styled.span`
  font-family: ccc;
  font-size: 16px;
`;
export const Pic1 = styled.input`
  cursor: pointer;
`;
export const Pic2 = styled.input`
  margin-left: 12px;
  cursor: pointer;
`;
export const ButtonBox = styled.div`
  width: 100%auto;
  height: 52px;
  font-family: ccc;
  background-color: black;
`;
export const Regist = styled.button`
  width: 179px;
  height: 52px;
  font-family: ccc;
  background-color: black;
  cursor: pointer;
`;

export const Quill = styled(ReactQuill)`
  width: 996px;
  height: 268px;
  color: white;
`;

export const QuillColor = [
  "#000000",
  "#e60000",
  "#ff9900",
  "#ffff00",
  "#008a00",
  "#0066cc",
  "#9933ff",
  "#ffffff",
  "#facccc",
  "#ffebcc",
  "#ffffcc",
  "#cce8cc",
  "#cce0f5",
  "#ebd6ff",
  "#bbbbbb",
  "#f06666",
  "#ffc266",
  "#ffff66",
  "#66b966",
  "#66a3e0",
  "#c285ff",
  "#888888",
  "#a10000",
  "#b26b00",
  "#b2b200",
  "#006100",
  "#0047b2",
  "#6b24b2",
  "#444444",
  "#5c0000",
  "#663d00",
  "#666600",
  "#003700",
  "#002966",
  "#3d1466",
  "custom-color",
];
