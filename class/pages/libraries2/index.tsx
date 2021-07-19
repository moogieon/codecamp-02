// @ts-ignore // 라이브러리가 타입스크립트기능을 제공 하지 않아서 오류 뜰때
import ReactPlayer from "react-player";
import { DatePicker, Rate } from "antd";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];
import styled from "@emotion/styled";
import { useState } from "react";

const Date1 = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid black;
`;
const Star = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid black;
`;

export default function LibrariesPage2() {
  const [initdate, setInitDate] = useState("");
  const [month, setMonth] = useState("");
  function onChange(date, dateString) {
    // console.log(date);
    // console.log(dateString);
    // console.log(date, dateString);
    setInitDate(dateString);
    setMonth(new Date(dateString).getMonth() + 1);
  }
  const [star, setStar] = useState("");
  function onChangeStar(value) {
    console.log(value);
    setStar(value + "점");
    alert(`${value}점`);
  }

  return (
    <>
      <div>
        <h1>Date</h1>
      </div>
      <DatePicker onChange={onChange} />
      <Date1>{initdate}</Date1>
      <Date1>{month}</Date1>
      <Rate tooltips={desc} onChange={onChangeStar} />
      <Star>{star}</Star>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=uUrfRbCb9VI"
        width="800px"
        height="600px"
        controls={true}
        muted={true}
        playing={true}
      />
    </>
  );
}
