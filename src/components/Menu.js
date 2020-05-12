import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const ref = useRef();
  const [open, setOpen] = useState(false)

  useOnClickOutside(ref, () => setOpen(false))

  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = event => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };

        document.addEventListener('mousedown', listener);
        return () => {
          document.removeEventListener('mousedown', listener);
        };
      },
      [ref, handler]
    );
  }

  return (
    <div className="menu">
      <div ref={ref} className="menu__title" onClick={() => setOpen(!open)} >
        Menu
          <i className="fas fa-caret-down menu__triangle"></i>
      </div>
      {open ? (
        <div className="menu__dropdown">
          <Link to="/" className="menu__dropdown__item">
            Home
            </Link>
          <Link to="/painting" className="menu__dropdown__item">
            Painting
            </Link>
          <Link to="/sculpture" className="menu__dropdown__item">
            Sculpture
            </Link>
        </div>
      ) : null}
    </div>
  );
}

export default Menu;
