import React from "react";
import DestinationCards from "../../cards/destination/DestinationCards";
import DestinationData from "../../cards/destination/destinationData.json";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';


  
  const DestinationMain = (props) => {
    const slider = React.useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1424,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              },
            },
      
            {
              breakpoint: 1124,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
              },
            },
          ],
        };
    return (
        <div>
        <h1>Slider</h1>
        <Slider ref={slider} {...settings}>
            { DestinationData.map((item) => {
              return (
                <DestinationCards title={item.title} src={item.src} />
              )
              
            }
              )
            }
        </Slider>
      </div>    
    );
  }
  
  export default DestinationMain;