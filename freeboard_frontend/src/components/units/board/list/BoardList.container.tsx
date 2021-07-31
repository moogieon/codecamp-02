import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardListUi from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  function onClickMoveToBoardDetail(event: any) {
    router.push(`/boards/detail/${event.target.id}`);
  }
  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  return (
    <BoardListUi
      onData={data}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      setStartPage={setStartPage}
      refetch={refetch}
      startPage={startPage}
    />
  );
}
