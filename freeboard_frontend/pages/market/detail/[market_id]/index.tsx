import UsedGoodsCommentsList from "../../../../src/components/units/market/detail/comments/list/usedgoodsCommentsList.container";
import UsedGoodsComments from "../../../../src/components/units/market/detail/comments/write/usedgoodsCommentsWrite.container";

import UsedgoodsDetail from "../../../../src/components/units/market/detail/usedgoodsDetail.container";

export default function UsedGoodsDetailPage() {
  return (
    <>
      <UsedgoodsDetail />
      <UsedGoodsComments />
      <UsedGoodsCommentsList />
    </>
  );
}
