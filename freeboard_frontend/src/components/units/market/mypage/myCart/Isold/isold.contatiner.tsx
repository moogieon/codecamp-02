import { useQuery } from "@apollo/client";
import { useState } from "react";
import ISoldUI from "./isold.presenter";
import { FETCH_USEDITEMS_SOLD } from "./isold.queries";

export default function ISold() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_USEDITEMS_SOLD);
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  console.log("Sold", data);

  return (
    <ISoldUI
      data={data}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
    />
  );
}
