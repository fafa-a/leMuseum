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

  let imageList = useRef(null);
  let sliderList = useRef(null);
  let slide = useRef(null);

  const imageWidth = 768;
  const [state, setState] = useState({
    isActive: true,
    isVisible: false,
  });
  const [x, setX] = useState(0);

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

  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeout,
    });
  };

  const nextSlide = () => {
    const lastChild = imageList.lastChild.classList.value;

    const length = imageList.children.length;
    const lastIndex = length - 1;
    const ix = x / imageWidth;

    const index = currentInt(ix);
    const next = index + 1;
    const last = index - 1;
    const nan = isNaN(index);
    const target = imageList.children[nan ? ix : index].classList.value;

    x === -imageWidth * (length - 1) ? setX(0) : setX(x - imageWidth);

    // console.log(`ix = ${ix}`);

    console.log(`x = ${x}`);
    console.log(`ix = ${ix}`);
    console.log(`index = ${index}`);
    console.log(`next = ${next}`);
    console.log(`last = ${last}`);
    console.log(`lastChild = ${lastChild}`);

    console.log(`lastIndex = ${lastIndex}`);
    console.log(`target = ${target}`);
    console.log(`new = ${nan ? ix : index}`);

    // console.log(
    //   imageList.children[index].classList.contains(`active${lastIndex}`)
    // );

    // console.log(
    //   imageList.children[nan ? ix : index].contains(`active${next}`) ===
    //     imageList.children[lastIndex].contains(`active${next}`)
    // );

    if (imageList.children[nan ? ix : index].classList.contains(`active${1}`)) {
      slideLeft(nan ? ix : null, nan ? 1 : null);
      slideLeft(nan ? ix + 1 : null, 1, nan ? 1 : null);
      scale(1, 1);
      slideLeft(2, 1);
      // slideLeft(2, 0);
      console.log("first step");
    } else if (
      imageList.children[index].classList.contains(`active${lastIndex}`)
    ) {
      // slideLeft(next + 1, 1, next);
      slideLeft(next, 1, next);
      slideLeft(index, 1, next);

      slideRight(1, 0, 2);
      slideLeft(0, 1, 2);
      scale(next, 1);

      console.log("last step");
    } else if (imageList.children[index].classList.contains(`active${next}`)) {
      slideLeft(next + 1, 1, next);
      slideLeft(next, 1, next);
      slideLeft(index, 1, next);
      scale(next, 1);

      console.log("second step");
    }
    // else if (
    //   lastChild ===
    //   imageList.children[index].classList.contains(`active${next}`)
    // ) {
    //   console.log("third step");
    // }
    // console.log(
    //   imageList.children[next].classList.contains(`active${index}`)
    // );
    // console.log(last);
    // console.log(lastIndex === index);

    // console.log(lastIndex);
    // console.log(length);

    // console.log(length !== index);
    // console.log(index);
    // console.log(next);

    // slideLeft(0, 1);

    // slideLeft(0, 1, 0);
    // slideLeft(nan ? 0 : index, 1, nan ? last : index);
    // slideLeft(1, 1, 1);
    // slideLeft(nan ? 1 : index, 1, nan ? 1 : index);
    fadeOut(nan ? 0 : index, 1);
    fadeIn(nan || index === 6 ? 1 : next, 1);
  };

  const prevSlide = () => {
    x === 0 ? setX(-imageWidth * (src.length - 1)) : setX(x + imageWidth);
    const index = currentInt(x);
    const prev = index - 1;
    const nan = isNaN(index);
    const lastItem = src.length - 1;

    fadeOut(nan ? 0 : index, 1);
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
                  className={
                    index === match[index] - 1 ? `active${match[index]}` : ""
                  }
                >
                  <img key={"key" + index} src={src} alt={alt} />
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
                    <h4 className="details">{`${location} ${year}`}</h4>
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
