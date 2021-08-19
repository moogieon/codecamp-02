import { gql, useMutation, useQuery } from "@apollo/client";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
    }
  }
`;
const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
export default function OpitimisticUIPage() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "611dc6052d1aa300298e6ee7" },
  });

  const onClickLike = (likeCount) => () => {
    likeBoard({
      variables: { boardId: "611dc6052d1aa300298e6ee7" },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "611dc6052d1aa300298e6ee7" },
      //     },
      //   ],
      optimisticResponse: {
        likeBoard: likeCount + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "611dc6052d1aa300298e6ee7" },
          data: {
            fetchBoard: {
              _id: "611dc6052d1aa300298e6ee7",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <>
      <div>Like: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike(data?.fetchBoard.likeCount)}>👍🏻 Like</button>
    </>
  );
}
