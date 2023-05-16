import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();
  const handleMenuClick = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <LayoutNavigationUI handleMenuClick={handleMenuClick} />
    </>
  );
}
