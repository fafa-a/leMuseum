import React, { useRef, useEffect, useState } from "react";
import { TweenLite, Power3 } from "gsap";

const Slider = (post) => {
  const data = post.post;
  const name = `${
    data.firstName == null ? data.lastName : data.firstName + data.lastName
  }`;
  // calcul de l'img par rapport au profilepics pour set la class Acitve
  const urlProps = data.artwork[0].src;

  // iteration pour l'index dynamique de la src et du state

  const src = data.artwork;
  const items = src.keys();
  // for (const key of iterator) {
  //   console.log(key);
  // }
  let i = [1];

  let imageList = useRef(null);
  let sliderList = useRef(null);

  const [state, setState] = useState({
    isActive: true,
    isVisible: false,
  });

  useEffect(() => {
    TweenLite.to(sliderList.children[0], 0, {
      opacity: 1,
    });
  }, []);

  const nextSlide = () => {
    for (const item of items) {
      if (imageList.children[item].classList.contains("active")) {
        setState({ isActive: false, isVisible: true });
      } else if (imageList.Children[item].classList.contains("active")) {
        setState({ isActive: true, isVisible: false });
      }
    }
  };

  return (
    <div className="slider-content">
      <div className="slider">
        <div className="arrows">
          <span>
            <i className="fas fa-long-arrow-alt-left"></i>
          </span>
        </div>

        <div className="slider__inner">
          <div className="slider__inner__image">
            <ul ref={(el) => (imageList = el)}>
              {data.artwork.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    urlProps === item.src
                      ? state.isActive
                        ? "active"
                        : ""
                      : "notActive"
                  } ${"slide" + i++}`}
                >
                  <img key={"key" + index} src={item.src} alt={item.alt} />;
                  {/* {console.log(typeof urlProps)};{console.log(typeof item.src)}
                  {console.log(urlProps)}
                  {console.log(item.src)}
                  {console.log(urlProps === item.src)} */}
                </li>
              ))}
            </ul>
          </div>

          <div className="slider__inner__content">
            <ul ref={(el) => (sliderList = el)}>
              {data.artwork.map((item, index) => (
                <li key={index}>
                  <div className="content__inner">
                    <p className="alt"> {item.alt} </p>
                    <h3 className="name"> {name} </h3>
                    <h4 className="details">
                      {item.location + " " + item.year}
                    </h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div onClick={nextSlide} className="arrows arrows__right">
          <span>
            <i className="fas fa-long-arrow-alt-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
