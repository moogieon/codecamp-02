import { useContext } from "react";
import { AAAcontext } from "../../../../pages/21-contextAPI/index";

export default function ContextAPIUI() {
  const { isEdit } = useContext(AAAcontext);
  return (
    <>
      <div>{isEdit ? "수정하기" : "등록하기"} </div>
    </>
  );
}
