import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";

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
  const { handleSubmit, register, setValue, trigger } = useForm();
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
    const isBlank = "<p><br></p>";
    setValue("contents", value === isBlank ? "" : value); // 강제로 값만 입력, 이것만 하면 yup에서 검증이 안댐
    trigger("contents"); // 값도 변경이 되고, onChange이벤트도 활성화 된다.
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
