import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
export default function ApolloCacheStatePage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (boardId: string) => async () => {
    try {
      await deleteBoard({
        variables: {
          boardId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: (prev) => {
                // const deletedData = data;
                const newPrev = prev.filter((prevData) => {
                  return prevData.__ref !== `Board:${data.delereBoard}`; // 삭제된게 아닌것만 걸러서 newPrev 에 담아라
                });
                //
                console.log(newPrev);
                return [...newPrev];
              },
            },
          });
        },

        // refetchQueries: [{ query: FETCH_BOARDS }],
      });
    } catch (error) {
      Modal.error({
        content: error.message,
      });
    }
  };
  return (
    <>
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <span style={{ padding: "30px" }}>{data.writer}</span>
          <span style={{ padding: "30px" }}>{data.title}</span>
          <span style={{ padding: "30px" }}>{data.contents}</span>
          <button onClick={onClickDelete(data._id)}>delete</button>
        </div>
      ))}
    </>
  );
}
