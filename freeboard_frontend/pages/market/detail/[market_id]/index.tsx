import request from "graphql-request";
import withAuth from "../../../../src/components/commons/hocs/withAuth";
import UsedGoodsCommentsList from "../../../../src/components/units/market/detail/comments/list/usedgoodsCommentsList.container";
import UsedGoodsComments from "../../../../src/components/units/market/detail/comments/write/usedgoodsCommentsWrite.container";

import UsedgoodsDetail from "../../../../src/components/units/market/detail/usedgoodsDetail.container";
import { FETCH_USER_ITEM } from "../../../../src/components/units/market/detail/usedgoodsDetail.queries";
import { FETCH_USED_ITEMS } from "../../../../src/components/units/market/list/usedgoodsList.queries";

interface Props {
  fetchUseditem: any;
}
function UsedGoodsDetailPage({ fetchUseditem }: Props) {
  return (
    <>
      <UsedgoodsDetail fetchUseditem={fetchUseditem} />
      <UsedGoodsComments />
      <UsedGoodsCommentsList />
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await request(
    "https://backend08.codebootcamp.co.kr/graphql22",
    FETCH_USED_ITEMS
  );

  return {
    paths: data?.fetchUseditems.map((item: any) => ({
      params: {
        market_id: item._id.toString(),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const data = await request(
    "https://backend08.codebootcamp.co.kr/graphql22",
    FETCH_USER_ITEM,
    { useditemId: context.params.market_id }
  );
  return { props: { fetchUseditem: data.fetchUseditem } };
};

export default withAuth(UsedGoodsDetailPage);
