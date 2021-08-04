import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickLogin() {
    router.push("/market/login");
  }
  return <LayoutHeaderUI onClickLogin={onClickLogin} />;
}
