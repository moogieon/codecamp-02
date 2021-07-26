import { useEffect, useState } from "react";
import axios from "axios";
export default function useEffectAxiosPage() {
  const [imgUtl, setIMgUrl] = useState("");

  useEffect(() => {
    const getImg = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setIMgUrl(result.data.message);
    };
    getImg();
  }, []);

  return (
    <>
      <img src={imgUtl} />
    </>
  );
}
