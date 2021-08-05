import Buttons01 from "../../commons/buttons/Button01";
import Input01 from "../../commons/inputs/input01";
import { Title } from "./Form.styles";
export default function FormUI(props: any) {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Title>안녕 ? </Title>
        {/* E-mail:
        <input
          type="text"
          {...props.register("email", { required: true })}
        ></input> */}
        {/* <Errors>{props.errors.email?.message} </Errors> */}
        <Input01
          inputName="E-mail"
          type="text"
          register={{ ...props.register("email") }} // {} 두개가 붙는 이유 이만큼이 한 덩어리라서
          errorsMessage={props.errors.email?.message}
        />
        <Input01
          inputName="password"
          type="password"
          regisert={{ ...props.register("password") }}
          errorsMessage={props.errors.passwrord?.message}
        />
        <Buttons01 type="submit" buttonName="Login" isActive={props.isActive} />
        {/* <Login type="submit" isActive={props.isActive}>
          Login
        </Login> */}
      </form>
    </>
  );
}
