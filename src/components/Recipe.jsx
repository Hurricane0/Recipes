import React from "react";

export default ({ title, calories, image }) => (
  <div className="recipe_wrapper">
    <img className="recipe_image" src={image} alt="Food" />
    <h3>{title}</h3>
    <p>{calories}</p>
  </div>
);
