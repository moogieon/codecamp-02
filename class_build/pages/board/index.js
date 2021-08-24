import Head from "next/head";

export default function BoardPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="정적 게시판!!" />
        <meta property="og:desctiption" content="이 주소는 정적 주소입니다." />
        <meta
          property="og:image"
          content="http://blog.jinbo.net/attach/615/200937431.jpg"
        />
      </Head>

      <div>게시판입니다.</div>
    </>
  );
}
