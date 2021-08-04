import {} from "./LayoutBanner.styes";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageGallery from 'react-image-gallery';


  return (
    <>
      <div style={{ backgroundColor: "black", height: "340px" }}>
        <ImageGallery {...settings}>
          <div></div>
          <div>
            <img
              src="/test_images/under th sea.jpg"
              style={{ height: "300px", width: "100%" }}
            />
          </div>
          <div>
            <img
              src="/test_images/cristian-palmer-_30wq9w8zBE-unsplash.jpg"
              style={{ height: "300px", width: "100%" }}
            />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </ImageGallery>
      </div>
    </>
  );
}
