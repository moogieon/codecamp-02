import { Page } from "./Paginations.styles";

export default function Paginations01U1(props: any) {
  return (
    <>
      <Page onClick={props.onClickPrevPage}>이전</Page>
      {new Array(10).fill(1).map((_, index) => {
        const currentPage = props.startPage + index;
        return (
          currentPage <= props.lastPage && (
            <Page
              key={currentPage}
              id={String(currentPage)}
              onClick={props.onClickPage}
              isActive={currentPage === props.activedPage}
            >
              {currentPage}
            </Page>
          )
        );
      })}
      <Page onClick={props.onClickNextPage}>다음</Page>
    </>
  );
}
