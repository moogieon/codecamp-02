import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식에 적합 하지 않아요")
    .required("이메일은 필수 요소이다."),
  password: yup
    .string()
    .min(8, "비밀번호는 8자 이상")
    .max(15, "비밀번호는 15자 이하")
    .required("비밀번호는 필수 요소이다."),
});
