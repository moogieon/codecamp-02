import { useEffect, useRef, useState } from "react";

export default function ImagePreLoadPage() {
  const [imgurl, setImgurl] = useState("");
  const divRef = useRef<HTMLInputElement>(null);
  // const [on,serOn] = useState(false) // 스위치 변수 라고한다. 켯다 껏다
  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      setImgurl(img); // img는 태그임 ==> <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp"/>
    };
  }, []);
  function onclickButton() {
    // serOn(true)
    divRef.current?.appendChild(imgurl);
  }
  return (
    <>
      <div ref={divRef}></div>
      {/* {on && (<img src="https://codebootcamp.co.kr/images/main/homeImage1.webp"/>)} */}

      <button onClick={onclickButton}>이미지 보여주기</button>
    </>
  );
}
