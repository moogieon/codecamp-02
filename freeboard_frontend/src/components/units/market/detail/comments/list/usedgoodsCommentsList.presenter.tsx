import UsedGoodsCommentsListUIItem from "./usedgoodsCommentsList.presenterItem";

import { IUsedGoodsCommentListUIProps } from "./usedgoodsCommentsList.types";

export default function UsedGoodsCommentsListUI(
  props: IUsedGoodsCommentListUIProps
) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((data) => (
        <UsedGoodsCommentsListUIItem key={data._id} data={data} />
      ))}
    </>
  );
}
