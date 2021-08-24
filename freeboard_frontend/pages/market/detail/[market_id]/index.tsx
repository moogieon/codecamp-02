import withAuth from "../../../../src/components/commons/hocs/withAuth";
import UsedGoodsCommentsList from "../../../../src/components/units/market/detail/comments/list/usedgoodsCommentsList.container";
import UsedGoodsComments from "../../../../src/components/units/market/detail/comments/write/usedgoodsCommentsWrite.container";

import UsedgoodsDetail from "../../../../src/components/units/market/detail/usedgoodsDetail.container";

function UsedGoodsDetailPage() {
  return (
    <>
      <UsedgoodsDetail />
      <UsedGoodsComments />
      <UsedGoodsCommentsList />
    </>
  );
}
export default withAuth(UsedGoodsDetailPage);
