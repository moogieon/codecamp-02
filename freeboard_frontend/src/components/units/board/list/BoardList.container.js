import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUi from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  function onClickMoveToBoardDetail(event) {
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
    />
  );
}
