import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          veniam voluptates reprehenderit fuga quod odio laborum minima
          voluptatem dicta. Laboriosam.
        </p>
        <div className="gpt3__header-content__input">
          <input
            type="email"
            name=""
            id="email"
            placeholder="example@email.com"
          />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;

/* From 13:40pm wed6th2023dec */
/* 1:06:40 */
