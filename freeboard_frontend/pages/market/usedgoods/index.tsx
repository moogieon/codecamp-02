import withAuth from "../../../src/components/commons/hocs/withAuth";
import UsedgoodsWrite from "../../../src/components/units/market/write/usedgoodsWrite.container";

function UsedgoodsWritePage() {
  return <UsedgoodsWrite />;
}
export default withAuth(UsedgoodsWritePage);
