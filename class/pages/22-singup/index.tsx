import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../src/commons/types/generated/types";
import withAuth from "../../src/components/commons/hocs/withAuth";

const CREAT_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

function SingUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [creatUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREAT_USER);

  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function onChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function onChangePawssword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function onClickSingup() {
    try {
      await creatUser({
        variables: {
          createUserInput: {
            email: email,
            password: password,
            name: name,
          },
        },
      });
    } catch (error) {
      alert(error.massege);
    }
  }

  return (
    <>
      email:<input id="email" type="text" onChange={onChangeEmail}></input>
      <br />
      name:<input type="text" onChange={onChangeName}></input>
      <br />
      pw: <input type="text" onChange={onChangePawssword}></input>
      <br />
      <button onClick={onClickSingup}>가입하기</button>
    </>
  );
}
export default withAuth(SingUpPage);
