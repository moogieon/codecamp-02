import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();
  function onclickFreeBoard() {
    router.push("/boards");
  }

  return (
    <>
      <LayoutNavigationUI onclickFreeBoard={onclickFreeBoard} />
    </>
  );
}
