import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

import UsedgoodsDetailUI from "./usedgoodsDetail.presenter";
import {
  FETCH_USER_ITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  TOGGLE_USED_ITEM_PICK,
  DELETE_USED_ITEM,
} from "./usedgoodsDetail.queries";
interface Props {
  fetchUseditem: any;
}
export default function UsedgoodsDetail({ fetchUseditem }: Props) {
  const router = useRouter();
  const queryId = router.query.market_id;
  useEffect(() => {
    if (!router.isReady) return;
    console.log(queryId);
  }, [router.isReady]);

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [active, setActive] = useState(false);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USER_ITEM, {
    variables: { useditemId: String(router.query.market_id) },
  });
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const onClickList = () => {
    router.push("/market");
  };

  const onClickBuy = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
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
      alert("오류");
    }
  };
  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.market_id },
      });
      Modal.confirm({
        content: "삭제 완료~!",
        onOk: () => router.push("/market"),
      });
    } catch (error) {}
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
      alert("오류");
    }
  };
  const onClickEdit = () => {
    router.push(`/market/detail/${router.query.market_id}/edit`);
  };
  return (
    <UsedgoodsDetailUI
      data={data}
      onClickList={onClickList}
      onClickBuy={onClickBuy}
      onClickToggle={onClickToggle}
      active={active}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      queryId={queryId}
      fetchUseditem={fetchUseditem}
    />
  );
}
