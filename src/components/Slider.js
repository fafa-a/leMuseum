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
    const first = imageList.firstChild.classList;
    const lastChild = imageList.lastChild.classList.value;
    const length = imageList.children.length;
    const lastIndex = length - 1;
    const ix = x / imageWidth;
    const index = currentInt(ix);
    const next = index + 1;
    const last = index - 1;
    const nan = isNaN(index);
    const target = imageList.children[nan ? ix : index].classList.value;
    const end = imageList.children[lastIndex - 1].classList.value;

    x === -imageWidth * (length - 1) ? setX(0) : setX(x - imageWidth);
    console.clear();
    // console.log(`x = ${x}`);
    // console.log(`ix = ${ix}`);
    console.log(`index = ${index}`);
    console.log(`next = ${next}`);
    console.log(`last = ${last}`);
    console.log(`length = ${length}`);
    console.log(`lastIndex = ${lastIndex}`);
    console.log("**********************");

    // console.log(`target = ${target}`);
    // console.log(`new = ${nan ? ix : index}`);
    // console.log(`end = ${end}`);
    // console.log(end === target);

    /****************************
     *
     *
     *     */
    if (target === `active${length}`) {
      slideLeft(lastIndex ? index : null, 1, lastIndex ? next : null); // sort img du cadre
      slideRight(0, 0, 1); // remets img a droite de la file
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);

      fadeOut(lastIndex, 1);
      fadeIn(0, 1);
      scale(0, 1); // effet de transition
    } else if (end === target) {
      slideLeft(lastIndex ? index : null, 1, lastIndex ? next : null); // sort img du cadre
      slideLeft(length ? next : null, 1, length ? next : null); // mets img dans le cadre

      fadeOut(index, 1); // le content disparait
      fadeIn(next, 1); // le content apparait
      scale(next, 1); // effet de transition
    } else if (
      imageList.children[nan ? ix : index].classList.contains(
        `active${nan ? 1 : next}`
      )
    ) {
      slideLeft(nan ? ix : index, 1, nan ? 1 : next); // sort img du cadre
      slideLeft(nan ? 1 : next, 1, nan ? 1 : next); // mets img dans le cadre
      slideLeft(nan ? 2 : next + 1, 0, nan ? 1 : next); // mets img dans la file

      fadeOut(nan ? 0 : index, 1); // le content disparait
      fadeIn(nan ? 1 : next, 1); // le content apparait
      scale(nan ? 1 : next, 1); // effet de transition
    }
    slideRight(last, 0, next); //remets img a droite de la file
  };

  /***********************
   *
   *
   */

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
