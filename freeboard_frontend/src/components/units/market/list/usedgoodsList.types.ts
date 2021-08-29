import { IQuery } from "../../../../commons/types/generated/types";

export interface IUsedGoodsList {
  data?: Pick<IQuery, "fetchUseditems">;
  onClickPost: any;
  onClikWritePage: () => void;
  onClickToday: any;
  basket: any;
  onLoadMore: any;
  hasMore: any;
}
