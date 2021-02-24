import React from "react";
import SlickSlider from "../../UI/Slick";

// const NextArrow = ({className, onClick}) => {
//     return (
//         <button className={className} onClick={onClick}><i className="fa fa-angle-right"/></button>
//     )
// };

// const PrevArrow = ({className, onClick}) => {
//     return (
//         <button className={className} onClick={onClick}><i className="fa fa-angle-left"/></button>
//     )
// };

const Slider = ({ images }) => {
  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    // nextArrow: <NextArrow/>,
    // prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={"slider-area"}>
      <SlickSlider settings={settings}>
        {images?.map((item) => (
          <div key={item}>
            <div
              className="slider-item"
              style={{ backgroundImage: `url(${item})` }}
            ></div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};
export default Slider;
