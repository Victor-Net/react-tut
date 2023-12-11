import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quo quisquam corporis eligendi, provident . Mollitia veniam voluptates reprehenderit fuga quod odio laborum minima voluptatem dicta. Laboriosam., deleniti hic ipsam nis quia eum quis cupiditate! Veniam molestias neque aperiam explicabo"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="orange__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quo quisquam corporis eligendi, provident, deleniti hic ipsam nisi corrupti volupta"
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quo quisquam corporis eligendi, provident, deleniti hic ipsam nisi corrupti volupta"
        />
        <Feature
          title="Education"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quo quisquam corporis eligendi, provident, deleniti hic ipsam nisi corrupti volupta"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;

// 6:33am 7thdec2023
