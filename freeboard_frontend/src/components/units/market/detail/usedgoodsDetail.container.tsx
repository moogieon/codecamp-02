import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";

import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

import UsedgoodsDetailUI from "./usedgoodsDetail.presenter";
import {
  FETCH_USER_ITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  TOGGLE_USED_ITEM_PICK,
} from "./usedgoodsDetail.queries";

export default function UsedgoodsDetail() {
  const router = useRouter();
  const { userInfo } = useContext(GlobalContext);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [active, setActive] = useState(false);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USER_ITEM, {
    variables: { useditemId: router.query.market_id },
  });
  const onClickList = () => {
    router.push("/market");
  };

  const onClickBuy = async () => {
    try {
      const results = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.market_id,
        },
      });
      Modal.success({
        content: "구매 완료~~",
        onOk: () => router.push("/market"),
      });
      // console.log(results.data);
    } catch (errors) {
      alert(errors.message);
    }
  };

  const onClickToggle = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: router.query.market_id },
        update(cache, _) {
          cache.modify({
            fields: {
              fetchUseditem: (_, { readField }) => {
                return readField;
              },
            },
          });
        },
      });
      setActive(true);
    } catch (errors) {
      alert(errors.message);
    }
  };
  return (
    <UsedgoodsDetailUI
      data={data}
      userInfo={userInfo}
      onClickList={onClickList}
      onClickBuy={onClickBuy}
      onClickToggle={onClickToggle}
      active={active}
    />
  );
}
