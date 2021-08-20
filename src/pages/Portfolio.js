import React from "react";
import poocs from "../images/poocs.png";
import foodapi from "../images/foodapi.png";
import consultancy from "../images/consultancy.png";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="heading">
        <h3 className="heading_title">Portfolio.</h3>
        <div className="heading_para">
          <h5>Idea Crafting.</h5>
          <p>
            I started Frontend development in 2018. When creating my personal
            works, I realized that to present them, you need a personal
            portfolio.
          </p>
        </div>
      </div>
      <div className="works">
        <div className="card">
          <img src={poocs} alt="poocs" />
          <h3>Poocs.in</h3>
          <h4>React,Firebase,Express</h4>
        </div>
        <div className="card">
          <img src={consultancy} alt="consultancy" />
          <h3>DAPS</h3>
          <h4>HTML,SCSS,Javascript</h4>
        </div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card">
          <img src={foodapi} alt="foodapi" />
          <h3>Food Recipe App</h3>
          <h4>HTML,SCSS,Javascript</h4>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
