import * as yup from "yup";
export const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("이메일을 입력하세요"),
  password: yup
    .string()
    .min(4, "비밀번호는 4자 이상입니다. ")
    .max(12, "비밀번호는 12자 이하입니다. ")
    .required("비밀번호를 입력 하세요"),
  name: yup
    .string()
    .min(2, "이름을 입력해주세요")
    .required("이름을 입력 하세요"),
});
