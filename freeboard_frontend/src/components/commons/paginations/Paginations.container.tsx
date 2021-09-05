import { MouseEvent, useState } from "react";
import Paginations01UI from "./Paginations.presenter";
export default function Paginations01(props: any) {
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = Math.ceil(Number(props.count) / 10);

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    const activedPage = Number((event.target as Element).id);
    setActivedPage(activedPage);
    props.refetch({ page: activedPage });
    history.pushState({ page: activedPage }, "", `?page=${activedPage}`);
  }
  function onClickPrevPage() {
    if (props.startPage <= 1) return;
    setActivedPage(props.startPage - 10);
    props.setStartPage((prev: any) => prev - 10);
  }

  function onClickNextPage() {
    if (props.startPage + 10 > lastPage) return;
    setActivedPage(props.startPage + 10);
    props.setStartPage((prev: any) => prev + 10);
  }
  return (
    <Paginations01UI
      onClickPrevPage={onClickPrevPage}
      lastPage={lastPage}
      onClickPage={onClickPage}
      startPage={props.startPage}
      activedPage={activedPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
