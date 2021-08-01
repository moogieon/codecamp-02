import { Page } from "./Paginations.styles";

export default function Paginations01U1(props) {
  return (
    <>
      <Page></Page>
      {new Array(10).fill(1).map((_, index) => {
        const currentPage = props.startPage + index;
        return (
          currentPage <= props.lastPage && (
            <Page
              id={String(currentPage)}
              onClick={props.onClickPage}
              isActive={currentPage === props.activedPage}
            ></Page>
          )
        );
      })}
    </>
  );
}
