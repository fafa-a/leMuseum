import React from "react";

function Socials() {
  function handleClick() {
    var x = document.getElementById("myDiv");
    if (x.innerHTML === "Socials Network") {
      x.innerHTML = ` <ul>
      <li>
        <a target="_blank" href="https://www.instagram.com">
          <i className="fab fa-instagram-square"></i>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.twitter.com">
          <i className="fab fa-twitter-square"></i>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.facebook.com">
          <i className="fab fa-facebook-square"></i>
        </a>
      </li>
    </ul>`;
    } else {
      x.innerHTML = "Socials Network";
    }
  }

  return (
    <div className="socials">
      <span onClick={handleClick} className="green-square"></span>
      <p className="socials-phrase" id="myDiv">
        Socials Network
      </p>

      <ul>
        <li>
          <a target="_blank" href="https://www.instagram.com">
            <i className="fab fa-instagram-square"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.twitter.com">
            <i className="fab fa-twitter-square"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com">
            <i className="fab fa-facebook-square"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
