import { memo } from "react";

function Presenter({ countState }) {
  console.log(countState);
  console.log("프리젠터(자식) 렌더링 시작이죠");
  return (
    <>
      <div>========== 프리젠터 ==========</div>
      <div>프리젠터 입니당</div>

      <div>============================</div>
    </>
  );
}
export default memo(Presenter);
