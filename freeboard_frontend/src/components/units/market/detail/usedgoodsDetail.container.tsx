import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

import UsedgoodsDetailUI from "./usedgoodsDetail.presenter";
import { FETCH_USER_ITEM } from "./usedgoodsDetail.queries";

export default function UsedgoodsDetail() {
  const router = useRouter();
  const { userInfo } = useContext(GlobalContext);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USER_ITEM, {
    variables: { useditemId: router.query.market_id },
  });
  const onClickList = () => {
    router.push("/market");
  };

  return (
    <UsedgoodsDetailUI
      data={data}
      userInfo={userInfo}
      onClickList={onClickList}
    />
  );
}
