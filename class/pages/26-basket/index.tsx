import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

const Colum = styled.span`
  padding-left: 50px;
  padding-right: 50px;
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();
  const onClickBasket = (basketsData) => () => {
    // console.log(basketsData);
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    let isExists = false;
    baskets.forEach((data) => {
      if (data._id === basketsData._id) isExists = true;
    });
    if (isExists) return;
    // baskets = baskets.filter((data) => data._id !== basketsData._id);  //? 장바구니 넣고 있는거 빼는 방법!

    baskets.push(basketsData);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onClickLogin = () => {
    // 로그인이 완료됨!
    // 로컬스토리에  baskets이 있ㅇ면 . 확인 모달 띄우기
    // 장바구에 데이턱가 잇는데, 장바구니로 이동 하시겠습니까 ?
    router.push("/26-basket-logged-in");
  };
  return (
    <>
      <div>
        {data?.fetchBoards.map((data, index) => (
          <div key={data._id}>
            <Colum>{index + 1}</Colum>
            <Colum>{data.writer}</Colum>
            <Colum>{data.title}</Colum>
            <button onClick={onClickBasket(data)}>장바구니 담기!</button>
          </div>
        ))}
        <button onClick={onClickLogin}>로그인</button>
      </div>
    </>
  );
}
