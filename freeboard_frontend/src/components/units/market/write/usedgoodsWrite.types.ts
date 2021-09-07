import { FormEvent } from "react";
import { DeepMap, FieldError, FieldValues } from "react-hook-form";

export interface IUsedgoodsWriteProps {}
export interface IUsedgoodsWriteUIProps {
  onClickRegist: (event: FormEvent<HTMLFormElement>) => void;
  register: any;
  handleSubmit: any;
  errors: DeepMap<FieldValues, FieldError>;
  onCilckEdit: any;
  onChangeContents: any;
  setLating: any;
  lating: any;
  onChangeFiles: any;
}
