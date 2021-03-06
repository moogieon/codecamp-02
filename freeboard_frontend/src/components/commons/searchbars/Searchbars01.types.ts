import { ChangeEvent } from "react";

export interface ISearchbars01Props {
  refetch: any;
  onChangeKeyword: (value: string) => void | { refetch: any };
}

export interface ISearchbars01UIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: () => void;
}
