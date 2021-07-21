import {Banner_1} from "./LayoutBanner.styes"
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function  LayoutBannerUI(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        
      };

    return(

        <>
        <div style={{backgroundColor: 'white', height:'340px'}}>
    <Slider {...settings}>
      <div>
        <Banner_1></Banner_1>
      </div>
      <div>
      <img src="/test_images/under th sea.jpg" style={{height:'300px',width:'100%'}} />
      </div>
      <div>
      <img src="/test_images/cristian-palmer-_30wq9w8zBE-unsplash.jpg" style={{height:'300px',width:'100%'}} />
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
    </Slider>
        </div>
        </>
    )
}