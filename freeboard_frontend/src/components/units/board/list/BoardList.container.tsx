import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardListUi from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const onClickMoveToBoardDetail = (deatail: any) => () => {
    router.push(`/boards/detail/${deatail}`);
    // console.log(event.target.id);
  };
  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  return (
    <BoardListUi
      onData={data}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      setStartPage={setStartPage}
      refetch={refetch}
      startPage={startPage}
      dataBoardsCount={dataBoardsCount}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
