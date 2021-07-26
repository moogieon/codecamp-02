import { useEffect, useState } from "react";

export default function useEffectPage() {
  const [count, setCount] = useState(0);
  function onClikcCounst() {
    setCount((prev) => prev + 1);
  }
  console.log("시작");
  useEffect(() => {
    console.log("그려진 뒤");
    console.log("업데이트");
  }, [count]); // [] <- 디펜더시 어레이 (의존성 배열)

  console.log("그리기 직전");
  return (
    <>
      <div style={{ fontSize: "27px" }}> hi 컴포넌트</div>
      <div style={{ fontSize: "27px" }}>Count:{count} </div>
      <button style={{ width: "200px" }} onClick={onClikcCounst}>
        Count +1
      </button>
    </>
  );
}
