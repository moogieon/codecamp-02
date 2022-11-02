import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { breakPoints } from "../../../../commons/styles/media";

import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`;
export const Body = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 20px;
  padding-right: 20px;
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
  max-width: 996px;
  width: 100%;
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
  max-width: 996px;
  width: 100%;
  height: 52px;
`;

export const ProductSummary = styled.div`
  max-width: 996px;
  width: 100%;
  height: 92px;
  margin-bottom: 40px;
`;

export const Summary = styled.input`
  background-color: black;
  max-width: 996px;
  width: 100%;
  height: 52px;
`;

export const ProductContents = styled.div`
  max-width: 996px;
  width: 100%;
  height: 360px;
  margin-bottom: 40px;
`;

export const Contents = styled.input`
  background-color: black;
  max-width: 996px;
  width: 100%;
  height: 268px;
`;

export const ProductPrice = styled.div`
  max-width: 996px;
  width: 100%;
  height: 92px;
  margin-bottom: 40px;
`;

export const Price = styled.input`
  background-color: black;
  max-width: 996px;
  width: 100%;
  height: 52px;
`;

export const ProductTag = styled.div`
  max-width: 996px;
  width: 100%;
  height: 92px;
  margin-bottom: 40px;
`;

export const Tag = styled.input`
  background-color: black;
  max-width: 996px;
  width: 100%;
  height: 52px;
`;

export const LocBox = styled.div`
  max-width: 996px;
  width: 100%;
  min-height: 292px;
  background-color: black;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;
export const Map = styled.div``;

export const LocRigth = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Gps = styled.div`
  margin-bottom: 40px;
  width: 100%;
  height: 92px;
  display: flex;
  justify-content: space-between;
`;
export const Lat = styled.input`
  width: 100%;
  height: 52px;
  background-color: black;
  text-align: center;
`;
export const Lng = styled.input`
  width: 100%;
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
  width: 100%;
  height: 52px;
  background-color: black;
`;
export const AddressIn2 = styled.input`
  width: 100%;
  height: 52px;
  background-color: black;
  margin-top: 16px;
`;

export const UploadBox = styled.div`
  max-width: 996px;
  width: 100%;
  background-color: black;
  margin-bottom: 40px;
`;

export const RadioBox = styled.div`
  max-width: 996px;
  width: 100%;
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
  width: 100%;
  height: 52px;
  font-family: ccc;
  background-color: black;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
export const Regist = styled.button`
  max-width: 179px;
  width: 100%;
  height: 52px;
  font-family: ccc;
  background-color: black;
  border: 1px solid white;
  margin: 0 auto;
  cursor: pointer;
`;

export const Quill = styled(ReactQuill)`
  max-width: 996px;
  width: 100%;
  height: 268px;
  color: white;
  margin: 0 auto;
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

// export const TagContainer = styled.div`
//   display: flex;
//   align-items: center;
//   border: 1px solid grey;
//   border-radius: 12px;
//   width: 60vw;
//   height: 60px;
// `;
// export const Hash = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: blue;
//   border-radius: 12px;
//   padding: 0 10px;
//   margin: 10px;
//   height: 40px;
// `;
// export const HashName = styled.h3`
//   color: lwhite;
//   margin-right: 10px;
// `;
// export const HashBtn = styled.button`
//   border: none;
//   outline: 0;
//   border-radius: 50%;
//   width: 20px;
//   height: 20px;
//   background-color: white;
//   cursor: pointer;
// `;
// export const InputBox = styled.input`
//   border: none;
//   height: 30px;
//   font-size: 32px;
//   &:focus {
//     outline: none;
//   }
//   @media screen and (max-width: 820px) {
//     font-size: 20px;
//   }
// `;
