import React, { useState } from "react";

function Socials() {
  const [stateDiv, setStateDiv] = useState(1);

  function changeContent() {
    if (stateDiv === 1) {
      setStateDiv(2);
    } else {
      setStateDiv(1);
    }
  }

  return (
    <div className="socials">
      <div onClick={changeContent} className="green-square"></div>
      {stateDiv === 1 ? (
        <div className="socials-phrase" id="myDiv">
          Social Network
        </div>
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
