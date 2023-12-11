import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving and distrusts instantly",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quo quisquam corporis eligendi, provident, deleniti hic ipsam nisi corrupti volupta",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quo quisquam corporis eligendi, provident, deleniti hic ipsam nisi corrupti volupta",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quo quisquam corporis eligendi, provident, deleniti hic ipsam nisi corrupti volupta",
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quo quisquam corporis eligendi, provident, deleniti hic ipsam nisi corrupti volupta",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          the future is now and you just need to realize it. step into the
          future today & make it happen
        </h1>
        <p>request early access to get started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;

/* start 10:30am */
/* sun10th2023dec */
/* 1:59:30 */
