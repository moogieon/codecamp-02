import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import { style } from "@material-ui/system";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export const Quill = styled(ReactQuill)`
  height: 500px;
`;
export default function WebEditorPage() {
  const router = useRouter();
  //   const [contnets,SetContents]=useState()
  const { handleSubmit, register, setValue } = useForm();
  const [createBoard] = useMutation(CREATE_BOARD);
  const onClickButton = async (data) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...data,
            // contnet: data.contents,
          },
        },
      });
      alert("성공!");
      router.push(`/27-web-editor-detail/${result.data.createBoard._id}`); // 템플릿 리터널 ,result에 담아주는 이유가 뭐였지 ,,?
    } catch (error) {
      alert(error.messege);
    }
  };
  const onChangeContents = (value) => {
    setValue("contents", value);
  };
  return (
    <>
      <div>웹 에디터 페이지 입니다.</div>
      <form onSubmit={handleSubmit(onClickButton)}>
        작성자:
        <input type="text" {...register("writer")} />
        <br />
        비밀번호:
        <input type="password" {...register("password")} />
        <br />
        제목:
        <input type="text" {...register("title")} />
        내용:
        <Quill onChange={onChangeContents} />
        {/* <textarea {...register("contents")} /> */}
        <br />
        <br />
        <button type="submit">등록하기</button>
      </form>
    </>
  );
}
