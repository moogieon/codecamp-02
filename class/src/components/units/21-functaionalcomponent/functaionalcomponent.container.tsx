import FunctaionalComponentUI from "./functaionalcomponent.presenter";

export default function FunctaionalComponent() {
  // return <FunctaionalComponentUI count={123} school='토끼초등학교' />;

  return (
    <>{FunctaionalComponentUI({ count: 456, school: "다람쥐초등하교" })}</>
  );
}
