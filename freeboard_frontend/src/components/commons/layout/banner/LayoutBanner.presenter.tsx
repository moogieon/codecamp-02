import { Wrapper, Gallery, Headr, List } from "./LayoutBanner.styes";
// import ReactDOM from "react-dom";
// import Coverflow from "react-coverflow";

export default function LayoutBannerUI() {
  const images = [
    {
      thumbnailClass: "featured-thumb",
      original: "/market/login/Ocean1.jpeg",
      description: "Frank",
      // originalClass: "featured-slide",
    },
    {
      original: "/market/login/Ocean2.jpg",
      embedUrl:
        "https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0",
    },
  ];
  return (
    <>
      <Wrapper>
        <Headr>
          <List>List</List>
        </Headr>
        <Gallery
          items={images}
          slideInterval={2500}
          showFullscreenButton={false}
          slideOnThumbnailOver={true}
          autoPlay={true}
          slideDuration={450}
          // showVideo={}
        ></Gallery>
      </Wrapper>
    </>
  );

  // const fn = function () {
  //   /* do your action */
  // };
  // // if (typeof window === "undefined")
  // return (
  //   <>
  //     <Coverflow
  //       width="1200"
  //       height="500"
  //       classes={{ background: "rgb(180, 167, 167)" }}
  //       className=""
  //       displayQuantityOfSide={2}
  //       navigation={false}
  //       enableScroll={true}
  //       clickable={true}
  //       active={0}
  //     >
  //       <div
  //         onClick={() => fn()}
  //         onKeyDown={() => fn()}
  //         role="menuitem"
  //         tabIndex="0"
  //       >
  //         <img
  //           src="/market/login/Blondcover.jpg"
  //           alt="title or description"
  //           style={{
  //             display: "block",
  //             width: "100%",
  //           }}
  //         />
  //       </div>
  //       <img
  //         style={{
  //           display: "block",
  //           width: "100%",
  //         }}
  //         src="/market/login/orange.jpg"
  //         // alt="title or description"
  //         data-action="http://andyyou.github.io/react-coverflow/"
  //       />
  //       <img
  //         src="/market/login/Ocean2.jpg"
  //         // alt="title or description"
  //         data-action="http://andyyou.github.io/react-coverflow/"
  //       />
  //       <img
  //         src="/market/login/Ocean1.jpeg"
  //         // alt="title or description"
  //         data-action="http://andyyou.github.io/react-coverflow/"
  //       />
  //     </Coverflow>
  //   </>
  // );
}
