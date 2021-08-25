import withAuth from "../../../src/components/commons/hocs/withAuth";
import ISold from "../../../src/components/units/market/mypage/Isold/isold.contatiner";
function ISoldPage() {
  return <ISold />;
}
export default withAuth(ISoldPage);
