export default function BrowserStorage() {
  const onSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "bbb=훈이";
    document.cookie = "ccc=맹구";
  };
  const onSaveLocalStorage = () => {
    localStorage.setItem("bbb", "영희");
  };
  const onSaveSessionStorage = () => {
    sessionStorage.setItem("ccc", "훈이");
  };
  const onLoadCookie = () => {
    // console.log(document.cookie);
    let asdf;
    document.cookie.split("; ").forEach((data) => {
      if (data.startsWith("aaa=")) asdf = data;
    });
    console.log(asdf.split("=")[1]);
  };
  const onLoadLocalStorage = () => {
    // localStorage.setItem("bbb", "영희");
    const asdf = localStorage.getItem("bbb");
    console.log("asdf", asdf);
  };
  const onLoadSessionStorage = () => {
    // sessionStorage.setItem("ccc", "훈이");
    const qwer = sessionStorage.getItem("ccc");
    console.log("qwer", qwer);
  };

  return (
    <>
      <button onClick={onSaveCookie}>쿠키 저장</button>
      <br />
      <button onClick={onSaveLocalStorage}>로컬 스토리지 저장</button>
      <br />
      <button onClick={onSaveSessionStorage}>세션 스토리지 저장</button>
      ==========================================================
      <button onClick={onLoadCookie}>쿠키 불러오기</button>
      <br />
      <button onClick={onLoadLocalStorage}>로컬 스토리지 부르기</button>
      <br />
      <button onClick={onLoadSessionStorage}>세션 스토리지 부르기</button>
    </>
  );
}
