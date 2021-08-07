import { Page } from "./Paginations.styles";

export default function Paginations01U1(props) {
  return (
    <>
      <Page onClick={props.onClonClilckPrev}>이전</Page>
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
      <Page>다음</Page>
    </>
  );
}
