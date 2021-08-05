import { Wrapper, Gallery, Headr, List } from "./LayoutBanner.styes";

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
}
