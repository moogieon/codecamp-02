import { useRouter } from "next/router";

export default function KaKaomap2Page() {
  const router = useRouter();
  const onClickMove = () => {
    router.push("/29-kakaomap");
  };

  return (
    <>
      <div>맵으로</div>
      <button onClick={onClickMove}>가기!</button>
    </>
  );
}
