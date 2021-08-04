export default function HOFPage() {
  const onClickButton = (asd) => (event) => {
    alert(asd);
    console.log(asd);
  };

  return (
    <>
      <button onClick={onClickButton("12345")}>저를 클릭하세요 ㅠ_ㅠ</button>
    </>
  );
}
