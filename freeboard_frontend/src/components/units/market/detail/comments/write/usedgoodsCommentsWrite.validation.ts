import * as yup from "yup";
export const schema = yup.object().shape({
  contents: yup.string().required("내용을 입력해 주세요"),
});
