interface IProps {
  count: number;
  school: string;
}

export default function FunctaionalComponentUI(aaa: IProps) {
  return (
    <>
      <div style={{ fontSize: "30px" }}>컴포넌는 프리젠터 입니다.</div>
      <div style={{ fontSize: "30px" }}>{aaa.count}</div>
      <div style={{ fontSize: "30px" }}>{aaa.school}</div>
    </>
  );
}
