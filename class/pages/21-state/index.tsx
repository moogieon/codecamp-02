import { useState } from "react";

export default function StatePage() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    // setCount((prev) => prev + 1);
    setCount((aaa) => aaa + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCount}>+1</button>
    </>
  );
}
