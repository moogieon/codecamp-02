import { MouseEvent, useState } from "react";
import Paginations01UI from "./Paginations.presenter";
export default function Paginations01(props) {
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = Math.ceil(Number(props.count) / 10);
  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    const activedPage = Number((event.target as Element).id);
    setActivedPage(activedPage);
  }
  function onClonClilckPrev() {}

  return (
    <Paginations01UI
      onClonClilckPrev={onClonClilckPrev}
      lastPage={lastPage}
      onClickPage={onClickPage}
      startPage={props.startPage}
      activedPage={activedPage}
    />
  );
}
