import { useState } from "react";

export default function AlgorithmPage() {
  //   function Date(str) {
  //     str = str.replace(/[^0-9]/g, "");
  //     if (str.substring(0, 2) == 02) {
  //       return 3;
  //     }
  //   }
  const [value, setValue] = useState("");

  const onChangeInput = (event) => {
    const dottedValue = [];
    const nextValue = event.target.value;
    if (nextValue.length > value.length) {
      const nextPureValue = nextValue.replaceAll(".", "").split("");
      nextPureValue.forEach((data: string, index: number) => {
        dottedValue.push(data);
        if (index + 1 === 4 || index + 1 === 6) dottedValue.push(".");
      });
      setValue(dottedValue.join(""));
    } else {
      const nextPureValue = nextValue.replaceAll(".", "").split("");
      nextPureValue.forEach((data: string, index: number) => {
        dottedValue.push(data);
        if (nextPureValue.length > 6 && (index + 1 === 4 || index + 1 === 6)) {
          dottedValue.push(".");
        } else if (nextPureValue.length > 4 && index + 1 === 4) {
          dottedValue.push(".");
        }
      });
      setValue(dottedValue.join(""));
    }
  };
  return (
    <>
      <div>날짜</div>
      <input
        type="text"
        value={value}
        placeholder="YYYY.MM.DD"
        maxLength={10}
        onChange={onChangeInput}
      />
      <input></input>
    </>
  );
}
