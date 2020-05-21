import React, { useState } from "react";

function Socials() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="socials">
      <div
        onClick={() => setDropdown(!dropdown)}
        className="green-square"
      ></div>
      {dropdown ? (
        <div className="socials-phrase">Social Network</div>
      ) : (
        <div className="socials-items">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com"
              >
                <i className="fab fa-instagram-square"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitter.com"
              >
                <i className="fab fa-twitter-square"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Socials;
