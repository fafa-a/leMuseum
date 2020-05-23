import React, { useRef, useEffect, useState } from "react";
import { TweenLite, Power3 } from "gsap";
import { Link } from "react-router-dom";

const Slider = (props) => {
  const {
    post: { firstName, lastName, artwork },
  } = props;
  // const { artwork } = post;

  const name = `${firstName == null ? lastName : firstName + lastName}`;

  // iteration pour l'index dynamique de la src et du state
  let src = artwork;

  const items = src.keys();
  const currentInt = (number) => parseInt(number.toString().slice(1, 2));

  let i = [1];

  let imageList = useRef(null);
  let sliderList = useRef(null);
  let slide = useRef(null);

  const imageWidth = 768;

  const [x, setX] = useState(0);

  const [state, setState] = useState({
    isActive: true,
    isVisible: false,
  });

  useEffect(() => {
    TweenLite.to(sliderList.children[0], 0, {
      opacity: 1,
    });
  }, []);

  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.3,
      ease: Power3.easeout,
    });
  };

  const fadeOut = (index, duration) => {
    TweenLite.to(sliderList.children[index], duration, {
      opacity: 0,
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(sliderList.children[index], duration, {
      opacity: 1,
      delay: 0.3,
    });
  };

  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeout,
    });
  };

  const nextSlide = () => {
    const length = imageList.children.length;
    const lastIndex = length - 1;
    const index = x / imageWidth;
    const current = currentInt(index);
    const next = current + 1;
    const last = current - 1;
    const nan = isNaN(current);

    // console.log(last);
    console.log(lastIndex === current);

    console.log(lastIndex);
    // console.log(length);

    // console.log(length !== current);
    console.log(current);
    // console.log(next);

    x === -imageWidth * (length - 1) ? setX(0) : setX(x - imageWidth);

    // slideLeft(0, 1);
    slideLeft(nan ? 0 : next, 1);
    slideLeft(1, 1);
    slideLeft(length !== current ? next : setX(0), 1);

    scale(1, 1);
    slideLeft(2, 1);
    slideLeft(2, 0);

    // slideLeft(0, 1, 0);
    // slideLeft(nan ? 0 : current, 1, nan ? last : current);
    // slideLeft(1, 1, 1);
    // slideLeft(nan ? 1 : current, 1, nan ? 1 : current);
    fadeOut(nan ? 0 : current, 1);
    fadeIn(nan || current === 6 ? 1 : next, 1);
  };

  // const slideRight = (index, duration, multiplied = 1) => {
  //   TweenLite.to(imageList.children[index], duration, {
  //     x: imageWidth * multiplied,
  //     ease: Power3.easeout,
  //   });
  // };

  const prevSlide = () => {
    x === 0 ? setX(-imageWidth * (src.length - 1)) : setX(x + imageWidth);
    const current = currentInt(x);
    const prev = current - 1;
    const nan = isNaN(current);
    const lastItem = src.length - 1;

    fadeOut(nan ? 0 : current, 1);
    fadeIn(nan ? lastItem : prev, 1);
  };

  const useHover = function () {
    const divHover = useRef();
    const [hovered, setHovered] = useState(false);

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    useEffect(() => {
      divHover.current.addEventListener("mouseenter", enter);
      divHover.current.addEventListener("mouseleave", leave);
      return () => {
        divHover.current.removeEventListener("mouseenter", enter);
        divHover.current.removeEventListener("mouseleave", leave);
      };
    }, [divHover]);

    return [divHover, hovered];
  };

  const [divHover, hovered] = useHover();
  // const srcArray = ([] = src.match(/\p{Decimal_Number}+/gu)[0]);
  // const regexInt = /\p{Decimal_Number}+/gu;
  // const indexOf = src.match("tamer8dddsf1qsdda5fdsf654");
  // console.log(typeof indexOf);

  const match = [];
  const findSrcNumber = () => {
    for (const items of src) {
      const item = items.src;
      const resultInt = item.match(/\p{Decimal_Number}+/gu)[0];
      match.push(resultInt);
    }
    return match;
  };
  findSrcNumber();

  return (
    <div className="slider-content">
      <div className="slider">
        <div className="close">
          <Link to="/">
            <p>close</p>
            <i className="fas fa-times cross"></i>
          </Link>
        </div>
        <div
          onClick={prevSlide}
          className={hovered ? "arrows arrows--visible" : "arrows"}
        >
          <span>
            <i className="fas fa-long-arrow-alt-left"></i>
          </span>
        </div>

        <div className="slider__inner" ref={divHover}>
          <div className="slider__inner__image">
            <ul ref={(el) => (imageList = el)}>
              {artwork.map(({ src, alt }, index) => (
                <li
                  ref={slide}
                  key={index}
                  // style={{ transform: `translate(${x}%)` }}
                  className={`${
                    index === match[index] - 1 ? "active" : state.isVisible
                  }`}
                >
                  {console.log(index)}
                  {console.log(typeof index)}
                  {console.log(match[index])}
                  {console.log(typeof match)}
                  {console.log("##############################")}
                  <img key={"key" + index} src={src} alt={alt} />;
                </li>
              ))}
            </ul>
          </div>

          <div className="slider__inner__content">
            <ul ref={(el) => (sliderList = el)}>
              {artwork.map(({ alt, location, year }, index) => (
                <li key={index}>
                  <div className="content__inner">
                    <p className="alt"> {alt} </p>
                    <h3 className="name"> {name} </h3>
                    <h4 className="details">{location + " " + year}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          onClick={nextSlide}
          className={
            hovered
              ? "arrows arrows__right arrows--visible"
              : "arrows arrows__right"
          }
        >
          <span>
            <i className="fas fa-long-arrow-alt-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
