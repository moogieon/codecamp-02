import { Page } from "./Paginations.styles";

export default function Paginations01U1(props) {
  return (
    <>
      <Page onClilck={props.onClonClilckPrev}></Page>
      {new Array(10).fill(1).map((_, index) => {
        const currentPage = props.startPage + index;
        return (
          currentPage <= props.lastPage && (
            <Page
              key={currentPage}
              onClilck={props.onClonClilckPrev}
              id={String(currentPage)}
            >
              {currentPage}
            </Page>
          )
        );
      })}
    </>
  );
}
