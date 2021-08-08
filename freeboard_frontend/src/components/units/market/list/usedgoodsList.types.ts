import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IUsedGoodsList {
  data?: Pick<IQuery, "fetchUseditems">;
  onClickPost: (event: MouseEvent<HTMLDivElement>) => void;
  onClikWritePage: () => void;
}
