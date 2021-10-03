// import Image from 'next/image'
import { useRouter } from "next/router";
import { useEffect } from "react";
import BoardListPage from "./boards/index";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/boards/");
  }, []);

  return (
    <>
      <BoardListPage />
    </>
  );
}
