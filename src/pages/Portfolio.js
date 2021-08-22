import React from "react";
import poocs from "../images/poocs.png";
import foodapi from "../images/foodapi.png";
import consultancy from "../images/consultancy.png";
import Card from "../components/Card";

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
        <Card image={poocs} name="Poocs.in" tech="React,Firebase,Express" />
        <Card image={consultancy} name="DAPS" tech="HTML,SCSS,Javascript" />
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <Card image={foodapi} name="Foodie" tech="HTML,SCSS,Javascript" />
      </div>
    </div>
  );
}

export default Portfolio;
