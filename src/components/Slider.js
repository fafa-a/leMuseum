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
    const length = imageList.children.length;
    const lastIndex = length - 1;
    const ix = x / imageWidth;
    const currentX = currentInt(ix);
    const nan = isNaN(currentX);

    const index = nan ? 0 : currentX;
    const nextIndex = index === lastIndex ? 0 : index + 1;
    const prevIndex = index === 0 ? lastIndex : index - 1;

    x === -imageWidth * (length - 1) ? setX(0) : setX(x - imageWidth);
    console.clear();
    // console.log(`x = ${x}`);
    console.log(`ix = ${ix}`);
    console.log(`currentX = ${currentX}`);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(`index = ${index}`);
    console.log(`<<prevIndex = ${prevIndex}`);
    console.log(`nextIndex>> = ${nextIndex}`);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>");

    /*******
     * NEW VERSION
     */
    if (imageList.children[index].classList.contains(`active${index + 1}`)) {
      slideLeft(index, 1, nextIndex); // decale a gauche
      slideLeft(nextIndex, 1, nextIndex); // img dans le cadre
      slideLeft(nextIndex + 1, 0, nextIndex); // decale à gauche

      scale(nextIndex, 1); // effet de transition
      fadeOut(index, 1); // le content disparait
      fadeIn(nextIndex, 1); // le content apparait
    }
  };

  const prevSlide = () => {
    const length = imageList.children.length;
    const lastIndex = length - 1;
    const ix = x / imageWidth;
    const currentX = currentInt(ix);
    const nan = isNaN(currentX);

    const index = nan ? lastIndex : lastIndex - currentX;
    const nextIndex = index === lastIndex ? 0 : index + 1;
    const prevIndex = index === 1 ? lastIndex : index - 1;

    const target = imageList.children[index].classList.value;

    x === -imageWidth * (length - 1) ? setX(0) : setX(x - imageWidth);
    console.clear();
    // console.log(`x = ${x}`);
    console.log(`ix = ${ix}`);
    // console.log(`next = ${next}`);
    // console.log(`nan = ${nan}`);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<");
    // console.log(`classe = ${target}`);
    // console.log(`length = ${length}`);
    console.log(`index = ${index}`);
    console.log(`<<prevIndex = ${prevIndex}`);
    console.log(`nextIndex>> = ${nextIndex}`);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<");

    /*******
     * NEW VERSION
     */
    if (imageList.children[index].classList.contains(`active${index + 1}`)) {
      slideLeft(index, 0, index + 1); // img a gauche
      slideRight(index, 1, -index); // img dans le cadre
      slideRight(nextIndex, 1, nan ? 1 : -index); // decale à droite

      scale(index, 1); // effet de transition
      fadeOut(nextIndex, 1); // le content disparait
      fadeIn(index, 1); // le content apparait
    }
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
                  <h2>{index}</h2>
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
