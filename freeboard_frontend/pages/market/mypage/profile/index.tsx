import withAuth from "../../../../src/components/commons/hocs/withAuth";
import Profiel from "../../../../src/components/units/market/mypage/profile/profile.container";

function ProfilePage() {
  return <Profiel />;
}
export default withAuth(ProfilePage);
