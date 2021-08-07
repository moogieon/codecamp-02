import withAuth from "../../src/components/commons/hocs/withAuth";
import UsedGoodsList from "../../src/components/units/market/list/usedgoodsList.container";

function UsedGoddsListPage() {
  return <UsedGoodsList />;
}

export default withAuth(UsedGoddsListPage);
