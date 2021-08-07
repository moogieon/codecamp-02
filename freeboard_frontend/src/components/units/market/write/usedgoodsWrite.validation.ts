import * as yup from "yup";
export const schema = yup.object().shape({
  name: yup.string().required("상품명을 입력 하세요"),
  remarks: yup.string().required("내용을 입력해주세요"),
  contents: yup.string().required("내용을 입력해주세요"),
  price: yup.number().required("가격을 입력해주세요"),
  tag: yup.string(),
});
