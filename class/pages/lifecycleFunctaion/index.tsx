import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Home from "../index";

export default function lifecycleFunctaionPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const inputRet = useRef<HTMLInputElement>(null);
  const [isChange, setIsChange] = useState(false);

  const onCkickMove = () => {
    router.push("/");
  };
  const onClickChange = () => {
    setIsChange(true);
  };

  useEffect(() => {
    console.log("마운트 완료!");
    alert("Rendered!");

    inputRet.current?.focus();
    //!  componentWillUnmount 같은기능
    return () => {
      alert("잘가용");
    };
  }, []);

  //! componentDidUpdate 같은 기능
  useEffect(() => {
    console.log("컴포넌틑 변경됨!");
    if (isChange === true) {
      alert("changed");
    }
  }, [isChange]);

  const onClickCount = () => {
    setCount((prev) => prev + 1);
    // setCount(count+1)
  };
  const onClickMove = () => {
    router.push("/");
  };
  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onCkickMove}>이동</button>
      <input type="text" ref={inputRet}></input>
      <div>카운트: {count}</div>
      <button onClick={onClickCount}>+ 1</button>
      <div> 함수형 컴포넌트 </div>
      <button onClick={onClickMove}> 나가기</button>
    </>
  );
}
