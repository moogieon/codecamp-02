import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickLogin() {
    router.push("/market/login");
  }
  function onClickSingUp() {
    router.push("/market/singup");
  }
  return (
    <LayoutHeaderUI onClickLogin={onClickLogin} onClickSingUp={onClickSingUp} />
  );
}
