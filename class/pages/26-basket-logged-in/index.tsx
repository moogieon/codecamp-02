import { useState } from "react";
import { useEffect } from "react";

export default function BasketLoggedInPage() {
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasket(items);
  }, []);
  return (
    <>
      <div>비회원 장바구니</div>
      {basket.map((data) => (
        <div key={data._id}>
          <span>{data.writer}</span>
          <span>{data.title}</span>
        </div>
      ))}
    </>
  );
}
