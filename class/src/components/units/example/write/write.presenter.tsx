import { useContext } from "react";
import { BBBcontext } from "../../../../../pages/example/context/edit/index";
export default function WriteUI() {
  const { isEdit } = useContext(BBBcontext);
  return (
    <>
      <div>
        <h1>{isEdit ? "수정" : "등록"}</h1>
      </div>
    </>
  );
}
