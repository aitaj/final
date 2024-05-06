import React, { useEffect,useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { useDispatch, useSelector } from "react-redux";
const Partner = ({ companies }) => {
  const [categoryClicked, setCategoryClicked] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      {/* <h1 className="text-center my-5">Partnyorlarımız</h1> */}
      <OwlCarousel
        className="owl-theme"
        autoplayTimeout={7000}
        items={5}
        autoplay={true}
        loop
        margin={10}
        loop={true}
        dots={false}
      >
        {companies.map((item) => {
          return (
            <a target="_self" href={item.name}>
              <img className="carousel-image ml-2 mr-2" src={item.imagePath} />
            </a>
          );
        })}
      </OwlCarousel>
    </div>
  );
};

export default Partner;
