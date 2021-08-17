import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import UsedGoodsCommentsListUI from "./usedgoodsCommentsList.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./usedgoodsCommentsList.queries";

export default function UsedGoodsCommentsList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.market_id },
  });
  //   console.log(data);
  return <UsedGoodsCommentsListUI data={data} />;
}
