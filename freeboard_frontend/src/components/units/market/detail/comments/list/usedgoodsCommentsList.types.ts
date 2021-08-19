import {
  IQuery,
  IUseditemQuestion,
} from "../../../../../../commons/types/generated/types";

export interface IUsedGoodsCommentListUIProps {
  data?: IQuery;
}

export interface IUsedGoodsCommentListUIItemProps {
  data: IUseditemQuestion;
  // showReplyInput: Boolean;
  // onClick: () => void;
}
