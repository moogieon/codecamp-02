import { useRouter } from "next/router";
import MyPagesUI from "./mypages01.presenter";

export default function MyPages(props: any) {
  const router = useRouter();

  const handleMenuClick = (path: string) => {
    router.push(path);
  };
  return <MyPagesUI handleMenuClick={handleMenuClick} />;
}
