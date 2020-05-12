import React, { useRef, useEffect, useState } from "react";
import { TweenLite, Power3 } from "gsap";

const Slider = (post) => {

  const data = post.post;
  const name = `${
    data.firstName == null ? data.lastName : data.firstName + data.lastName
    }`;

  // iteration pour l'index dynamique de la src et du state
  const src = data.artwork;
  const items = src.keys();

  // calcul de l'img par rapport au profilepics pour set la class Active
  const urlProps = data.artwork;
  // console.log(urlProps);

  let i = [1];

  let imageList = useRef(null);
  let sliderList = useRef(null);
  let slide = useRef(null);

  const imageWidth = 100;

  const [x, setX] = useState(0);

  // const [state, setState] = useState({

  //   // isActive: true,
  //   // currentSlide:true
  //   // nextSlide:false 
  //   //prevSlide:false
  // });

  useEffect(() => {
    TweenLite.to(sliderList.children[0], 0, {
      opacity: 1,
    });
  }, []);


  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeout
    });
  }
  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeout
    });
  }

  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.3,
      ease: Power3.easeout
    });
  };

  const fadeOut = (index, duration) => {
    TweenLite.to(sliderList.children[index], duration, {
      opacity: 0
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(sliderList.children[index], duration, {
      opacity: 1,
      delay: 1
    });
  };


  const nextSlide = () => {
    x === -imageWidth * (src.length - 1) ? setX(0) : setX(x - imageWidth)
    const next = x.toString().substr(1, 1);
    const current = next - 1;

    console.log(x);
    console.log(current);
    console.log(next);

    fadeOut(current === -1 ? 0 : current, 1)
    fadeIn(next, 1)

    // for (const item of items) {
    //   scale(item, 1)
    //   fadeOut(item, 1)
    //   fadeIn(item, 1)
    // }
    // for (const item of items) {
    //   if (imageList.children[item].classList.contains("active")) {
    //     setState({ isActive: false, isHidden: true });

    //     slideLeft(0, 1)
    //     slideLeft(item, 1)
    //     scale(item, 1)
    //     fadeOut(item, 1)
    //     fadeIn(1, 1)
    //   }
    //   else if (imageList.Children[item].classList.contains("active")) {
    //     setState({ isActive: true, isHidden: false });
    //   }
    // }
  };

  const prevSlide = () => {
    x === 0 ? setX(-imageWidth * (src.length - 1)) : setX(x + imageWidth)

    // for (const item of items) {
    //   if (imageList.children[item].classList.contains("active")) {
    //     setState({ isActive: false, isHidden: true });


    //     slideLeft(2, 0, 3)
    //     slideLeft(item, 1)
    //     slideRight(0, 1)
    //     slideRight(item, 1)
    //     // scale(item, 1)
    //     // fadeOut(item, 1)
    //     // fadeIn(1, 1)
    //   }
    //   else if (imageList.Children[item].classList.contains("active")) {
    //     setState({ isActive: true, isHidden: false });
    //   }
    // }
  };


  return (

    < div className="slider-content" >
      <div className="slider">
        <div onClick={prevSlide} className="arrows">
          <span>
            <i className="fas fa-long-arrow-alt-left"></i>
          </span>
        </div>

        <div className="slider__inner">
          <div className="slider__inner__image">
            <ul ref={(el) => (imageList = el)}>
              {data.artwork.map((item, index) => (
                <li
                  ref={slide}
                  key={index}
                  style={{ transform: `translate(${x}%)` }}
                // className={`${
                //   urlProps[index].src === item.src
                //     ? state.isActive
                //       ? "active"
                //       : ""
                //     : ""
                //   }`}
                >
                  <img key={"key" + index} src={item.src} alt={item.alt} />;
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
    </div >
  );
};

export default Slider;
