// import { Wrapper, Gallery, Headr, List } from "./LayoutBanner.styes";
// import ReactDOM from "react-dom";

import dynamic from "next/dynamic";
// @ts-ignore
const Coverflow = dynamic(() => import("react-coverflow"), {
  ssr: false,
});

export default function LayoutBannerUI() {
  // const images = [
  //   {
  //     thumbnailClass: "featured-thumb",
  //     original: "/market/login/Ocean1.jpeg",
  //     description: "Frank",
  //     // originalClass: "featured-slide",
  //   },
  //   {
  //     original: "/market/login/Ocean2.jpg",
  //     embedUrl:
  //       "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
  //   },
  // ];
  // return (
  //   <>
  //     <Wrapper>
  //       <Headr>
  //         <List>List</List>
  //       </Headr>
  //       <Gallery
  //         items={images}
  //         slideInterval={2500}
  //         showFullscreenButton={false}
  //         slideOnThumbnailOver={true}
  //         autoPlay={true}
  //         slideDuration={450}
  //         // showVideo={}
  //       ></Gallery>
  //     </Wrapper>
  //   </>
  // );

  const fn = function () {
    /* do your action */
  };
  // if (typeof window === "undefined")

  return (
    // @ts-ignore
    <Coverflow
      width="1200"
      height="500"
      infiniteScroll
      classes={{ background: "rgb(0, 0, 0)" }}
      className=""
      displayQuantityOfSide={2}
      // navigation
      enableScroll={true}
      clickable={true}
      active={0}
    >
      <div onClick={() => fn()} onKeyDown={() => fn()} role="menuitem">
        <img
          src="/market_img/login/Blondcover.jpg"
          alt="title or description"
          style={{
            display: "block",
            width: "100%",
          }}
        />
      </div>
      <img
        style={{
          display: "block",
          width: "100%",
        }}
        src="/market_img/login/orange.jpg"
        // alt="title or description"
        data-action="https://www.youtube.com/playlist?list=OLAK5uy_n6EyWhFOckC60cQK8RG64Wt6tIxJmRh-I"
      />
      <img
        src="/market_img/login/Ocean2.jpg"
        // alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
      <img
        src="/market_img/login/Ocean1.jpeg"
        // alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
    </Coverflow>
  );
}
