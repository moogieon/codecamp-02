import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import BestListUI from "./usedgoodsBest.presenter";
import { FETCH_USEDITEMS_OF_THE_BEST } from "./usedgoodsBest.queries";

export default function BestList(props) {
  const { data } = useQuery(FETCH_USEDITEMS_OF_THE_BEST);
  const router = useRouter();
  // console.log(data);
  const onClickGoods = (Goods) => () => {
    router.push(`/market/detail/${Goods}`);
    // console.log(data);
  };

  return <BestListUI data={data} onClickGoods={onClickGoods} />;
}
