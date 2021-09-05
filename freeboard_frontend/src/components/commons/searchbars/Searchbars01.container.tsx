import { ChangeEvent, useState } from "react";
import Searchbars01UI from "./Searchbars01.presenter";
import { ISearchbars01Props } from "./Searchbars01.types";

export default function Searchbars01(props: ISearchbars01Props) {
  // const getDebounce = _.debounce((data) => {
  //   props.refetch({ search: data });
  //   props.onChangeKeyword(data);
  // }, 200);
  // * 검색 버튼 안누르고 검색 가능
  const [search, setSearch] = useState("");
  function onClickSearch() {
    props.refetch({ search: search });
  }

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    // getDebounce(event.target.value);
    // * 검색 버튼 안누르고 검색 가능
    setSearch(event.target.value);
  }

  return (
    <Searchbars01UI
      onClickSearch={onClickSearch}
      onChangeSearchbar={onChangeSearchbar}
    />
  );
}
