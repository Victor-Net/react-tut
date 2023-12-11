import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility" >
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access To Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          similique. Soluta deserunt quis corporis! Dolores non magni dolorem
          dicta repellat temporibus minus corrupti labore repudiandae.
        </p>
        <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
